<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >,
    <q-btn @click="afficherMessage" color="primary" label="Cliquez-moi" />
    <q-dialog v-model="dialogVisible">
      <q-card>
        <q-card-section>
          <q-card-title>Bienvenue !</q-card-title>
        </q-card-section>
        <q-card-section>
          Merci d'avoir cliqué sur le bouton. Bienvenue sur notre site !
        </q-card-section>
        <q-card-actions align="right">
          <q-btn color="primary" label="Fermer" @click="fermerDialog" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    afficherMessage () {
      this.dialogVisible = true
    },
    fermerDialog () {
      this.dialogVisible = false
    }
  }
}
</script>
