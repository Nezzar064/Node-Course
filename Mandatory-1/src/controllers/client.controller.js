const fs = require('fs');

const nav = fs.readFileSync('./public/components/nav.html').toString();



exports.home = (req, res) => {
    const home = fs.readFileSync('./public/pages/home.html').toString();
    res.send(nav + home);
};
