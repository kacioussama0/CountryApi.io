<template>

  <header>

    <nav class="navbar bg-light shadow py-3 mb-5 ">
      <div class="container ">
        <span class="navbar-brand mb-0 h1 heading">Where in the world!</span>
        <span class="dark-mode"><i class="bi bi-moon"></i> Dark Mode</span>
      </div>
    </nav>

  </header>




</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

.heading {
  font-weight: 800;
}

.dark-mode {
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;
}

.dark-mode:hover {
  opacity: 0.5;
}

</style>