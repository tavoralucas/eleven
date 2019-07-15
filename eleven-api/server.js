require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const PORT = 5000;

const travelApi = axios.create({
    baseURL: process.env.TRAVEL_URL,
    headers: {'x-api-key': process.env.TRAVEL_KEY}
});

const bigApi = axios.create({
    baseURL: process.env.BIG_URL,
    headers: {'x-api-key': process.env.BIG_KEY}
});

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({message: 'Hello'});
})

router.get('/destinos', async (req, res) => {
    try { 
        const response = await travelApi.get('/destinos');
        res.status(200).json(response.data);
    } catch(err) {
        console.log(err);
        res.status(500).json({message: 'erro interno'});
    }
});

router.get('/tipoviagem', async (req, res) => {
    try { 
        const response = await travelApi.get('/tipoviagem');
        res.status(200).json(response.data);
    } catch(err) {
        console.log(err);
        res.status(500).json({message: 'erro interno'});
    }
});

router.post('/userInfo', async (req, res) => {
    try {
        const { document } = req.body;
        const response = await bigApi.post('', {
            Datasets: "basic_data",
            q: `doc{${document}}`,
            AccessToken: "x-api-key"
        });
        res.status(200).json(response.data);
    } catch(err) {
        console.log(err);
        res.status(500).json({message: 'erro interno'});
    }
});

app.use('/', router);

app.listen(PORT, () => console.log(`Server app listening on port ${PORT}!`));
