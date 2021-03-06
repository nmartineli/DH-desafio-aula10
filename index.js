const express = require('express');
const app = express();
const axios = require('axios');
const apiUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=50';

axios.get(apiUrl).then((response) => {
    app.get('/pokemons', (req, res) => {
    const { name } = req.query;
    let listaRetorno = response.data.results.map((pokemon) => pokemon.name).filter(i => i.includes(name || ''));
    return res.json(listaRetorno); 
    })
});

app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
})
