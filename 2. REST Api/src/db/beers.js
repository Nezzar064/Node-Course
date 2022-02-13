const beers = [];

const logger = require('loglevel');

let count = 1;

exports.create = (beer) => {
    const newBeer = {
        id: count,
        name: beer.name,
        type: beer.type,
        abv: beer.abv,
        colour: beer.colour
    };
    count++;
    beers.push(newBeer);
    return newBeer;
};

exports.findById = (id) => {
    const beerToFindIndex = beers.map(beer => beer.id).indexOf(parseInt(id));

    if (beerToFindIndex === -1) {
        return { message: `beer with id: ${id} does not exist in db`};
    }

    return beers[beerToFindIndex];
};

exports.findAll = () => {

    if (JSON.stringify(beers) === JSON.stringify([])) {
        return { message: `no beers registered in db`};
    }

    return beers;
};

exports.findAllByType = (type) => {
    const result = beers.filter(x => {
        return x.type === type;
    });

    if (JSON.stringify(result) === JSON.stringify([])) {
        return { message: `no beers of type: ${type} in db`};
    }

    return result;
};

exports.del = (id) => {
    const beerToRemoveIndex = beers.map(beer => beer.id).indexOf(parseInt(id));

    if (beerToRemoveIndex === -1) {
        return { message: `beer with id: ${id} does not exist in db`};
    }

    beers.splice(beerToRemoveIndex, 1);
};

exports.update = (beer, id) => {
    const beerToUpdateIndex = beers.map(beer => beer.id).indexOf(parseInt(id));

    if (beerToUpdateIndex === -1) {
        return { message: `beer with id: ${id} does not exist in db`};
    }
    beers[beerToUpdateIndex].name = beer.name;
    beers[beerToUpdateIndex].type = beer.type;
    beers[beerToUpdateIndex].abv = beer.abv;
    beers[beerToUpdateIndex].colour = beer.colour;

    return beers[beerToUpdateIndex];
};
