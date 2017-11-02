<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'HelloGround',
  data () {
    return {
      msg: 'This is my dream'
    }
  },
  mounted () {
    console.log('clg', this.msg)
    this.$data.msg = 'not dream, it\'s real';
  }
}

</script>