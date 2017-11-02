<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li v-for="user in users" v-bind:key="user" >{{ user }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  // data: {
  //   msg: 'Hello world'
  // }
  data () {
    return {
      msg: 'Message from Carol at ' + new Date().toLocaleString(),
      users: [
        'A', 'B', 'C', 'D', 'E','F','G','I','J'
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: aliceblue;
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

.hello {
  color: white;
}
</style>
