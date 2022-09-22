<template>

  <div class="card">
      <img :src="flag" alt="" class="card-img-top h-100">

    <div class="card-body" :name="name" :population="population" :region="region" :capital = "capital" :flag="flag">
      <h3>{{name}}</h3>
      <p class="mb-2"><b>Population:</b> {{population}}</p>
      <p class="mb-2"><b>Region:</b> {{region}}</p>
      <p class="mb-2"><b>Capital:</b> {{capital}}</p>
    </div>



  </div>

</template>

<script>
export default {
  name: "Card",
  props: {

    name: {type: String , required: true},
    population : {type: Number , required: true},
    region: {type: String , required: true},
    capital: {type: String , required: true},
    flag: {type: String , required: true}


  }
}
</script>

<style scoped>

h3 {
  font-weight: 800;
}
img {
  height: 180px !important;
  object-fit: cover;
  object-position: center;
}

div.card {
  height: 100% !important;
}

</style>