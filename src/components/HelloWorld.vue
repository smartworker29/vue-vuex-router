<template>
  <div class="hello">
    <component v-bind:is="currentView" >

    </component>
  </div>
</template>

<script>
import helloground from './HelloGround';
import hellogroundchild from './HelloGroundChild';

export default {
  name: 'HelloWorld',
  // data: {
  //   msg: 'Hello world'
  // }
  data () {
    return {
      newitem: '',
      msg: 'Message from Carol at ' + new Date().toLocaleString(),
      currentView: 'hellogroundchild',
      helloground: helloground,
      hellogroundchild: hellogroundchild
    }
  },
  components: {
      helloground: helloground,
      hellogroundchild: hellogroundchild
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
