<template>
  <header
    :class="[
      'sticky top-0 z-50 transition-all duration-200',
      isScrolled
        ? 'bg-white/80 backdrop-blur-md border-b border-[#E3E8F0]'
        : 'bg-transparent border-b border-transparent'
    ]"
  >
    <div class="max-w-[1100px] mx-auto px-6 md:px-16 flex items-center justify-between h-16">
      <NuxtLink
        to="/"
        class="font-heading font-semibold text-[#0F172A] text-lg tracking-tight"
      >
        Meenakshi Shekhawat
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          :class="[
            'text-sm uppercase tracking-[0.05em] font-medium transition-colors duration-150 relative',
            route.path === link.to
              ? 'text-[#2563EB]'
              : 'text-[#475569] hover:text-[#2563EB]'
          ]"
        >
          {{ link.label }}
          <span
            v-if="route.path === link.to"
            class="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-[#2563EB] rounded-full"
          />
        </NuxtLink>
      </nav>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden p-2 text-[#0F172A]"
        aria-label="Toggle menu"
        @click="mobileOpen = !mobileOpen"
      >
        <svg v-if="!mobileOpen" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mobileOpen"
      class="md:hidden bg-white border-b border-[#E3E8F0] px-6 pb-4"
    >
      <nav class="flex flex-col gap-4">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          :class="[
            'text-sm uppercase tracking-[0.05em] font-medium transition-colors duration-150',
            route.path === link.to
              ? 'text-[#2563EB]'
              : 'text-[#475569]'
          ]"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
const route = useRoute()
const mobileOpen = ref(false)
const isScrolled = ref(false)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/contact', label: 'Contact' },
]

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 8
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>
