<template>
  <div>
    <div>
      <ContactPicker @to-search="handleSearch"></ContactPicker>
    </div>
    <ClassMate :list="filteredStudentList"></ClassMate>
  </div>
</template>

<script>
import ClassMate from '@/components/ClassMate.vue'
import ContactPicker from '@/components/ContactPicker.vue'

export default {
  name: 'ClassListView',
  components: {
    ClassMate,
    ContactPicker
  },
  data () {
    return {
      studentList: [
        {
          lastname: 'SOUGOUR',
          firstname: 'Abakar',
          birthdate: '22',
          gender: 'M',
          contact: '54 85 82 08'
        },
        {
          lastname: 'COULIBALY',
          firstname: 'Zanga ROMMEL',
          birthdate: '22',
          gender: 'M',
          contact: '66 66 66 66'
        },
        {
          lastname: 'DA',
          firstname: 'Sylviane Yeri Debora',
          birthdate: '22',
          gender: 'F',
          contact: '66 66 66 66'
        },
        {
          lastname: 'KIENTEGA',
          firstname: 'Wendemi Christian',
          birthdate: '23',
          gender: 'M',
          contact: '66 66 66 66'
        },
        {
          lastname: 'KIRAKOYA',
          firstname: 'Mohamed',
          birthdate: '23',
          gender: 'M',
          contact: '66 66 66 66'
        },
        {
          lastname: 'SALGO',
          firstname: 'Latifata',
          birthdate: '22',
          gender: 'F',
          contact: '66 66 66 66'
        },
        {
          lastname: 'SENI',
          firstname: 'Stephane Ulrich',
          birthdate: '22',
          gender: 'M',
          contact: '66 66 66 66'
        },
        {
          lastname: 'SIAMBO',
          firstname: 'Ivan Eude',
          birthdate: '21',
          gender: 'M',
          contact: '66 66 66 66'
        },
        {
          lastname: 'SOUGOUR',
          firstname: 'Abakar',
          birthdate: '22',
          gender: 'M',
          contact: '+235 60 99 99 89'
        }
      ],
      filteredStudentList: [] // Liste filtrée à afficher
    }
  },
  created () {
    this.filteredStudentList = this.studentList // Copie de la liste initiale
  },
  methods: {
    handleSearch (searchTerm) {
      this.filteredStudentList = this.studentList.filter(student =>
        student.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.firstname.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
  }
}
</script>

<style>
   /* Pour les écrans de taille moyenne */
@media screen and (min-width: 600px) {
}

/* Pour les écrans de grande taille */
@media screen and (min-width: 900px) {

}
</style>
