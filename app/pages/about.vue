<script setup>
useHead({
  title: 'About — Meenakshi Shekhawat',
  meta: [
    { name: 'description', content: 'Learn about Meenakshi Shekhawat, a web developer at Welfog with a passion for full-stack development and continuous learning.' }
  ]
})
</script>

<template>
  <div class="max-w-[1100px] mx-auto px-6 md:px-16 pt-16 md:pt-24 pb-24">
    <div class="mb-12">
      <span class="text-[12px] uppercase tracking-[0.05em] text-[#94A3B8] font-medium">About</span>
      <h1 class="text-[36px] md:text-[42px] font-heading font-semibold mt-2 mb-6">Who I am</h1>
    </div>

    <div class="space-y-12 max-w-[780px]">
      <div>
        <h2 class="text-[22px] font-heading font-medium text-[#0F172A] mb-4">What I do</h2>
        <p class="text-[16px] text-[#475569] leading-[1.7]">
          I'm a Web Developer at Welfog, where I work on the Admin panel and supplier panel (both built in Nuxt.js). My day-to-day involves adding pages, implementing CRUD operations, filters, toast messages, search functionality, and fixing UI gaps wherever they come up. I also support my senior with small feature additions and UI improvements across the supplier dashboard.
        </p>
      </div>

      <div>
        <h2 class="text-[22px] font-heading font-medium text-[#0F172A] mb-4">What I'm learning</h2>
        <p class="text-[16px] text-[#475569] leading-[1.7] mb-4">
          I'm actively expanding into full-stack development. I've built two independent projects with Node.js, Express, and EJS — an Expense Tracker and a Job Board — using MySQL as the database. Since I understand the MVC pattern well, I'm able to quickly analyze and adapt to new frameworks like Vue and Nuxt.
        </p>
        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-1.5 bg-[#DBEAFE] text-[#2563EB] text-[13px] font-medium rounded-full">Node.js</span>
          <span class="px-3 py-1.5 bg-[#DBEAFE] text-[#2563EB] text-[13px] font-medium rounded-full">Express</span>
          <span class="px-3 py-1.5 bg-[#DBEAFE] text-[#2563EB] text-[13px] font-medium rounded-full">Vue</span>
          <span class="px-3 py-1.5 bg-[#DBEAFE] text-[#2563EB] text-[13px] font-medium rounded-full">Nuxt</span>
        </div>
      </div>

      <div>
        <h2 class="text-[22px] font-heading font-medium text-[#0F172A] mb-4">How I work</h2>
        <p class="text-[16px] text-[#475569] leading-[1.7]">
          I'm deepening my coding fundamentals through a self-directed learning roadmap, building projects from scratch to strengthen problem-solving and reduce reliance on AI tools. The goal is to grow into a confident, independent developer who can own features end-to-end and contribute meaningfully to any team.
        </p>
      </div>
    </div>
  </div>
</template>
