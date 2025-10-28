<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
      <h2 class="text-2xl font-semibold text-center mb-4 text-blue-600">
        {{ isEditMode ? 'Edit Ticket' : 'Create New Ticket' }}
      </h2>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block text-gray-700 mb-1">Title</label>
          <input
            v-model="formData.title"
            type="text"
            placeholder="Enter ticket title"
            class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label class="block text-gray-700 mb-1">Description</label>
          <textarea
            v-model="formData.description"
            placeholder="Describe the issue..."
            class="w-full border border-gray-300 rounded-lg p-3 h-24 focus:ring-2 focus:ring-blue-500 outline-none"
          ></textarea>
        </div>

        <div>
          <label class="block text-gray-700 mb-1">Status</label>
          <select
            v-model="formData.status"
            class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        <!-- Error message -->
        <p v-if="error" class="text-red-500 text-sm text-center">{{ error }}</p>

        <div class="flex justify-between mt-6">
          <button
            type="button"
            @click="$emit('close')"
            class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {{ isEditMode ? 'Save Changes' : 'Create Ticket' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps({
  initialData: {
    type: Object,
    default: null,
  },
})

const emit = defineEmits(['close', 'submit'])

const formData = ref({
  title: '',
  description: '',
  status: 'open',
})
const error = ref('')

const isEditMode = computed(() => !!props.initialData)

// Pre-fill when editing
watch(
  () => props.initialData,
  (newVal) => {
    if (newVal) {
      formData.value = { ...newVal }
    } else {
      formData.value = { title: '', description: '', status: 'open' }
    }
  },
  { immediate: true }
)

const handleSubmit = () => {
  if (!formData.value.title || !formData.value.description) {
    error.value = 'All fields are required.'
    return
  }
  error.value = ''
  emit('submit', { ...formData.value })
}
</script>
