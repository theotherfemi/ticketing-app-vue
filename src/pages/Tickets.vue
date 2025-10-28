<template>
  <div class="max-w-[1440px] w-full px-4 py-16 mx-auto">
    <div class="flex justify-end items-center mb-6">
      <button
        @click="openCreateModal"
        class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        + New Ticket
      </button>
    </div>

    <!-- Ticket List -->
    <div v-if="tickets.length" class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <TicketCard
        v-for="ticket in tickets"
        :key="ticket.id"
        :ticket="ticket"
        @edit="handleEdit"
        @delete="handleDeleteClick"
      />
    </div>

    <p v-else class="text-gray-500 text-xl text-center mt-12">
      No tickets yet. Create one to get started!
    </p>

    <!-- Modals -->
    <TicketModalForm
      v-if="showFormModal"
      :initial-data="selectedTicket"
      @close="closeFormModal"
      @submit="handleSubmit"
    />

    <DeleteModal
      v-if="showDeleteModal"
      :ticket="ticketToDelete"
      @cancel="showDeleteModal = false"
      @confirm="confirmDelete"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TicketCard from '../components/TicketCard.vue'
import TicketModalForm from '../components/TicketModalForm.vue'
import DeleteModal from '../components/DeleteModal.vue'

const tickets = ref(JSON.parse(localStorage.getItem('tickets') || '[]'))

const showFormModal = ref(false)
const showDeleteModal = ref(false)
const selectedTicket = ref(null)
const ticketToDelete = ref(null)

const saveTickets = () => {
  localStorage.setItem('tickets', JSON.stringify(tickets.value))
}

const openCreateModal = () => {
  selectedTicket.value = null
  showFormModal.value = true
}

const closeFormModal = () => {
  showFormModal.value = false
  selectedTicket.value = null
}

const handleSubmit = (ticketData) => {
  if (selectedTicket.value) {
    // Update existing ticket
    const index = tickets.value.findIndex((t) => t.id === selectedTicket.value.id)
    if (index !== -1) tickets.value[index] = { ...selectedTicket.value, ...ticketData }
  } else {
    // Create new
    const newTicket = { id: Date.now(), ...ticketData }
    tickets.value.push(newTicket)
  }
  saveTickets()
  closeFormModal()
}

const handleEdit = (ticket) => {
  selectedTicket.value = { ...ticket }
  showFormModal.value = true
}

const handleDeleteClick = (ticket) => {
  ticketToDelete.value = ticket
  showDeleteModal.value = true
}

const confirmDelete = (ticket) => {
  tickets.value = tickets.value.filter((t) => t.id !== ticket.id)
  saveTickets()
  showDeleteModal.value = false
  ticketToDelete.value = null
}
</script>
