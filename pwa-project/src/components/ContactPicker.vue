<template>
  <div>
     <p> Rechercher</p>
     <input type="text" v-model="searchTerm" placeholder="Rechercher un etudiant"/>
     <ul>
      <li v-for="student in filteredStudents" :key="student.id">
        {{ student.name }}
      </li>
    </ul>
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

</style>
