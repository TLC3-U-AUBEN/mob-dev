<template>
  <div>
    <h2>Liste de la Classe</h2>
    <table>
      <tr>
        <th>Nom</th>
        <th>Prénoms</th>
        <th>Date d'anniversaire</th>
        <th>Genre</th>
      </tr>
      <tr v-for="student in list" :key="student.id">
        <td>{{ student.lastname }}</td>
        <td>{{ student.firstname }}</td>
        <td>{{ student.birthdate }}</td>
        <td>{{ student.gender }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ClassMate',
  props: {
    list: Array
  }
}
</script>

<style>
table{
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>
