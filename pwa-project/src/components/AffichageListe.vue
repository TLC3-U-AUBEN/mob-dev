<template>
  <div>
    <p> Afficher</p>
    <input type="text" v-model="notifyTerm">
  </div>
</template>

<script>
export default {
  name: 'AffichageListe',
  props: {

  },
  data () {
    return {
      notifyTerm: ''
    }
  },
  methods: {
    notify () {
      this.$emit('to-notify', this.notifyTerm)
    }
  }
}
</script>

<style>

</style>
