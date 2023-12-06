<template>
 <div>
    <ContactPicker @search="search"></ContactPicker>
    <ClassMate :list="filteredList.length > 0 ? filteredList : studentList"></ClassMate>
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
          birthdate: '2/5/2001',
          gender: 'M',
          contact: '54-85-82-08'
        },
        {
          lastname: 'COULIBALY',
          firstname: 'Zanga ROMMEL',
          birthdate: '22',
          gender: 'M',
          contact: '54-85-82-08'
        },
        {
          lastname: 'DA',
          firstname: 'Sylviane Yeri Debora',
          birthdate: '4/2/2003',
          gender: 'F',
          contact: '57-10-99-10'
        },
        {
          lastname: 'KIENTEGA',
          firstname: 'Wendemi Christian',
          birthdate: '12/11/2000',
          gender: 'M',
          contact: '65-21-73-92'
        },
        {
          lastname: 'KIRAKOYA',
          firstname: 'Mohamed',
          birthdate: '23',
          gender: 'M',
          contact: '54-85-82-08'
        },
        {
          lastname: 'SALGO',
          firstname: 'Latifata',
          birthdate: '22',
          gender: 'F',
          contact: '54-85-82-08'
        },
        {
          lastname: 'SENI',
          firstname: 'Stephane Ulrich',
          birthdate: '22',
          gender: 'M',
          contact: '54-85-82-08'
        },
        {
          lastname: 'SIAMBO',
          firstname: 'Ivan Eude',
          birthdate: '21',
          gender: 'M',
          contact: '54-85-82-08'
        }
      ],
      filteredList: []
    }
  },
  methods: {
    search (val) {
      console.log(val)
      this.filteredList = this.studentList.filter(student =>
        student.lastname.toLowerCase().includes(val.toLowerCase()) ||
        student.firstname.toLowerCase().includes(val.toLowerCase()) ||
        student.gender.toLowerCase().includes(val.toLowerCase()) ||
        student.contact.toLowerCase().includes(val.toLowerCase())
      )
    }
  }

}

</script>

<style>
  /* Media query pour ajuster la taille du tableau sur des écrans plus petits */
        @media (max-width: 767px) {
                table {
                   font-size: 12px;
   }
}
</style>
