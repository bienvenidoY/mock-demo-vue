<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>前端mock数据</h2>
    <ul>
      <li>
        <button @click="$_goods">api/goods json</button>
        <button @click="$_ratings">api/ratings json</button>
        <button @click="$_list">api/list mock.js</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import {api} from '../api/api'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted() {
      this.$_seller()
    },
    methods:{
      $_seller(){
        this.$axios({
          method: api.seller.method,
          url: api.seller.url
        })
          .then(res => {
            console.log(res)
          })
      },
      $_goods(){
        this.$axios({
          method: api.goods.method,
          url: api.goods.url
        })
          .then(res => {
            console.log(res)
          })
      },
      $_ratings(){
        this.$axios({
          method: api.ratings.method,
          url: api.ratings.url
        })
          .then(res => {
            console.log(res)
          })
      },
      $_list(){
        this.$axios({
          method: api.list.method,
          url: api.list.url
        })
          .then(res => {
            console.log(res)
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
