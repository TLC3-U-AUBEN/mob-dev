<template>
  <div>
    <div>
      <ContactPicker @to-search="search"></ContactPicker>
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
          contact: '54858208'
        },
        {
          lastname: 'COULIBALY',
          firstname: 'Zanga ROMMEL',
          birthdate: '22',
          gender: 'M',
          contact: '67313888'
        },
        {
          lastname: 'DA',
          firstname: 'Sylviane Yeri Debora',
          birthdate: '22',
          gender: 'F',
          contact: '57109910'
        },
        {
          lastname: 'KIENTEGA',
          firstname: 'Wendemi Christian',
          birthdate: '23',
          gender: 'M',
          contact: '52008721'
        },
        {
          lastname: 'KIRAKOYA',
          firstname: 'Mohamed',
          birthdate: '23',
          gender: 'M',
          contact: '64192564'
        },
        {
          lastname: 'SALGO',
          firstname: 'Latifata',
          birthdate: '22',
          gender: 'F',
          contact: '72888932'
        },
        {
          lastname: 'SENI',
          firstname: 'Stephane Ulrich',
          birthdate: '22',
          gender: 'M',
          contact: '52485756'
        },
        {
          lastname: 'SIAMBO',
          firstname: 'Ivan Eude',
          birthdate: '21',
          gender: 'M',
          contact: '57065961'
        }
      ],
      filteredStudentList: []
    }
  },
  methods: {
    search (val) {
      this.filteredStudentList = this.studentList.filter((student) => {
        const fullName = `${student.firstname} ${student.lastname}`
        return fullName.toLowerCase().includes(val.toLowerCase())
      })
    }
  }
}
</script>

<style>

</style>
