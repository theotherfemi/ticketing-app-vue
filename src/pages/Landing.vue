<template>
  <div class="min-h-screen flex flex-col items-center bg-gray-50 text-gray-800">
    <!-- Hero Section -->
    <section
      class="relative flex flex-col items-center justify-center text-center px-4 py-24 w-full overflow-hidden"
    >
      <div class="absolute inset-0 bg-gradient-to-b from-blue-100 to-blue-200 clip-wave"></div>
      <div class="relative z-10 max-w-2xl">
        <h2 class="text-5xl font-extrabold mb-4">
          Manage Your Tickets Seamlessly
        </h2>
        <p class="text-lg mb-6">
          From creation to resolution — all in one intuitive dashboard built for efficiency.
        </p>
        <RouterLink
          to="/auth/signup"
          class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Start Managing
        </RouterLink>
      </div>

      <div
        class="absolute w-32 h-32 bg-blue-400 opacity-30 rounded-full top-16 right-24 blur-3xl"
      ></div>
    </section>

    <!-- Features Section -->
    <section
      class="max-w-[1440px] w-full px-4 py-16 grid md:grid-cols-3 gap-8"
    >
      <div class="bg-white shadow-lg rounded-2xl p-6 text-center">
        <h3 class="text-xl font-semibold mb-2">Quick Ticket Creation</h3>
        <p>Easily create and track tickets with status updates and priorities.</p>
      </div>
      <div class="bg-white shadow-lg rounded-2xl p-6 text-center">
        <h3 class="text-xl font-semibold mb-2">Powerful Dashboard</h3>
        <p>View overall ticket stats and track progress in real time.</p>
      </div>
      <div class="bg-white shadow-lg rounded-2xl p-6 text-center">
        <h3 class="text-xl font-semibold mb-2">Secure Authentication</h3>
        <p>Your data stays safe with a secure session-based login system.</p>
      </div>
    </section>

    <!-- Why Choose Section -->
    <section
      class="w-full py-16 bg-blue-50 rounded-3xl text-center"
    >
      <h3 class="text-3xl font-bold mb-4">Why Choose TicketPro?</h3>
      <p class="max-w-2xl mx-auto mb-6">
        TicketPro is designed to simplify ticket tracking, improve response time,
        and give teams the clarity they need to resolve issues faster.
      </p>

      <div class="flex flex-wrap justify-center gap-6 w-full">
        <div class="bg-white shadow-md rounded-xl p-4 w-64">
          <h4 class="font-semibold mb-2">Collaborative Tools</h4>
          <p>Assign, comment, and track updates seamlessly across your team.</p>
        </div>
        <div class="bg-white shadow-md rounded-xl p-4 w-64">
          <h4 class="font-semibold mb-2">Performance Insights</h4>
          <p>Get real-time analytics on ticket resolution and team performance.</p>
        </div>
        <div class="bg-white shadow-md rounded-xl p-4 w-64">
          <h4 class="font-semibold mb-2">Customizable Workflows</h4>
          <p>Adapt TicketPro to your process — not the other way around.</p>
        </div>
      </div>
    </section>

    <!-- 🧭 How It Works Section -->
    <section class="w-full px-6 py-16 text-center">
      <h3 class="text-3xl font-bold mb-8">How It Works</h3>
      <div class="grid sm:grid-cols-3 gap-10 max-w-[1440px] mx-auto w-full w-full">
        <div class="p-6">
          <div class="text-blue-600 text-4xl mb-3">📝</div>
          <h4 class="font-semibold text-lg mb-2">1. Create a Ticket</h4>
          <p class="text-gray-600">
            Submit your issue or request in seconds using our simple form.
          </p>
        </div>
        <div class="p-6">
          <div class="text-blue-600 text-4xl mb-3">👥</div>
          <h4 class="font-semibold text-lg mb-2">2. Collaborate & Update</h4>
          <p class="text-gray-600">
            Stay in sync with your team and track progress in real time.
          </p>
        </div>
        <div class="p-6">
          <div class="text-blue-600 text-4xl mb-3">✅</div>
          <h4 class="font-semibold text-lg mb-2">3. Resolve Efficiently</h4>
          <p class="text-gray-600">
            Close tickets faster with clarity and accountability built in.
          </p>
        </div>
      </div>
    </section>

    <!-- 🚀 Final CTA Section -->
    <section class="w-full bg-blue-600 text-white text-center py-16 px-6">
      <h3 class="text-3xl font-bold mb-4">Get Started with TicketPro Today</h3>
      <p class="mb-8 text-lg">
        Empower your team with better tracking, collaboration, and results.
      </p>
      <RouterLink
        to="/auth/signup"
        class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
      >
        Create Your Account
      </RouterLink>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.clip-wave {
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}
</style>
