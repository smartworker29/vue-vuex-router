<template>
  <div>
    <hellochild @incrementChild="increment" ></hellochild>
  </div>
</template>

<script>
import hellochild from './HelloGroundChild'

export default {
  name: 'HelloGround',
  components: {
    hellochild: hellochild
  },
  data () {
    return {
      book: '',
      msg: 'This is my dream'
    }
  },
  mounted () {
    console.log('clg', this.msg)
    this.$data.msg = 'not dream, it\'s real';
  },
  beforeMount () {
    console.log('clg beforeMount ', this.msg)

  },
  beforeUpdate () {
    console.log('clg beforeUpdate ', this.msg)

  },
  updated () {
    console.log('clg updated', this.msg)
  },
  methods: {
    showMesage () {
      window.alert('show alert');
    },
    increment () {
      window.alert('increment');
    }
  }
}


</script>