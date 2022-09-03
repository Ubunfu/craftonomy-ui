<template>
  <div class="itemTable" v-if="state.shopItems">
      <input type="search" name="itemFilter" id="" v-model="state.query" v-on:keyup="filterItems()" placeholder="Filter items...">
      <table>
          <tr class="tableHeader">
              <th>Item Name</th>
              <th v-if="windowWidth > 600">Minecraft ID</th>
              <th v-on:click="sortItemsByPurchasePrice()">Purchase Price</th>
              <th v-on:click="sortItemsBySellPrice()">Sell Price</th>
          </tr>
          <tr v-for="item of state.filteredItems" :key="item.minecraftId" class="shopItem">
              <td>{{item.itemName}}</td>
              <td v-if="windowWidth > 600">{{item.itemId}}</td>
              <td class="itemPrice">{{item.price}}</td>
              <td class="itemSellPrice">{{item.sellPrice}}</td>
          </tr>
      </table>
  </div>
  <div v-else-if="state.errorLoadingShopItems" class="itemTable"><h2>Error Loading Shop Items!</h2></div>
  <div v-else class="itemTable"><h2>Loading ...</h2></div>
</template>

<script setup>
import {getItems, itemMatchesQuery} from "@/services/shopService";
import {useWindowWidthStore} from "@/store";
import {computed, reactive} from "vue";

const store = useWindowWidthStore();

let state = reactive({
  shopItems: null,
  filteredItems: null,
  query: '',
  sortByValueDescending: true,
  errorLoadingShopItems: false
})

const windowWidth = computed(() => store.getWindowWidth)

async function getShopItems() {
  try {
    state.shopItems = await getItems()
  } catch {
    state.errorLoadingShopItems = true
  }
  state.filteredItems = state.shopItems
}

function filterItems() {
  let refilteredItems = []
  state.shopItems.forEach(item => {
    if(itemMatchesQuery(item, state.query)) {
        refilteredItems.push(item)
    }
  });
  state.filteredItems = refilteredItems
}

function sortItemsByPurchasePrice() {
  if(state.sortByValueDescending) {
    state.filteredItems.sort((item1, item2) => item2.price - item1.price)
  } else {
    state.filteredItems.sort((item1, item2) => item1.price - item2.price)
  }
  state.sortByValueDescending = !state.sortByValueDescending
}

function sortItemsBySellPrice() {
  if(state.sortByValueDescending) {
    state.filteredItems.sort((item1, item2) => item2.sellPrice - item1.sellPrice)
  } else {
    state.filteredItems.sort((item1, item2) => item1.sellPrice - item2.sellPrice)
  }
  state.sortByValueDescending = !state.sortByValueDescending
}

getShopItems();

</script>

<style>
table {
  margin: 0 auto;
}
.tableHeader {
  text-align: center;
}
.shopItem {
  text-align: left;
}
.shopItem:hover {
  background-color: #666666;
  color: white;
}
.itemPrice, .itemSellPrice {
  text-align: right;
}
td {
  padding: 0 20px;
}
input {
  margin: 20px 30%;
  width: 30%;
}
@media screen and (max-width: 600px){
  input {
    margin: 0 0 20px 0;
    width: 100%;
  }
}
</style>