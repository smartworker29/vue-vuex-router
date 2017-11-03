<template>
  <h1 @click.self="showMesage()" style="width: 200px;height:300px; background: yellow; display: block;" ><div> {{ msg }} </div></h1>
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
    }
  }
}


</script>