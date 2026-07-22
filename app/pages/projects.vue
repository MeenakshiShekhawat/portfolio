<script setup>
useHead({
  title: 'Projects — Meenakshi Shekhawat',
  meta: [
    { name: 'description', content: 'Projects by Meenakshi Shekhawat — Job Board and Expense Tracker built with Node.js, Express, and MySQL.' }
  ]
})

const projects = [
  {
    title: 'Job Board',
    description: 'A full-featured job application platform with role-based authentication (company, applicant, admin), CRUD operations, apply/reject/shortlist workflows, duplicate prevention, search, and pagination.',
    tags: ['Node.js', 'Express', 'EJS', 'MySQL'],
    github: 'https://github.com/MeenakshiShekhawat/job-board',
    highlights: [
      'Role-based auth (company / applicant / admin)',
      'CRUD functionality with apply/reject/shortlist',
      'Search and pagination'
    ]
  },
  {
    title: 'Expense Tracker',
    description: 'A simple, independent expense tracker built from scratch with full CRUD functionality, pagination, and search filters. Designed to practice MVC architecture and database operations.',
    tags: ['Node.js', 'Express', 'EJS', 'MySQL'],
    github: 'https://github.com/MeenakshiShekhawat/expense-tracker',
    highlights: [
      'Full CRUD operations',
      'Pagination and search filter',
      'Built independently from scratch'
    ]
  }
]
</script>

<template>
  <div class="max-w-[1100px] mx-auto px-6 md:px-16 pt-16 md:pt-24 pb-24">
    <div class="mb-12">
      <span class="text-[12px] uppercase tracking-[0.05em] text-[#94A3B8] font-medium">Projects</span>
      <h1 class="text-[36px] md:text-[42px] font-heading font-semibold mt-2 mb-2">What I've built</h1>
      <p class="text-[16px] text-[#475569] leading-[1.7] max-w-[600px]">
        Independent full-stack projects built to practice real-world patterns and strengthen my problem-solving skills.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="project in projects"
        :key="project.title"
        class="bg-white border border-[#E3E8F0] rounded-[12px] p-6 md:p-8 shadow-[0_2px_8px_rgba(16,42,90,0.06)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(16,42,90,0.10)] flex flex-col"
      >
        <h2 class="text-[22px] font-heading font-medium text-[#0F172A] mb-3">{{ project.title }}</h2>
        <p class="text-[15px] text-[#475569] leading-[1.7] mb-4">{{ project.description }}</p>

        <div class="flex flex-wrap gap-2 mb-5">
          <span
            v-for="tag in project.tags"
            :key="tag"
            class="px-3 py-1 bg-[#DBEAFE] text-[#2563EB] text-[12px] font-medium rounded-full"
          >
            {{ tag }}
          </span>
        </div>

        <ul class="space-y-2 mb-6 flex-1">
          <li
            v-for="item in project.highlights"
            :key="item"
            class="flex items-start gap-3 text-[14px] text-[#475569]"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2 shrink-0" />
            {{ item }}
          </li>
        </ul>

        <a
          :href="project.github"
          target="_blank"
          class="inline-flex items-center gap-2 px-4 py-2.5 bg-[#2563EB] text-white text-[13px] font-medium rounded-[8px] transition-all duration-150 hover:bg-[#1D4ED8] w-fit"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          View on GitHub
        </a>
      </div>
    </div>
  </div>
</template>
