const express = require('express');
const cors = require('cors');
require('dotenv').config();
const fetch = require('node-fetch');


const app = express();

let corsOptions = {
    origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));

app.use(express.static('public'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/views/index.html");
});

app.get('/time/:city', (req, res) => {

    let timeZone = '';
    switch (req.params.city) {
        case ('copenhagen'):
            timeZone = 'Europe/Copenhagen';
            break;
        case ('london'):
            timeZone = 'Europe/London';
            break;
        case ('newYork'):
            timeZone = 'America/New_York';
            break;
        case ('tokyo'):
            timeZone = 'Asia/Tokyo';
            break;
    }

    fetch(`https://www.timeapi.io/api/Time/current/zone?timeZone=` + timeZone)
        .then(resp => resp.json())
        .then(data => {
            res.status(200).send(JSON.stringify(data));
        })
        .catch((err) => {
            console.log(`Server Error: ${err}`);
        });
});

app.get('/time/coordinates/:coordinates', (req, res) => {
    console.log(req.params.coordinates);
    const splitString = req.params.coordinates.split('_');
    const latitude = splitString[0];
    const longitude = splitString[1];
    console.log(latitude);
    console.log(longitude);
    
    fetch(`https://www.timeapi.io/api/TimeZone/coordinate?latitude=${latitude}&longitude=${longitude}`) 
    .then(resp => resp.json())
    .then(data => {
        res.status(200).send(JSON.stringify(data));
    })
    .catch((err) => {
        console.log(`Server Error: ${err}`);
    }); 
});

// set port
const PORT = process.env.SERVER_PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});