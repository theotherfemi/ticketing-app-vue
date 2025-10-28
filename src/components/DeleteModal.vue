<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm">
      <h3 class="text-xl font-semibold text-gray-800 mb-3 text-center">Delete Ticket</h3>
      <p class="text-gray-600 mb-6 text-center">
        Are you sure you want to delete
        <span class="font-semibold text-red-500">"{{ ticket?.title }}"</span>?
      </p>

      <div class="flex justify-between">
        <button
          class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          @click="$emit('cancel')"
        >
          Cancel
        </button>
        <button
          class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          @click="$emit('confirm', ticket)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  ticket: Object,
})
defineEmits(['cancel', 'confirm'])
</script>

