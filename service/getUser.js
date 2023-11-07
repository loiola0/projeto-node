const axios = require('axios');

async function getUser() { 
    try {
        const response = await axios.get('https://randomuser.me/api/');
        const result = response.data;
        return result;
      } catch (error) {
        JSON({ error: 'Erro ao buscar dados do usuário aleatório' });
      }
}

module.exports = getUser;
