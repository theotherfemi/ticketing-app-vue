<template>
  <main class="max-w-[1440px] w-full px-6 py-16 mx-auto">
    <div class="flex justify-between items-center mb-8">
      <h2>
        Welcome Back, {{ session?.user?.email?.split('@')[0] || 'User' }} 👋
      </h2>
      <button
        @click="logout"
        class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>

    <p class="text-gray-600 mb-12 text-center">
      Here’s an overview of your ticketing system performance.
    </p>

    <!-- Overview Stats -->
    <section class="grid md:grid-cols-3 gap-6 mb-16">
      <div class="bg-white shadow-lg rounded-2xl p-6 text-center border-t-4 border-blue-500">
        <h3 class="text-2xl font-bold mb-2">42</h3>
        <p class="text-gray-500">Total Tickets</p>
      </div>
      <div class="bg-white shadow-lg rounded-2xl p-6 text-center border-t-4 border-green-500">
        <h3 class="text-2xl font-bold mb-2">28</h3>
        <p class="text-gray-500">Open Tickets</p>
      </div>
      <div class="bg-white shadow-lg rounded-2xl p-6 text-center border-t-4 border-red-500">
        <h3 class="text-2xl font-bold mb-2">14</h3>
        <p class="text-gray-500">Resolved Tickets</p>
      </div>
    </section>

    <!-- Recent Activity + System Insights -->
    <section class="grid md:grid-cols-2 gap-8">
      <div class="bg-white shadow-md rounded-xl p-6">
        <h3 class="text-xl font-semibold mb-4">Recent Activity</h3>
        <ul class="space-y-3 text-gray-700">
          <li>✅ Ticket #234 resolved successfully</li>
          <li>🕐 Ticket #240 moved to In Progress</li>
          <li>📩 New ticket created by John Doe</li>
        </ul>
      </div>

      <div class="bg-white shadow-md rounded-xl p-6">
        <h3 class="text-xl font-semibold mb-4">System Insights</h3>
        <p class="text-gray-600 mb-2">
          Resolution rate: <span class="font-bold text-green-600">80%</span>
        </p>
        <p class="text-gray-600 mb-2">
          Avg response time: <span class="font-bold text-blue-600">2h 45m</span>
        </p>
        <p class="text-gray-600">
          Most common issue type: <span class="font-bold">Login problems</span>
        </p>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="mt-16 bg-blue-50 rounded-3xl p-10 text-center">
      <h3 class="text-2xl font-bold mb-4 text-blue-700">
        Need to Create a New Ticket?
      </h3>
      <p class="mb-6 text-gray-600">
        Quickly submit an issue and track it right from this dashboard.
      </p>
      <router-link
        to="/tickets"
        class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        <span class="hidden sm:inline">Go to Ticket Management</span>
        <span class="sm:hidden">Manage Tickets</span>
      </router-link>
    </section>
  </main>
</template>


<script setup>
import { computed } from 'vue'
import { useAuth } from '../composables/useAuth'
import { useRouter } from 'vue-router'

const { session, logout } = useAuth()
const router = useRouter()

// Prevent accessing dashboard if not logged in
if (!session.value) {
  router.push('/login')
}

// Compute username safely
const userName = computed(() => {
  if (!session.value || !session.value.user || !session.value.user.email) {
    return 'User'
  }
  return session.value.user.email.split('@')[0]
})
</script>
