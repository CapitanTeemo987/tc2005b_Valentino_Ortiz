const axios = require('axios');
const API_KEY = 'RGAPI-7b621041-6640-4d7e-9f48-eca6700ef451';

module.exports = class RiotModel {
    static async fetchSummoner(platform, gameName, tagLine) {
        const accountUrl = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`;
        
        try {
            const accountRes = await axios.get(accountUrl, {
                headers: { "X-Riot-Token": API_KEY }
            });

            const puuid = accountRes.data.puuid;

            const summonerUrl = `https://${platform}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`;
            return axios.get(summonerUrl, {
                headers: { "X-Riot-Token": API_KEY }
            });
            
        } catch (error) {
            throw error;
        }
    }

    static async fetchRecentMatches(puuid, count = 3) {
        try {
            const idsUrl = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=${count}`;
            const idsRes = await axios.get(idsUrl, {
                headers: { "X-Riot-Token": API_KEY }
            });

            const matchIds = idsRes.data;
            const matches = [];

            for (const matchId of matchIds) {
                const matchUrl = `https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}`;
                const matchRes = await axios.get(matchUrl, {
                    headers: { "X-Riot-Token": API_KEY }
                });
                matches.push(matchRes.data);
            }

            return matches;
        } catch (error) {
            throw error;
        }
    }
};