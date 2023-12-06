<template>
  <div>
   <p> Rechercher</p>
    <input type="text" v-model="searchTerm" placeholder="search...">
    <button @click="Search">Rechercher </button>
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
      resultatsDeRecherche: []
    }
  },
  methods: {
    async search() {
      try {
        const response = await axios.get(/api/recherche?term=${this.searchTerm});
        this.resultatsDeRecherche = response.data;
      } catch (error) {
        console.error('Erreur lors de la recherche', error);
      }
    }
  }
};


</script>

<style>

</style>
