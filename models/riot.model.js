const axios = require('axios');
const API_KEY = 'RGAPI-15a572ec-1b78-431d-8907-5e75aa049c01';

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
};