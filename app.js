'use strict';

require('dotenv').config()
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const axios = require('axios')
const fs = require('fs')

const app = express()
const partialsPath = path.join(__dirname, './views/partials')
const staticsPath = path.join(__dirname, './public')

app.set('view engine', 'hbs')
app.use(express.static(staticsPath))
hbs.registerPartials(partialsPath)

// // Error handler
// app.use((err, req, res) => {
//     console.error(err);
//     res.status(500).send('Internal Serverless Error');
// });

app.get('/', async (req, resp) => {
    let catalogItems = []
    try {
        catalogItems = await axios.get(process.env.MC_SHOP_CATALOG_URL)
    } catch (error) {
        console.error(error);
    }
    resp.render('catalog', {
        title: 'Shop Catalog',
        items: catalogItems.data
    })
})

app.get('/catalog', (req, resp) => {
    return resp.send(fs.readFileSync('./catalog.json'))
})

if (process.env.LOCAL == 'true') {
    app.listen(process.env.LOCAL_PORT, () => {
        console.log('Server is up!');
    })
}

module.exports = app