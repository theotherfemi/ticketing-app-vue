<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-[1440px] w-full mx-auto px-4 py-4 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink to="/" class="text-2xl font-bold text-blue-600">
        TicketPro
      </RouterLink>

      <!-- Hamburger -->
      <button
        @click="toggleMenu"
        class="sm:hidden text-gray-700 focus:outline-none"
        aria-label="Toggle menu"
      >
        <component :is="menuOpen ? X : Menu" size="26" />
      </button>

      <!-- Navigation -->
      <nav
        :class="[
          menuOpen ? 'block' : 'hidden',
          'absolute sm:static top-full left-0 w-full sm:w-auto bg-white sm:bg-transparent border-t sm:border-none sm:flex items-center gap-4 sm:gap-6 p-4 sm:p-0 transition-all',
        ]"
      >
        <RouterLink
          to="/"
          class="block py-2 text-gray-700 hover:text-blue-600"
          @click="menuOpen = false"
        >
          Home
        </RouterLink>

        <template v-if="session">
          <RouterLink
            to="/dashboard"
            class="block py-2 text-gray-700 hover:text-blue-600"
            @click="menuOpen = false"
          >
            Dashboard
          </RouterLink>

          <RouterLink
            to="/tickets"
            class="block py-2 text-gray-700 hover:text-blue-600"
            @click="menuOpen = false"
          >
            Tickets
          </RouterLink>

          <button
            @click="handleLogout"
            class="block w-full sm:w-auto text-left px-3 py-2 rounded-md bg-red-50 hover:bg-red-100 transition"
          >
            Logout
          </button>
        </template>

        <template v-else>
          <RouterLink
            to="/auth/login"
            class="block py-2 text-gray-700 hover:text-blue-600"
            @click="menuOpen = false"
          >
            Login
          </RouterLink>

          <RouterLink
            to="/auth/signup"
            class="block w-full sm:w-auto text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            @click="menuOpen = false"
          >
            Get Started
          </RouterLink>
        </template>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'
import { useAuth } from '../composables/useAuth'

const { session, logout } = useAuth()
const menuOpen = ref(false)
const router = useRouter()

const toggleMenu = () => (menuOpen.value = !menuOpen.value)

const handleLogout = () => {
  logout()
  menuOpen.value = false
  router.push('/')
}
</script>
