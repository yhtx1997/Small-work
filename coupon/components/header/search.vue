<template>
  <div class="search">
    <input
      v-model="searchText"
      type="text"
      @focus="searchFocus"
      @blur="searchBlur"
      @keyup="searchInput"
    />
    <button></button>
    <ul v-show="show">
      <li v-for="item of hotSearch" :key="item.id" @click="liClick">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PublicSearch',
  data() {
    return {
      afterHot: [],
      hotSearch: [],
      show: false,
      searchText: ''
    }
  },
  mounted() {
    this.afterHot = [
      {
        id: '1',
        title: 'coupon'
      },
      {
        id: '2',
        title: '50%'
      },
      {
        id: '3',
        title: 'code'
      },
      {
        id: '4',
        title: 'Pizzas'
      },
      {
        id: '5',
        title: 'Cothes'
      }
    ]
    this.hotSearch = this.afterHot
  },
  methods: {
    searchFocus() {
      this.show = true
    },
    searchBlur() {
      setTimeout(() => {
        this.show = false
      }, 180)
    },
    liClick(e) {
      this.searchText = e.currentTarget.innerText
    },
    searchInput() {
      const afterHot = this.afterHot
      const searchText = this.searchText
      this.hotSearch = afterHot.filter(
        e => e.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  position: relative;
  align-items: center;
}
input,
button {
  height: 36px;
  border: none;
}
input {
  box-sizing: border-box;
  width: 300px;
  padding: 0 10px;
}
button {
  width: 50px;
  background-color: #f5f5f5;
  background-image: url('./../../assets/images/search.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
}
ul {
  position: absolute;
  z-index: 2;
  color: #555555;
  top: 59px;
  left: 0;
  right: 0;
  background: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  font-size: 16px;
  text-align: center;
}
li {
  box-sizing: border-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  height: 44px;
  padding: 10px 10px;
  cursor: pointer;
  &:hover {
    background: #f5f5f5;
  }
}
@media screen and (max-width: 768px) {
  .search {
    width: 50%;
  }
  input {
    width: 100%;
  }
}
</style>
