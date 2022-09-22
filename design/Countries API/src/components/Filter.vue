<template>

  <div class="search row mb-5 justify-content-between">
    <div class="col-md-5 col-12 mb-3">
      <input type="search" name="search" id="search" class="form-control " placeholder="Search for a country ...">
    </div>

    <div class="col-md-3 col-12">
      <select name="" id="" class="form-select ">
        <option value="" selected>Filter By Region</option>
        <option value="Asie">Asie</option>
      </select>
    </div>
  </div>

</template>

<script>
export default {
  name: "Filter"
}
</script>

<style scoped>

</style>