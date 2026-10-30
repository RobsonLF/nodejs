# Configuração de Ambiente

**Passo1 -** Executar arquivo ativar-node.cmd pelo terminal

**Passo2 -** No terminal execute **npm init -y** para criar o arquivo package.json

**Passo3 -** Instalar o express para poder criar o servidor **npm install express**

**Passo4 -** Criar um arquivo Server.js

```JavaScript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Olá! O servidor Node.js está funcionando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```

**Passo5 -** Inicia o Server com **node server.js**

**Passo6 -** acesse http://localhost:3000
