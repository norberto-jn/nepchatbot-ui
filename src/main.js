const path = require('path');
const express = require('express')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
  console.log(`App de exemplo esta rodando na porta ${port}`)
})