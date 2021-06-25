'use strict';

require('dotenv').config()
const express = require('express')
const path = require('path')
const hbs = require('hbs')
const axios = require('axios')

const app = express()
const partialsPath = path.join(__dirname, './views/partials')
const staticsPath = path.join(__dirname, './public')

app.set('view engine', 'hbs')
app.use(express.static(staticsPath))
hbs.registerPartials(partialsPath)

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

if (process.env.LOCAL == 'true') {
    app.listen(process.env.LOCAL_PORT, () => {
        console.log('Server is up!');
    })
}

module.exports = app