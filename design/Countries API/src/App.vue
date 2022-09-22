<script>
import NavBar from "./components/NavBar.vue";
import Card from "./components/Card.vue";
import Filter from "./components/Filter.vue";
import fetchApi from "./fetchApi.js";
export default  {
  async mounted() {
    this.world = await fetchApi.getData('all');
    this.world.sort();

  },
  components: {
    NavBar,Card,Filter
  },
  data() {
    return {
      world: []
    }
  }
}

</script>

<template>

<nav-bar></nav-bar>


  <div class="container">

    <Filter></Filter>

    <div class="row g-5">

      <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="country in world">

          <card :capital="String(country.capital)" :region="country.region" :population="country.population" :name="country.name.common" :flag="country.flags.svg"/>

      </div>


    </div>

  </div>


</template>

<style>
@import "bootstrap/dist/css/bootstrap.min.css";
@import "bootstrap-icons";
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

* {
  font-family: 'Nunito Sans', sans-serif;
}

</style>
