<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li @click="displayTitle()" v-for="user in users" v-bind:key="user" v-if="user.isShow" >{{ user.title }}</li>
    </ul>
    <input type="text" v-model="newitem" key="newitem" />
    <div>
      {{newitem}}
    </div>
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
      newitem: '',
      msg: 'Message from Carol at ' + new Date().toLocaleString(),
      users: [
        {
          isShow: true,
          title: 'A'
        },
        {
          isShow: true,
          title: 'B'
        },
        {
          isShow: false,
          title: 'C'
        }
      ]
    }
  },
  methods: {
    displayTitle () {
      console.log('show message')
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
