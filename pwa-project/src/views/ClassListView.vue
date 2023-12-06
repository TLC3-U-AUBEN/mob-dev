<template>
  <div>
    <div>
      <ContactPicker @to-search="search"></ContactPicker>
    </div>
    <div>
      <AffichageListe @to-notify="notify"></AffichageListe>
    </div>
    <ClassMate :list="studentList"></ClassMate>

  </div>
</template>

<script>
import ClassMate from '@/components/ClassMate.vue'
import ContactPicker from '@/components/ContactPicker.vue'
import AffichageListe from '@/components/AffichageListe.vue'

export default {
  name: 'ClassListView',
  components: {
    ClassMate,
    ContactPicker,
    AffichageListe
  },
  data () {
    return {
      studentList: [
        {
          lastname: 'SOUGOUR',
          firstname: 'Abakar',
          birthdate: '22',
          gender: 'M',
          number: '67656860'
        },
        {
          lastname: 'COULIBALY',
          firstname: 'Zanga ROMMEL',
          birthdate: '22',
          gender: 'M',
          number: '67656861'
        },
        {
          lastname: 'DA',
          firstname: 'Sylviane Yeri Debora',
          birthdate: '22',
          gender: 'F',
          number: '67656862'
        },
        {
          lastname: 'KIENTEGA',
          firstname: 'Wendemi Christian',
          birthdate: '23',
          gender: 'M',
          number: '67656863'
        },
        {
          lastname: 'KIRAKOYA',
          firstname: 'Mohamed',
          birthdate: '23',
          gender: 'M',
          number: '67656864'
        },
        {
          lastname: 'SALGO',
          firstname: 'Latifata',
          birthdate: '22',
          gender: 'F',
          number: '67656865'
        },
        {
          lastname: 'SENI',
          firstname: 'Stephane Ulrich',
          birthdate: '22',
          gender: 'M',
          number: '67656866'
        },
        {
          lastname: 'SIAMBO',
          firstname: 'Ivan Eude',
          birthdate: '21',
          gender: 'M',
          number: '67656867'
        }
      ]
    }
  },
  methods: {
    search (val) {
      console.log(val)
    }
  }

}

</script>

<style>

</style>
