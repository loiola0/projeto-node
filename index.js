const express = require('express');

const app = express();

const getRandomUser = require('./controller/user.controller');

app.get('/get-user', async (req, res) => {
  let result = await getRandomUser();
  
  return res.json(result);
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Servidor Express rodando na porta ${PORT}`);
});