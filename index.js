// app.js

// Importa o módulo Express
const express = require('express');

// Inicializa o aplicativo Express
const app = express();

// Define uma rota simples
app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu web service!');
});

// Configura o aplicativo para ouvir na porta 3333
const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
