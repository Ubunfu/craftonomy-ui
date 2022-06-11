import axios from 'axios'

async function getItems() {
    try {
        console.log(`ENV: ${JSON.stringify(process.env)}`)
        // return (await axios.get(`https://lq0nyyo7qb.execute-api.us-east-1.amazonaws.com/items`)).data
        return (await axios.get(`${process.env.VUE_APP_MC_SHOP_CATALOG_URL}`)).data
    } catch (error) {
        console.log(`Error getting items from shop service: ${JSON.stringify(error)}`)
        throw error
    }
}

export {
    getItems
}