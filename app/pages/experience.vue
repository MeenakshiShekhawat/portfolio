<script setup>
useHead({
  title: 'Experience — Meenakshi Shekhawat',
  meta: [
    { name: 'description', content: 'Professional experience of Meenakshi Shekhawat — Web Developer at Welfog.' }
  ]
})
</script>

<template>
  <div class="max-w-[1100px] mx-auto px-6 md:px-16 pt-16 md:pt-24 pb-24">
    <div class="mb-12">
      <span class="text-[12px] uppercase tracking-[0.05em] text-[#94A3B8] font-medium">Experience</span>
      <h1 class="text-[36px] md:text-[42px] font-heading font-semibold mt-2 mb-2">Work history</h1>
      <p class="text-[16px] text-[#475569] leading-[1.7] max-w-[600px]">
        My professional journey so far — shipping real features in production and growing as a developer.
      </p>
    </div>

    <div class="relative">
      <!-- Timeline line -->
      <div class="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-[2px] bg-[#DBEAFE] rounded-full" />

      <!-- Timeline entry -->
      <div class="relative pl-10 md:pl-14 pb-12">
        <!-- Dot -->
        <div class="absolute left-0 md:left-0 top-1.5 w-6 h-6 md:w-8 md:h-8 bg-[#DBEAFE] rounded-full flex items-center justify-center border-2 border-white shadow-[0_1px_4px_rgba(16,42,90,0.08)]">
          <div class="w-2.5 h-2.5 md:w-3 md:h-3 bg-[#2563EB] rounded-full" />
        </div>

        <div class="bg-white border border-[#E3E8F0] rounded-[12px] p-6 md:p-8 shadow-[0_2px_8px_rgba(16,42,90,0.06)] transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(16,42,90,0.10)]">
          <p class="text-[13px] text-[#94A3B8] font-medium uppercase tracking-[0.05em] mb-1">December 2024 — Present</p>
          <h2 class="text-[22px] font-heading font-medium text-[#0F172A] mb-1">Web Developer</h2>
          <p class="text-[15px] text-[#475569] font-medium mb-4">Welfog</p>
          <ul class="space-y-3">
            <li class="flex items-start gap-3 text-[15px] text-[#475569] leading-[1.7]">
              <span class="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2.5 shrink-0" />
              Work on the admin panel (built in Nuxt.js) — adding pages, CRUD operations, filters, toast messages, and search functionality.
            </li>
            <li class="flex items-start gap-3 text-[15px] text-[#475569] leading-[1.7]">
              <span class="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2.5 shrink-0" />
              Support the supplier panel with UI improvements and small feature additions.
            </li>
            <li class="flex items-start gap-3 text-[15px] text-[#475569] leading-[1.7]">
              <span class="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-2.5 shrink-0" />
              Currently expanding into full-stack development through self-directed learning in Node.js, Express, and Nuxt.js.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
