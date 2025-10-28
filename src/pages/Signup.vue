<template>
  <div class="min-h-screen flex flex-col items-center justify-center px-2 sm:w-[600px] w-full mx-auto">
    <div class="bg-white shadow-lg rounded-2xl p-8 w-full">
      <h2 class="text-3xl font-bold text-center text-blue-600 mb-6">Create an Account</h2>
      <p class="text-center text-gray-500 mb-8">Sign up to start managing your tickets</p>

      <form @submit.prevent="handleSubmit" class="space-y-5">
        <div>
          <label class="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            v-model="form.email"
            placeholder="Enter your email"
            class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div class="relative">
          <label class="block text-gray-700 mb-1">Password</label>
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="form.password"
            placeholder="Enter your password"
            class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <component
            :is="showPassword ? EyeOff : Eye"
            @click="showPassword = !showPassword"
            class="absolute right-3 top-[42px] text-gray-500 cursor-pointer"
          />
        </div>

        <div class="relative">
          <label class="block text-gray-700 mb-1">Confirm Password</label>
          <input
            :type="showConfirmPassword ? 'text' : 'password'"
            v-model="form.confirmPassword"
            placeholder="Confirm your password"
            class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <component
            :is="showConfirmPassword ? EyeOff : Eye"
            @click="showConfirmPassword = !showConfirmPassword"
            class="absolute right-3 top-[42px] text-gray-500 cursor-pointer"
          />
        </div>

        <p v-if="error" class="text-red-500 text-sm text-center">{{ error }}</p>

        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          {{ loading ? 'Signing up...' : 'Sign Up' }}
        </button>
      </form>

      <p class="text-center text-gray-500 mt-6">
        Already have an account?
        <router-link to="/auth/login" class="text-blue-600 hover:underline">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../services/supabase'
import { useRouter } from 'vue-router'
import { Eye, EyeOff } from 'lucide-vue-next'

const router = useRouter()
const form = ref({ email: '', password: '', confirmPassword: '' })
const error = ref('')
const loading = ref(false)
const showPassword = ref(false)
const showConfirmPassword = ref(false)

const handleSubmit = async () => {
  error.value = ''
  if (!form.value.email || !form.value.password || !form.value.confirmPassword) {
    error.value = 'Please fill in all required fields.'
    return
  }

  if (form.value.password !== form.value.confirmPassword) {
    error.value = 'Passwords do not match.'
    return
  }

  loading.value = true
  const { error: signupError } = await supabase.auth.signUp({
    email: form.value.email,
    password: form.value.password,
  })
  loading.value = false

  if (signupError) {
    error.value = signupError.message
    return
  }

  router.push('/dashboard')
}
</script>
