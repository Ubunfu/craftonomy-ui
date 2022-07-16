import axios from "axios";

async function getItems() {
    try {
        return (await axios.get(`${process.env.VUE_APP_MC_SHOP_CATALOG_URL}`)).data
    } catch (error) {
        console.log(`Error getting items from shop service: ${JSON.stringify(error)}`)
        throw error
    }
}

function itemMatchesQuery(item, query) {
    if(item.itemName.includes(query)) {
        return true
    }
    if(item.itemId.includes(query)) {
        return true
    }
    return false
}

export {
    getItems,
    itemMatchesQuery
}