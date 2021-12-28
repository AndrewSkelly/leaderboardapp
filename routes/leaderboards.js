const { Pool } = require('pg'); // node-postgres package
const colors = require('colors');
const express = require('express'); // Express Server
const router = express.Router();

// CREATE POOL OBJECT WITH POSTGRES LOGIN DETAILS
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'dbserver',
    password: 'Mrbeastman648',
    port: 5432,
});

// CONNNECT TO POSTGRES PERMENANT SESSION
pool.connect((err) => {
    if (err) {
        console.log('-> Failed to Connect Postgres Database'.bold.red);
    } else {
        console.log('-> Connected to Postgres Database'.bold.blue);
    }
});

router.get('/api/leaderboards/all', (req, res) => {
    pool.query("SELECT * FROM customers", (err, response) => {
        console.log("(ROUTE-USE) ".blue.bold + "All Contestants".dim.bold)

        // res.send('Irish Records: ')
        // res.send(JSON.stringify(response.rows[0]))
        res.json(response.rows)

    })
})

router.get('/api/leaderboards/ireland', (req, res) => {
    pool.query("SELECT * FROM customers WHERE cust_country = 'Ireland'", (err, response) => {
        console.log("(ROUTE-USE) ".blue.bold + "Irish Contestants".dim.bold)

        // res.send('Irish Records: ')
        // res.send(JSON.stringify(response.rows[0]))
        res.json(response.rows)

    })
})

router.get('/api/leaderboards/all/full', (req, res) => {
    pool.query("SELECT * FROM customers INNER JOIN leaderboards ON \"cust_id\" = \"lead_id\"", (err, response) => {
        console.log("(ROUTE-USE) ".blue.bold + "All Contestants Results".dim.bold)

        // res.send('Irish Records: ')
        // res.send(JSON.stringify(response.rows[0]))
        res.json(response.rows)

    })
})

router.get('/api/leaderboards/ireland/full', (req, res) => {
    pool.query("SELECT * FROM customers INNER JOIN leaderboards ON \"cust_id\" = \"lead_id\" WHERE cust_country = 'Ireland'", (err, response) => {
        console.log("(ROUTE-USE) ".blue.bold + "Irish Contestants Results".dim.bold)

        // res.send('Irish Records: ')
        // res.send(JSON.stringify(response.rows[0]))
        res.json(response.rows)

    })
})

router.get('/api/leaderboards/highscore', (req, res) => {
    pool.query("SELECT MAX(lead_best) FROM leaderboards", (err, response) => {
        console.log("(ROUTE-USE) ".blue.bold + "Highest Score".dim.bold)
        

        // res.send('Irish Records: ')
        // res.send(JSON.stringify(response.rows[0]))
        res.json(response.rows)

    })
})

module.exports = router