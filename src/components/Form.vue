<template>
  <div class="form">
      <ul id="v-for-object" class="demo">
        <li v-for="post of posts" :key="post.id">
          {{ post.body }}
        </li>
      </ul>
      <div id="error">
        {{errors[0]}}
      </div>
    <router-link to="/">Back</router-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      posts: [],
      errors: []
    }
  },
  created () {
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        this.posts = response.data
      })
      .catch(e => {
        console.log(e)
        this.errors.push(e)
      })
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
