<script setup>
useHead({
  title: 'Meenakshi Shekhawat | Portfolio'
})
</script>

<template>
  <div>

    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/projects">Projects</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>
    <NuxtPage />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 24px;
  padding: 16px 32px;
  background-color: #1a1a1a;
}

nav a {
  color: white;
  font-weight: 500;
}
</style>