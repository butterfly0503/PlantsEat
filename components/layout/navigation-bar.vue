<template>
  <div class=" bg-blue-light">
    <div class="container mx-auto flex justify-end">
      <NuxtLink to="/" class="bg-green-lighter py-2.5 px-4 text-white border-r border-white">Home</NuxtLink>
      <NuxtLink
        to="/spirulina"
        class="bg-green-lighter py-2.5 px-4 text-white border-r border-white"
      >Spirulina</NuxtLink>
      <NuxtLink to="/create-recipe" class="bg-green-lighter py-2.5 px-4 text-white">Create recipe</NuxtLink>
    </div>
  </div>
</template>
<script>
export default {
  name: 'navigation-bar'
}
</script>
<style>
</style>