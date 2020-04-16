const request = require('request')
// const fs = require('fs')

const url = 'http://api.openweathermap.org/data/2.5/weather?lat=37.2567&lon=-122.4233&appid=a6446f11eaf6eaa4c2376595f6b4cc09&units=metric'

// 37.2567,-122.4233

request({ url: url, json : true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service')
    } else if(response.body.error) {
        console.log('Unable to find location')
    } else{
        console.log('Current Temp is: ', response.body.main.temp + ' C')
    }
})


// a6446f11eaf6eaa4c2376595f6b4cc09

//69729