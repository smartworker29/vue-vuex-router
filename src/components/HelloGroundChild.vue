<template>
  <div @click="sendEvent()" >
    Child Component {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'helloChild',
    data () {
      return {
        msg: 'dfsdf'
    }
    
  },
  methods: {
    sendEvent () {
      this.$emit('incrementChild');
    }
  }
}


</script>