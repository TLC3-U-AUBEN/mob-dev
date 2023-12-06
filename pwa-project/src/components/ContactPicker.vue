<template>
  <div>
    <p>Rechercher</p>
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
      this.$emit('search', this.searchTerm)
    }
  }
}
</script>

<style>
.search-form {
  max-width: 400px;
  margin: 20px auto;
  padding: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: #ecf0f1;
}

.b-button-primary {
  background-color: #3498db;
  color: white;
  border: none;
}

/* Media query pour ajuster la barre de recherche sur des écrans plus petits */
@media (max-width: 767px) {
  .search-form {
    max-width: 100%;
  }
}
</style>
