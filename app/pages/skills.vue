<template>
  <section class="skills">
    <h1>Skills</h1>

    <div class="skill-group">
      <h2>Frontend</h2>
      <div class="pills">
        <span class="pill">HTML</span>
        <span class="pill">CSS</span>
        <span class="pill">Bootstrap</span>
        <span class="pill">JavaScript</span>
        <span class="pill">Vue.js</span>
        <span class="pill">Nuxt.js</span>
      </div>
    </div>

    <div class="skill-group">
      <h2>Backend</h2>
      <div class="pills">
        <span class="pill">Node.js</span>
        <span class="pill">Express</span>
        <span class="pill">EJS</span>
        <span class="pill">Nuxt.js</span>
        <span class="pill">Laravel</span>
        <span class="pill">MySQL</span>
        <span class="pill">Postgres</span>
      </div>
    </div>

    <div class="skill-group">
      <h2>Tools</h2>
      <div class="pills">
        <span class="pill">Git & GitHub</span>
        <span class="pill">VS Code</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: 60px 32px;
  max-width: 800px;
  margin: 0 auto;
}

.skills h1 {
  font-size: 36px;
  margin-bottom: 32px;
}

.skill-group {
  margin-bottom: 32px;
}

.skill-group h2 {
  font-size: 20px;
  margin-bottom: 12px;
}

.pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.pill {
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 6px 16px;
  font-size: 14px;
  color: #333;
}

@media (max-width: 600px) {
  .skills h1 {
    font-size: 28px;
  }
}
</style>