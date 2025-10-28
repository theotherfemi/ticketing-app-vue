<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-2 sm:w-[600px] w-full mx-auto">
    <div class="bg-white shadow-lg rounded-2xl p-8 w-full">
      <h2 class="text-3xl font-bold text-center text-blue-600 mb-6">Welcome Back</h2>
      <p class="text-center text-gray-500 mb-8">Login to manage your tickets</p>

      <form @submit.prevent="handleSubmit" class="space-y-5">
        <!-- Email -->
        <div>
          <label class="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            v-model="email"
            placeholder="Enter your email"
            class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <!-- Password -->
        <div class="relative">
          <label class="block text-gray-700 mb-1">Password</label>
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            placeholder="Enter your password"
            class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none pr-10"
            required
          />
          <button
            type="button"
            @click="togglePassword"
            class="absolute right-3 top-11 text-gray-500 hover:text-blue-600"
          >
            <component :is="showPassword ? EyeOff : Eye" size="20" />
          </button>
        </div>

        <!-- Error -->
        <p v-if="error" class="text-red-500 text-sm text-center">{{ error }}</p>

        <!-- Submit -->
        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          {{ loading ? 'Signing in...' : 'Login' }}
        </button>
      </form>

      <p class="text-center text-gray-500 mt-6">
        Don’t have an account?
        <RouterLink to="/auth/signup" class="text-blue-600 hover:underline">
          Sign Up
        </RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Eye, EyeOff } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const error = ref('')
const loading = ref(false)
const router = useRouter()
const { login } = useAuth()

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const handleSubmit = () => {
  error.value = ''

  if (!email.value || !password.value) {
    error.value = 'Please fill in all required fields.'
    return
  }

  loading.value = true

  // Simulate a successful login (replace with real API later)
  setTimeout(() => {
    loading.value = false

    // fake user
    const userData = {
      email: email.value,
      name: email.value.split('@')[0],
      token: 'fake_jwt_token_123',
    }

    login(userData)
    router.push('/dashboard')
  }, 1000)
}
</script>
