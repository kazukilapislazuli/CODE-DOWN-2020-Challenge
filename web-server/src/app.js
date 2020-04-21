const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//Define path for express configuration
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handle bars and customized views
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup a directory to serve static files
app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {
    res.render('index', {
        title : 'Hello World',
    })
})

app.get('/help', (req,res) => {
    res.render('help')
})

app.get('/about', (req,res) => {
    res.render('about')
})


app.get('/weather', (req,res) => {
    res.send([
        {
            'Forecast' : 'Sunny Day'
        }, 
        {
            'Location' : 'Bengaluru'
        }
    ])
})

app.listen(3000, () => {
    console.log('Express Server Running on Port 3000')
} )
