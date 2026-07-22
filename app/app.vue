<script setup>
useHead({
  title: 'Meenakshi Shekhawat | Portfolio'
})
</script>

<template>
  <div class="page-wrapper">
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/skills">Skills</NuxtLink>
      <NuxtLink to="/projects">Projects</NuxtLink>
      <NuxtLink to="/experience">Experience</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </nav>
    <main class="page-content">
      <NuxtPage />
    </main>
    <footer>
      <p>© 2026 Meenakshi Shekhawat</p>
    </footer>
  </div>
</template>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-content {
  flex: 1;
}

nav {
  display: flex;
  gap: 24px;
  padding: 16px 32px;
  background-color: var(--accent-dark);
}

nav a {
  color: white;
  font-weight: 500;
}

footer {
  text-align: center;
  padding: 24px;
  color: #888;
  font-size: 14px;
  border-top: 1px solid #eee;
  margin-top: 40px;
}
</style>