const request = require("request")


const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoia2F6dWtpbGFwaXNsYXp1bGkiLCJhIjoiY2s4c2Ywdm93MGZnMTNvcDlqM3V2ZjhkeSJ9.q3w_d-EbOxkHpjGA4PBVMg'

    request({ url:url, json : true} , (error, response) => {
        if (error) {
            callback('Unable to find the Location Services!', undefined)
        } else if(response.body.features.length === 0){
            callback('Unable to find location. Try another Search', undefined)
        } else{
            callback(undefined, {
                latitude : response.body.features[0].center[1],
                longitude : response.body.features[0].center[0],
                location : response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode