const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    descripcion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

/*
lugar.getLugarLatLng(argv.descripcion)
    .then(direccion => {
        console.log(direccion);

        // clima.getClima(direccion.lat, direccion.lng)
        //     .then(temp => {
        //         console.log('temp =>', temp);
        //     })
        //     .catch(err => { console.log(err); })
        return clima.getClima(direccion.lat, direccion.lng);

    })
    .then(temp => {
        console.log('temp =>', temp);
    })
    .catch(err => {
        console.log(err);
    });
    */

const getInfo = async(direccion) => {
    //console.log(direccion);

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${direccion} es de ${temp}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}


getInfo(argv.descripcion)
    .then(resp => { console.log(resp); })
    .catch(err => { console.log(err); });