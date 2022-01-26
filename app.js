const express = require('express');
const app = express();
const basicAuth = require('express-basic-auth')
const port = 8080;

var staticUserAuth = basicAuth({
    users: {
        'admin' : 'admin'
    },
    challenge: true
})

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    var songs = ["All or Nothing at All", "I've Got the World on a String", "Three Coins in the Fountain", "Love and Marriage", 
    "I've Got You Under My Skin","Come Fly With Me", "High Hopes", "Fly Me to the Moon","It Was a Very Good Year", "Luck Be a Lady", 
    "Strangers in the Night","That's Life", "Somethin' Stupid", "My Way", "New York, New York", "Learnin' the Blues", "Love's Been Good to Me",
    "All the Way", "You My Love","I Believe I'm Gonna Love You"];
    var randomSong = Math.floor(Math.random()*songs.length);
    res.json(songs[randomSong]); 
})

app.get('/birth_date', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.json("December 12, 1915");
})

app.get('/birth_city', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.json("Hoboken, New Jersey, U.S.");
})

app.get('/wives', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.json("Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx");
})

app.get('/picture', (req, res) => {
    const url = 'https://upload.wikimedia.org/wikipedia/commons/a/af/Frank_Sinatra_%2757.jpg'
    res.redirect(url);
}) //works in chrome, but not firefox. Something wrong with the cache

app.get('/public', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.json("Everybody can see this page");
})

app.get('/protected', staticUserAuth, (req, res) => {
    res.status(401);
    res.setHeader('Content-Type', 'text/plain');
    res.json("Welcome, authenticated client");
})

app.listen(port, () => {
  console.log(`app is listening on ${port}`);
})

