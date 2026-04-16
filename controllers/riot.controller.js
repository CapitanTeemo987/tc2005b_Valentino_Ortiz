const Riot = require('../models/riot.model');

exports.get_summoner = (request, response, next) => {
    const platform = 'la1'; 
    const gameName = 'valentinof31'; 
    const tagLine = 'LAN';          

    Riot.fetchSummoner(platform, gameName, tagLine)
        .then(res => {
            response.render('riot_views', {
                titulo: "Estadísticas Riot",
                data: res.data,
                csrfToken: request.csrfToken(),
            });
        })
        .catch(err => {
            console.error("Error detallado:", err.response ? err.response.data : err.message);
            next(err);
        });
};