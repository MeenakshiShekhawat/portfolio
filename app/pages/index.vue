<script setup>
useHead({
  title: 'Meenakshi Shekhawat — Web Developer',
  meta: [
    { name: 'description', content: 'Portfolio of Meenakshi Shekhawat, a full-stack web developer with experience in Nuxt.js, Node.js, and modern web technologies.' }
  ]
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="max-w-[1100px] mx-auto px-6 md:px-16 pt-16 md:pt-24 pb-8">
      <div class="flex flex-col md:flex-row items-center gap-10 md:gap-14">
        <!-- Avatar placeholder -->
        <div class="shrink-0">
          <div class="w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#DBEAFE] border-2 border-[#2563EB] flex items-center justify-center shadow-[0_2px_8px_rgba(16,42,90,0.06)]">
            <span class="font-heading font-semibold text-[#2563EB] text-3xl md:text-4xl">MS</span>
          </div>
        </div>

        <!-- Hero text -->
        <div class="flex-1 text-center md:text-left">
          <h1 class="text-[40px] md:text-[52px] font-heading font-semibold leading-tight mb-3">
            Meenakshi Shekhawat
          </h1>
          <p class="text-[18px] md:text-[20px] text-[#475569] font-medium mb-4">
            Full-Stack Web Developer at Welfog
          </p>
          <p class="text-[16px] text-[#475569] leading-[1.7] max-w-[560px] mx-auto md:mx-0 mb-6">
            I build clean, functional web applications using Nuxt.js, Node.js, and modern JavaScript. Currently growing into full-stack development while shipping real features in production.
          </p>
          <div class="flex flex-wrap gap-4 justify-center md:justify-start">
            <NuxtLink
              to="/projects"
              class="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white font-medium rounded-[10px] text-[15px] transition-all duration-150 hover:bg-[#1D4ED8] hover:-translate-y-px shadow-[0_2px_8px_rgba(16,42,90,0.06)]"
            >
              View Projects
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </NuxtLink>
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-2 px-6 py-3 border border-[#2563EB] text-[#2563EB] font-medium rounded-[10px] text-[15px] transition-all duration-150 hover:bg-[#2563EB] hover:text-white hover:-translate-y-px"
            >
              Contact Me
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Row -->
    <section class="max-w-[1100px] mx-auto px-6 md:px-16 py-10">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div class="bg-white border border-[#E3E8F0] rounded-[12px] p-6 text-center shadow-[0_2px_8px_rgba(16,42,90,0.06)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(16,42,90,0.10)]">
          <div class="font-heading text-[32px] font-semibold text-[#2563EB] mb-1">1+</div>
          <div class="text-[13px] uppercase tracking-[0.05em] text-[#94A3B8] font-medium">Years Experience</div>
        </div>
        <div class="bg-white border border-[#E3E8F0] rounded-[12px] p-6 text-center shadow-[0_2px_8px_rgba(16,42,90,0.06)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(16,42,90,0.10)]">
          <div class="font-heading text-[32px] font-semibold text-[#2563EB] mb-1">2</div>
          <div class="text-[13px] uppercase tracking-[0.05em] text-[#94A3B8] font-medium">Full-Stack Projects</div>
        </div>
        <div class="bg-white border border-[#E3E8F0] rounded-[12px] p-6 text-center shadow-[0_2px_8px_rgba(16,42,90,0.06)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(16,42,90,0.10)]">
          <div class="font-heading text-[32px] font-semibold text-[#2563EB] mb-1">10+</div>
          <div class="text-[13px] uppercase tracking-[0.05em] text-[#94A3B8] font-medium">Core Tech Skills</div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Preview -->
    <section class="max-w-[1100px] mx-auto px-6 md:px-16 py-14">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-[28px] md:text-[32px] font-heading font-semibold">Featured Projects</h2>
        <NuxtLink
          to="/projects"
          class="text-[14px] font-medium text-[#2563EB] hover:text-[#1D4ED8] transition-colors duration-150 hidden sm:inline-flex items-center gap-1"
        >
          View all
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </NuxtLink>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white border border-[#E3E8F0] rounded-[12px] p-6 shadow-[0_2px_8px_rgba(16,42,90,0.06)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(16,42,90,0.10)]">
          <h3 class="text-[20px] font-heading font-medium text-[#0F172A] mb-2">Job Board</h3>
          <p class="text-[15px] text-[#475569] leading-[1.7] mb-4">Role-based auth, CRUD, apply/reject/shortlist, search, and pagination — built with Node.js and EJS.</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-[#DBEAFE] text-[#2563EB] text-[12px] font-medium rounded-full">Node.js</span>
            <span class="px-3 py-1 bg-[#DBEAFE] text-[#2563EB] text-[12px] font-medium rounded-full">Express</span>
            <span class="px-3 py-1 bg-[#DBEAFE] text-[#2563EB] text-[12px] font-medium rounded-full">MySQL</span>
          </div>
          <a
            href="https://github.com/MeenakshiShekhawat/job-board"
            target="_blank"
            class="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white text-[13px] font-medium rounded-[8px] transition-all duration-150 hover:bg-[#1D4ED8]"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        </div>
        <div class="bg-white border border-[#E3E8F0] rounded-[12px] p-6 shadow-[0_2px_8px_rgba(16,42,90,0.06)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(16,42,90,0.10)]">
          <h3 class="text-[20px] font-heading font-medium text-[#0F172A] mb-2">Expense Tracker</h3>
          <p class="text-[15px] text-[#475569] leading-[1.7] mb-4">Full CRUD app with pagination, search, and filtering. Built independently from scratch to strengthen problem-solving.</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-[#DBEAFE] text-[#2563EB] text-[12px] font-medium rounded-full">Node.js</span>
            <span class="px-3 py-1 bg-[#DBEAFE] text-[#2563EB] text-[12px] font-medium rounded-full">Express</span>
            <span class="px-3 py-1 bg-[#DBEAFE] text-[#2563EB] text-[12px] font-medium rounded-full">MySQL</span>
          </div>
          <a
            href="https://github.com/MeenakshiShekhawat/expense-tracker"
            target="_blank"
            class="inline-flex items-center gap-2 px-4 py-2 bg-[#2563EB] text-white text-[13px] font-medium rounded-[8px] transition-all duration-150 hover:bg-[#1D4ED8]"
          >
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            View on GitHub
          </a>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="max-w-[1100px] mx-auto px-6 md:px-16 pb-20">
      <div class="bg-white border border-[#E3E8F0] rounded-[12px] p-8 md:p-10 shadow-[0_2px_8px_rgba(16,42,90,0.06)] text-center">
        <h2 class="text-[24px] md:text-[28px] font-heading font-semibold mb-3">Open to new opportunities</h2>
        <p class="text-[15px] text-[#475569] leading-[1.7] max-w-[520px] mx-auto mb-6">
          I'm looking for a full-time or internship role where I can contribute, learn, and grow as a developer. If you have a role in mind, let's talk.
        </p>
        <NuxtLink
          to="/contact"
          class="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] text-white font-medium rounded-[10px] text-[15px] transition-all duration-150 hover:bg-[#1D4ED8] hover:-translate-y-px shadow-[0_2px_8px_rgba(16,42,90,0.06)]"
        >
          Get in Touch
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
