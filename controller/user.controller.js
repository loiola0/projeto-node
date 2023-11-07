const getUser = require('../service/getUser');

async function getRandomUser(){
  const result = await getUser();

  return result;
} 

module.exports = getRandomUser;