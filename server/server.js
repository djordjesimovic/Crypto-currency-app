import cors from 'cors';
import express from 'express';
import fetch from 'node-fetch';


const app = express();
app.use(cors());

app.get('/api/symbols', (req, res) => {
    const url = 'https://api.bitfinex.com/v1/symbols';
    fetch(url)
        .then(response => response.json())
        .then(data => res.json(data))
        .catch(error => res.status(500).send(error));
});

app.get('/api/details/:symbol', (req, res) => {
    const symbol = req.params.symbol.toUpperCase();
    const url = `https://api.bitfinex.com/v1/pubticker/${symbol}`;
    fetch(url)
        .then(response => response.json())
        .then(data => res.json(data))
        .catch(error => res.status(500).send(error));
})

app.get('/api/status', (req, res) => {
    const url = 'https://api-pub.bitfinex.com/v2/platform/status';
    fetch(url)
        .then(response => response.json())
        .then(data => res.json(data))
        .catch(error => res.status(500).send(error));
})

app.listen(5000, () => console.log('Server is running on http://localhost:5000'));
