<template>
  <div>
    <h2>Liste de la Classe</h2>
    <table>
      <tr>
        <th>Nom</th>
        <th>Prénoms</th>
        <th>Date d'anniversaire</th>
        <th>Genre</th>
        <th>Contact</th>
      </tr>
      <tr v-for="student in list" :key="student.id">
        <td>{{ student.lastname }}</td>
        <td>{{ student.firstname }}</td>
        <td>{{ student.birthdate }}</td>
        <td>{{ student.gender }}</td>
        <td>{{ student.contact }}</td>
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
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

thead {
  background-color: #3498db;
  color: white;
}

th, td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

th {
  background-color: #3498db;
  color: white;
}

/* Media query pour ajuster le tableau sur des écrans plus petits */
@media (max-width: 767px) {
  table {
    font-size: 12px;
  }
}
</style>
