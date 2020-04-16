const request = require("request")

const forecast = (lattitude, longitude, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lattitude + '&lon=' + longitude + '&appid=a6446f11eaf6eaa4c2376595f6b4cc09&units=metric'
        
    request  ({url: url, json : true} , (error,response) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if(response.body.cod === "400") {
            callback('Unable to find location' , undefined)
        } else{
            callback(undefined, {
                Current_Temp : response.body.main.temp
            })
        }
    })
}

module.exports = forecast