const express = require('express');
const cors = require('cors');
require('dotenv').config();


const app = express();

let corsOptions = {
    origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));

// JSON content type
app.use(express.json());

app.use(express.urlencoded({extended: true}));

// set port
const PORT = process.env.SERVER_PORT || 8080;
require('./src/routes/beers.route')(app);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});