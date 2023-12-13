<template>
    <div>
      <p> Recherche </p>
      <input type="text" v-model="searchTeam">
      <button @click="search"> Rechercher </button>
    </div>
</template>
<script>

export default {
  name: 'ContactPicker',
  props: {
    contacts: Array
  },
  data () {
    return {
      searchTeam: ''
    }
  },
  computed: {
    filteredContacts () {
      return this.contacts.filter(contact =>
        contact.name.toLowerCase().includes(this.searchTeam.toLowerCase())
      )
    }
  },
  methods: {
    search () {
      this.$emit('to-search', this.searchTeam)
      console.log('Nom reccherché')
    }
  }
}
</script>
<style>
</style>
