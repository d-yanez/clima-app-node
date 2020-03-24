const axios = require('axios');



const getLugarLatLng = async(direccion) => {

    const encodeUrl = encodeURI(direccion);

    const instance = axios.create({ //trabaja con promesas
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'x-rapidapi-key': '266916474dmsh50bc1afe72cadeap1c0008jsn2dbbe1db3f14' }
    });


    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para la ${direccion}`);

    }

    const data = resp.data.Results[0];

    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion: dir,
        lat,
        lng
    };

    // instance.get().then(resp => {
    //         console.log(resp.data.Results[0]);
    //     })
    //     .catch(err => {
    //         console.log('ERROR!!!', err);
    //     });
}


module.exports = {
    getLugarLatLng
}