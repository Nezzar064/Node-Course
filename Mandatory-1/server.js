const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.static('public'));

require('./src/routes/client.route')(app);

// set port
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});