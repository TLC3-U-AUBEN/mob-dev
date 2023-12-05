<template>
  <div>
    <ClassMate :list="studentList">

    </ClassMate>
  </div>
</template>

<script>
import ClassMate from '@/components/ClassMate.vue'

export default {
  name: 'ClassListView',
  components: {
    ClassMate
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
      ]
    }
  }

}

</script>

<style>

</style>
