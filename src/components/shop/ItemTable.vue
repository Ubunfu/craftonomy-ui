<template>
  <div class="itemTable" v-if="shopItems">
      <input type="search" name="itemFilter" id="" v-model="query" v-on:keyup="filterItems()" placeholder="Filter items...">
      <table>
          <tr class="tableHeader">
              <th>Item Name</th>
              <th v-if="windowWidth > 600">Minecraft ID</th>
              <th v-on:click="sortItemsByPurchasePrice()">Purchase Price</th>
              <th v-on:click="sortItemsBySellPrice()">Sell Price</th>
          </tr>
          <tr v-for="item of filteredItems" :key="item.minecraftId" class="shopItem">
              <td>{{item.itemName}}</td>
              <td v-if="windowWidth > 600">{{item.itemId}}</td>
              <td class="itemPrice">{{item.price}}</td>
              <td class="itemSellPrice">{{item.sellPrice}}</td>
          </tr>
      </table>
  </div>
  <div v-else-if="errorLoadingShopItems" class="itemTable"><h2>Error Loading Shop Items!</h2></div>
  <div v-else class="itemTable"><h2>Loading ...</h2></div>
</template>

<script>
import {getItems, itemMatchesQuery} from "../../services/shopService";
import {useWindowWidthStore} from "../../store";

export default {
  setup() {
    const store = useWindowWidthStore();
    return {store}
  },
  data() {
    return {
      shopItems: null,
      filteredItems: null,
      query: '',
      sortByValueDescending: true,
      errorLoadingShopItems: false
    }
  },
  async created() {
    await this.getShopItems()
  },
  computed: {
    windowWidth() {
      return this.store.getWindowWidth;
    }
  },
  methods: {
    async getShopItems() {
      try {
        this.shopItems = await getItems()
      } catch {
        this.errorLoadingShopItems = true
      }
      this.filteredItems = this.shopItems
    },
    filterItems() {
      let refilteredItems = []
      this.shopItems.forEach(item => {
        if(itemMatchesQuery(item, this.query)) {
            refilteredItems.push(item)
        }
      });
      this.filteredItems = refilteredItems
    },
    sortItemsByPurchasePrice() {
      if(this.sortByValueDescending) {
        this.filteredItems.sort((item1, item2) => item2.price - item1.price)
      } else {
        this.filteredItems.sort((item1, item2) => item1.price - item2.price)
      }
      this.sortByValueDescending = !this.sortByValueDescending
    },
    sortItemsBySellPrice() {
      if(this.sortByValueDescending) {
        this.filteredItems.sort((item1, item2) => item2.sellPrice - item1.sellPrice)
      } else {
        this.filteredItems.sort((item1, item2) => item1.sellPrice - item2.sellPrice)
      }
      this.sortByValueDescending = !this.sortByValueDescending
    }
  }
}
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