const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=16699ba027dfcc52022f38429a04b2b1&units=metric`);

    return resp.data.main.temp + 'ºC';
}


module.exports = {
    getClima
}