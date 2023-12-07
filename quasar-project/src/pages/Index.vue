<template>
  <div>
    <q-list bordered>
      <q-item v-for="task in filteredTasks" :key="task.id">
        <q-item-section>
          <q-item-label>
            <q-checkbox v-model="task.completed" @input="updateTask(task)">
              {{ task.name }}
            </q-checkbox>
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-btn @click="editTask(task)" icon="edit" round dense />
          <q-btn @click="deleteTask(task)" icon="delete" round dense />
        </q-item-section>
      </q-item>
    </q-list>

    <!-- Ajout ou modification de tâche -->
    <q-dialog v-model="taskDialog" persistent>
      <q-card>
        <q-card-section>
          <q-input v-model="taskName" label="Nom de la tâche" />
        </q-card-section>
        <q-card-section>
          <q-checkbox v-model="taskCompleted" label="Tâche terminée" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="Annuler" color="negative" @click="closeDialog" />
          <q-btn label="Enregistrer" color="positive" @click="saveTask" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Barre de recherche -->
    <q-input v-model="searchQuery" placeholder="Rechercher une tâche" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      tasks: [
        { id: 1, name: 'Acheter du lait', completed: false },
        { id: 2, name: 'Répondre aux e-mails', completed: true }
        // ... autres tâches
      ],
      searchQuery: '',
      taskDialog: false,
      taskName: '',
      taskCompleted: false,
      selectedTask: null
    }
  },
  computed: {
    filteredTasks () {
      return this.tasks.filter(task =>
        task.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      )
    }
  },
  methods: {
    updateTask (task) {
      // Logique pour mettre à jour une tâche (par exemple, marquer comme complétée)
      console.log('Mise à jour de la tâche :', task)
    },
    editTask (task) {
      // Pré-remplir le formulaire avec les détails de la tâche sélectionnée
      this.selectedTask = task
      this.taskName = task.name
      this.taskCompleted = task.completed

      // Ouvrir le dialogue d'édition de tâche
      this.taskDialog = true
    },
    deleteTask (task) {
      // Logique pour supprimer une tâche
      console.log('Suppression de la tâche :', task)
    },
    saveTask () {
      // Logique pour enregistrer une nouvelle tâche ou mettre à jour une tâche existante
      if (this.selectedTask) {
        // Mise à jour d'une tâche existante
        this.selectedTask.name = this.taskName
        this.selectedTask.completed = this.taskCompleted
      } else {
        // Ajout d'une nouvelle tâche
        const newTask = {
          id: this.tasks.length + 1,
          name: this.taskName,
          completed: this.taskCompleted
        }
        this.tasks.push(newTask)
      }

      // Fermer le dialogue
      this.closeDialog()
    },
    closeDialog () {
      // Réinitialiser les variables et fermer le dialogue
      this.taskName = ''
      this.taskCompleted = false
      this.selectedTask = null
      this.taskDialog = false
    }
  }
}
</script>
