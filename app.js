
// IMPORT REQUIRED PACKAGES
const express = require('express'); // Express Server
const req = require('express/lib/request');
const path = require('path') // Path Module
const { Pool } = require('pg'); // node-postgres package
const colors = require('colors');
const { time } = require('console');
const leaderboards = require('./routes/leaderboards');

// INITIALISE EXPRESS AS APP AND SET PORT OF 3000
const app = express()
const port = 3000


// MIDDLEWARE
// SET VIEW ENGINE & PATH
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index' , {
        art: 'gebt'
    })
    console.log("(ROUTE-USE) ".blue.bold + "Home".dim.bold)
})

app.get('/error', (req, res) => {
    res.render('error')
    console.log("(ROUTE-USE) ".blue.bold + "ERROR".red.bold)
})

app.get('/err', (req, res) => {
})

app.use(leaderboards);


app.listen(port, (err) => {
    if(err) {
        console.log('-----------------------------'.red.bold)
        console.log(`Server Error ${port} `.red.bold)
        console.log('-----------------------------'.red.bold)
        console.log('')
    } else {
        console.log('-----------------------------'.rainbow.bold)
        console.log(`Server Listening on port ${port} `.rainbow.bold)
        console.log('-----------------------------'.rainbow.bold)
        console.log('')
        console.log(`-> ${new Date().toString().split(' ', 5).join(" ")}`.bold.italic)
    }
})

// -- Select All from Customers table
// SELECT * FROM customers

// -- Select All from Leaderboards table
// SELECT * FROM leaderboards

// -- Select All from Customers table & Join Leaderboard table info
// SELECT * FROM customers INNER JOIN leaderboards ON "ID" = "Leader_ID"

// SELECT * FROM customers CROSS JOIN leaderboards;