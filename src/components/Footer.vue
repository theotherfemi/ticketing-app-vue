<template>
  <footer class="bg-white mt-12 border-t">
    <div
      class="max-w-[1440px] mx-auto px-4 py-6 text-sm text-slate-500 flex justify-between"
    >
      <div>© {{ currentYear }} TicketPro</div>
      <div>Built with Vue by Olufemi</div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
