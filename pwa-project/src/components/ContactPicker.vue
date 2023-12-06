<template>
  <div>
    <p class="rec">Rechercher </p>
    <input class="inp" type="text" v-model="searchTerm">
    <button class="but" @click="search">Rechercher</button>
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
@media screen and (max-width: 430px) {
  .rec {
    font-size: 14px;
  }
  .inp {
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  .but {
    width: 100%;
  }
}
</style>
