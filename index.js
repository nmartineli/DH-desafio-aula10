const express = require('express');
const app = express();

const listaPokemons = [
    'Bulbasaur',
    'Ivysaur',	
    'Venusaur',
    'Mega Venusaur',
    'Charmander',
    'Charmeleon',
    'Charizard',
    'Mega Charizard X',
    'Mega Charizard Y',
    'Squirtle',
    'Wartortle',
    'Blastoise',
    'Mega Blastoise',
    'Caterpie',
    'Metapod',
    'Butterfree',
    'Weedle',
    'Kakuna',
    'Beedrill',
    'Mega Beedrill',
];


app.get('/pokemons', (req, res) => {
    const { name } = req.query;
    let listaRetorno = listaPokemons.filter(i => i.includes(name || ''));
    return res.json(listaRetorno); 
});



app.listen(3001, () => {
    console.log('Servidor rodando na porta 3001');
})
