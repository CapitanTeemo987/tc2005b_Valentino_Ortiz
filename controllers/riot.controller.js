const Riot = require('../models/riot.model');

exports.get_summoner = (request, response, next) => {
    // Render the form initially
    response.render('riot_views', {
        titulo: "Estadísticas Riot",
        data: null,
        matches: null,
        wins: 0,
        losses: 0,
        error: null,
        csrfToken: request.csrfToken(),
    });
};

exports.post_summoner = (request, response, next) => {
    const username = request.body.username;
    if (!username || !username.includes('#')) {
        return response.render('riot_views', {
            titulo: "Estadísticas Riot",
            data: null,
            matches: null,
            wins: 0,
            losses: 0,
            error: "Formato de nombre de usuario inválido. Use gameName#tagLine (ej: valentinof31#LAN)",
            csrfToken: request.csrfToken(),
        });
    }

    const [gameName, tagLine] = username.split('#');
    const platform = 'la1'; // Default platform, could be made configurable later

    Riot.fetchSummoner(platform, gameName, tagLine)
        .then(res => {
            const summonerData = res.data;
            const puuid = summonerData.puuid;
            return Riot.fetchRecentMatches(puuid, 5)
                .then(matches => ({ summonerData, matches }))
                .catch(() => ({ summonerData, matches: null }));
        })
        .then(({ summonerData, matches }) => {
            let wins = 0, losses = 0;
            if (matches) {
                matches.forEach(match => {
                    const participant = match.info.participants.find(p => p.puuid === summonerData.puuid);
                    if (participant) {
                        if (participant.win) wins++;
                        else losses++;
                    }
                });
            }
            response.render('riot_views', {
                titulo: "Estadísticas Riot",
                data: summonerData,
                matches: matches,
                wins: wins,
                losses: losses,
                error: null,
                csrfToken: request.csrfToken(),
            });
        })
        .catch(err => {
            console.error("Error detallado:", err.response ? err.response.data : err.message);
            let errorMessage = "No se pudo encontrar el invocador. Verifique el nombre de usuario.";
            if (err.response && err.response.status === 404) {
                errorMessage = "Invocador no encontrado. Verifique el nombre de usuario y tag.";
            } else if (err.response && err.response.status === 403) {
                errorMessage = "Error de autenticación con la API de Riot.";
            }
            response.render('riot_views', {
                titulo: "Estadísticas Riot",
                data: null,
                matches: null,
                wins: 0,
                losses: 0,
                error: errorMessage,
                csrfToken: request.csrfToken(),
            });
        });
};