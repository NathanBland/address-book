<style scoped lang="sass">
  nav.nav 
    justify-content: flex-end
    background-color: rgba(228, 228, 228, .75)
    -webkit-app-region: drag
    button
      margin-left: .1em
      margin-right: .1em
  
</style>

<template>
  <nav class='flex pt-10 pr-10 nav'>
    <button class='btn'>-</button>
    <button class='btn'>+</button>
    <button class='btn'>x</button>
  </nav>
</template>

<script>
  export default {
    components: {
    },
    name: 'nav-bar'
  }
</script>
