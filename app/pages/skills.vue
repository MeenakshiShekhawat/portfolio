<script setup>
useHead({
  title: 'Skills — Meenakshi Shekhawat',
  meta: [
    { name: 'description', content: 'Technical skills of Meenakshi Shekhawat — Frontend, Backend, and Tools.' }
  ]
})

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', icon: 'M3 2l1.5 18L12 22l7.5-2L21 2H3zm2.5 2h13l-1.1 12.5L12 19.5l-5.4-1.5L5.5 4z' },
      { name: 'CSS', icon: 'M3 2l1.5 18L12 22l7.5-2L21 2H3zm2.5 2h13l-1.1 12.5L12 19.5l-5.4-1.5L5.5 4z' },
      { name: 'Bootstrap', icon: 'M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h3v2H8V8zm0 3h5v2H8v-2zm0 3h3v2H8v-2z' },
      { name: 'JavaScript', icon: 'M3 3h18v18H3V3zm2 2v14h14V5H5zm4 3h2v6H9V8zm4 0h2v4h-2V8zm-4 7h2v2H9v-2z' },
      { name: 'Vue.js', icon: 'M12 2L2 19h20L12 2zm0 3l7.5 12H4.5L12 5z' },
      { name: 'Nuxt.js', icon: 'M12 2L2 19h20L12 2zm0 3l7.5 12H4.5L12 5z' },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.5L18.5 8 12 11 5.5 8 12 4.5zM4 9.5l7 3.5v6.5l-7-3.5V9.5zm16 0v6.5l-7 3.5v-6.5l7-3.5z' },
      { name: 'Express', icon: 'M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.5L18.5 8 12 11 5.5 8 12 4.5zM4 9.5l7 3.5v6.5l-7-3.5V9.5zm16 0v6.5l-7 3.5v-6.5l7-3.5z' },
      { name: 'EJS', icon: 'M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h2v2H8V8zm4 0h2v2h-2V8zm-4 4h2v2H8v-2zm4 0h2v2h-2v-2z' },
      { name: 'Nuxt.js', icon: 'M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.5L18.5 8 12 11 5.5 8 12 4.5zM4 9.5l7 3.5v6.5l-7-3.5V9.5zm16 0v6.5l-7 3.5v-6.5l7-3.5z' },
      { name: 'Laravel', icon: 'M12 2L2 7v10l10 5 10-5V7l-10-5zm0 2.5L18.5 8 12 11 5.5 8 12 4.5zM4 9.5l7 3.5v6.5l-7-3.5V9.5zm16 0v6.5l-7 3.5v-6.5l7-3.5z' },
      { name: 'MySQL', icon: 'M12 2c-5 0-9 2-9 5v10c0 3 4 5 9 5s9-2 9-5V7c0-3-4-5-9-5zm0 2c4 0 7 1.5 7 3s-3 3-7 3-7-1.5-7-3 3-3 7-3zm-7 5.5c2 1 4.5 1.5 7 1.5s5-.5 7-1.5V17c0 1.5-3 3-7 3s-7-1.5-7-3V9.5z' },
      { name: 'Postgres', icon: 'M12 2c-5 0-9 2-9 5v10c0 3 4 5 9 5s9-2 9-5V7c0-3-4-5-9-5zm0 2c4 0 7 1.5 7 3s-3 3-7 3-7-1.5-7-3 3-3 7-3zm-7 5.5c2 1 4.5 1.5 7 1.5s5-.5 7-1.5V17c0 1.5-3 3-7 3s-7-1.5-7-3V9.5z' },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git & GitHub', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z' },
      { name: 'VS Code', icon: 'M4 4l12 8-12 8V4zm16 0v16l-4-2V6l4-2z' },
    ]
  }
]
</script>

<template>
  <div class="max-w-[1100px] mx-auto px-6 md:px-16 pt-16 md:pt-24 pb-24">
    <div class="mb-12">
      <span class="text-[12px] uppercase tracking-[0.05em] text-[#94A3B8] font-medium">Skills</span>
      <h1 class="text-[36px] md:text-[42px] font-heading font-semibold mt-2 mb-2">Tech Stack</h1>
      <p class="text-[16px] text-[#475569] leading-[1.7] max-w-[600px]">
        The technologies I use daily and am actively learning to build production-ready web applications.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="group in skillGroups"
        :key="group.title"
        class="bg-white border border-[#E3E8F0] rounded-[12px] p-6 shadow-[0_2px_8px_rgba(16,42,90,0.06)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(16,42,90,0.10)]"
      >
        <h2 class="text-[18px] font-heading font-medium text-[#0F172A] mb-5">{{ group.title }}</h2>
        <div class="flex flex-wrap gap-3">
          <div
            v-for="skill in group.skills"
            :key="skill.name"
            class="inline-flex items-center gap-2 px-3 py-2 bg-white border border-[#E2E8F0] rounded-[8px] text-[14px] text-[#475569] font-medium transition-all duration-150 hover:border-[#2563EB] hover:text-[#2563EB]"
          >
            <svg class="w-4 h-4 text-[#2563EB]" fill="currentColor" viewBox="0 0 24 24">
              <path :d="skill.icon" />
            </svg>
            {{ skill.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
