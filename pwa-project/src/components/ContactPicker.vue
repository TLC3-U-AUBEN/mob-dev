<template>
  <div>
   <p> Rechercher</p>
    <input type="text" v-model="searchTerm" placeholder="search...">
    <button @click="Search">Rechercher </button>
    <ul>
      <li v-for="result in searchResults" :key="result.name">{{ result.phonenumber }}</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'ContactPicker',
  props: {

  },
  data () {
    return {
      searchTerm: '',
      resultatsDeRecherche: ['numéro de tél']
    }
  },
  methods: {
    rechercher () {
      this.$emit('to-search', this.searchTerm)
    }
  }
}

</script>

<style>

</style>
