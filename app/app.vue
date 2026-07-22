<template>
  <div class="page-wrapper">
    <AppNavbar />
    <main class="page-content">
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<style>
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.page-content {
  flex: 1;
}
</style>
