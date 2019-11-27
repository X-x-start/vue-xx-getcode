<template>
  <div id="app">
    <Getcode :getCode='getCode' />
  </div>
</template>

<script>
  import Getcode from './component/index'

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      Getcode
    },
    methods: {
      getCode() {
        console.log('getcode')
      }
    }
  }
</script>

<style>
</style>
