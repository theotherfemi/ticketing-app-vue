<template>
  <div
    class="p-5 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition"
    :class="{
      'bg-green-50': ticket.status === 'open',
      'bg-amber-50': ticket.status === 'in_progress',
      'bg-gray-100': ticket.status === 'closed',
    }"
  >
    <div class="flex justify-between items-center mb-2">
      <h3 class="text-lg font-semibold text-gray-800">{{ ticket.title }}</h3>
      <span
        class="text-sm font-medium"
        :class="{
          'text-green-700': ticket.status === 'open',
          'text-amber-700': ticket.status === 'in_progress',
          'text-gray-700': ticket.status === 'closed',
        }"
      >
        {{ formatStatus(ticket.status) }}
      </span>
    </div>

    <p class="text-gray-600 mb-4 line-clamp-3">{{ ticket.description }}</p>

    <div class="flex justify-end gap-3">
      <button
        class="text-sm text-amber-600 hover:text-amber-700 font-medium"
        @click="$emit('edit', ticket)"
      >
        Edit
      </button>
      <button
        class="text-sm text-red-600 hover:text-red-700 font-medium"
        @click="$emit('delete', ticket)"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  ticket: {
    type: Object,
    required: true,
  },
})

defineEmits(['edit', 'delete'])

const formatStatus = (status) => {
  const map = {
    open: 'Open',
    in_progress: 'In Progress',
    closed: 'Closed',
  }
  return map[status] || status
}
</script>
