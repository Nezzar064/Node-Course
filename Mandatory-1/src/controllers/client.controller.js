const fs = require('fs');

const readPage = (path, title, includeFooter) => {
    const nav = fs.readFileSync('./public/components/nav.html').toString();
    const footer = fs.readFileSync('./public/components/footer.html').toString();
    const page = fs.readFileSync(path).toString();
    if (includeFooter === true) {
        return nav.replace("%%TITLE_PLACEHOLDER%%", title) + page + footer;
    } else {
        return nav.replace("%%TITLE_PLACEHOLDER%%", title) + page;
    }
};


exports.home = (req, res) => {
    res.send(readPage('./public/pages/home.html', 'Home'));
};

exports.docs = (req, res) => {
    switch (req.params.category) {
        case 'javascript':
            res.send(readPage('./public/pages/javascript.html', 'Docs • Javascript', true));
            break;
        case 'node':
            res.send(readPage('./public/pages/node.html', 'Docs • Node/Nodemon', true));
            break;
        case 'REST':
            res.send(readPage('./public/pages/rest.html', 'Docs • REST Api', true));
            break;
        case 'ssr':
            res.send(readPage('./public/pages/ssr.html', 'Docs • SSR', true));
            break;
        case 'unix':
            res.send(readPage('./public/pages/unix.html', 'Docs • CLI/UNIX', false));
            break;
        case 'cc':
            res.send(readPage('./public/pages/cc.html', 'Docs • Clean Code', false));
            break;
        default:
            res.send(readPage('./public/pages/javascript.html', 'Docs • Javascript', true));
            break;
    }
};