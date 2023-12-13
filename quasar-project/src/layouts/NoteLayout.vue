<template>
  <q-layout view="hHh Lpr fFf">
    <q-toolbar class="col-10">
      <q-btn flat dense label="Accueil" to="/" />
      <q-btn flat dense label="Boîte de réception" to="/inbox" />
      <!-- Ajoutez d'autres liens selon les besoins -->
    </q-toolbar>

    <q-header elevated class="row no-wrap">
      <q-toolbar class="col-10">
        <q-btn flat round dense icon="menu" @click="leftDrawer = !leftDrawer" />
        <q-toolbar-title>
          NoteDev
        </q-toolbar-title>
      </q-toolbar>

      <q-toolbar class="col-6">
        <q-btn flat dense label="Accueil" to="/" />
        <q-btn flat dense label="Boîte de réception" to="/inbox" />
        <!-- Ajoutez d'autres liens selon les besoins -->
      </q-toolbar>

      <q-toolbar class="col-2">
        <q-btn flat round dense icon="search" class="q-mr-md" @click="onSearch" />
        <q-btn flat round dense icon="more_vert" @click="onMore" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawer" side="left" bordered content-class="bg-grey-2">
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <q-item clickable v-ripple to="/">
            <q-item-section avatar>
              <q-icon name="edit" />
            </q-item-section>

            <q-item-section>
              Editer
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple to="/inbox">
            <q-item-section avatar>
              <q-icon name="event" />
            </q-item-section>
            <q-item-section>
              Calendrier
            </q-item-section>
          </q-item>
          <!-- Ajoutez d'autres éléments de menu -->
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <div class="q-pa-md q-gutter-sm">
        <q-editor v-model="editor" min-height="5rem">
          <q-editor-toolbar>
            <q-btn v-close-popup icon="format_bold" @click="applyBold" />
            <q-btn v-close-popup icon="format_italic" @click="applyItalic" />
            <!-- Ajoutez d'autres boutons selon les besoins -->
          </q-editor-toolbar>
        </q-editor>
      </div>
      <router-view />
    </q-page-container>

    <div class="row justify-between">
      <q-fab
        v-model="fabLeft"
        vertical-actions-align="left"
        color="primary"
        glossy
        icon="keyboard_arrow_up"
        direction="up"
      >
      <q-fab-action label-position="right" color="primary" @click="sendEmail" icon="mail" label="Email" />
        <q-fab-action label-position="right" color="secondary" @click="setAlarm" icon="alarm" label="Alarm" />
        <q-fab-action label-position="right" color="orange" @click="shareNote" icon="share" label="Partager" />
        <q-fab-action label-position="right" color="accent" @click="openMap" icon="map" label="Carte" />
      </q-fab>
      <q-fab
        v-model="fabCenter"
        vertical-actions-align="center"
        color="primary"
        glossy
        icon="keyboard_arrow_up"
        direction="up"
      >
        <q-fab-action color="primary" @click="sendEmail" icon="mail" label="Email" />
        <q-fab-action color="secondary" @click="setAlarm" icon="alarm" label="Alarm" />
        <q-fab-action color="orange" @click="shareNote" icon="share" label="Partager" />
        <q-fab-action color="accent" @click="openMap" icon="map" label="Carte" />
      </q-fab>

    </div>
  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      leftDrawer: false,
      editor: '',
      fabLeft: false,
      fabCenter: false,
      fabRight: false
    }
  },
  methods: {
    sendEmail () {
      window.location.href = 'mailto:example@example.com'
    },
    openMap () {
      window.open('https://www.google.com/maps', '_blank')
    },
    applyBold () {
      // Logique pour appliquer le gras au texte sélectionné
    },
    applyItalic () {
      // Logique pour appliquer l'italique au texte sélectionné
    },
    onSearch () {
      // Logique pour la recherche
    },
    onMore () {
      // Logique pour les options supplémentaires
    },
    setAlarm () {
      window.open('https://www.horlogeparlante.com', '_blank')
    },
    shareNote () {
      if (navigator.share) {
        navigator.share({
          title: 'Ma Note',
          text: 'Voici le contenu de ma note...',
          url: window.location.href // Lien vers la note si elle est en ligne
        })
          .then(() => console.log('Note partagée avec succès !'))
          .catch((error) => console.log('Erreur lors du partage :', error))
      } else {
        console.log('Partage non pris en charge sur ce navigateur.')
      }
    }

  }
}
</script>

<style>
.menu-list .q-item {
  cursor: pointer
}
</style>
