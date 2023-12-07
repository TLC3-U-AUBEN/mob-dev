<template>
  <div>
    <ContactPicker @search="search"></ContactPicker>
    <ClassMate :list="filteredList.length > 0 ? filteredList : studentList "></ClassMate>
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
          gender: 'M'
        },
        {
          lastname: 'COULIBALY',
          firstname: 'Zanga ROMMEL',
          birthdate: '22',
          gender: 'M'
        },
        {
          lastname: 'DA',
          firstname: 'Sylviane Yeri Debora',
          birthdate: '22',
          gender: 'F'
        },
        {
          lastname: 'KIENTEGA',
          firstname: 'Wendemi Christian',
          birthdate: '23',
          gender: 'M'
        },
        {
          lastname: 'KIRAKOYA',
          firstname: 'Mohamed',
          birthdate: '23',
          gender: 'M'
        },
        {
          lastname: 'SALGO',
          firstname: 'Latifata',
          birthdate: '22',
          gender: 'F'
        },
        {
          lastname: 'SENI',
          firstname: 'Stephane Ulrich',
          birthdate: '22',
          gender: 'M'
        },
        {
          lastname: 'SIAMBO',
          firstname: 'Ivan Eude',
          birthdate: '21',
          gender: 'M'
        }
      ],
      filteredList: []
    }
  },
  methods: {
    search (val) {
      console.log(val)
      // Filtrer les étudiants en fonction de la recherche
      this.filteredList = this.studentsList.filter(student =>
        student.lastname.toLowerCase().includes(val.toLowerCase()) ||
        student.firstname.toLowerCase().includes(val.toLowerCase())
      )
    }

  }

}

</script>

<style>

</style>
