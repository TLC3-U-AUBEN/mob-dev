<template>
  <div>
    <p> Rechercher:</p>
    <input type="text" v-model="searchTerm">
    <button @click="search">Rechercher</button>
  </div>
</template>

<script>
export default {
  name: 'ContactPicker',
  props: {

  },
  data () {
    return {
      searchTerm: ''
    }
  },
  methods: {
    search () {
      this.$emit('to-search', this.searchTerm)
    }
  }
}
</script>

<style>

</style>
