const STORAGE_KEY = 'tickets'

export function getTickets() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
}

export function saveTicket(ticket) {
  const tickets = getTickets()
  tickets.push({ ...ticket, id: Date.now() })
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets))
}

export function updateTicket(id, updatedTicket) {
  const tickets = getTickets().map(t => (t.id === id ? { ...t, ...updatedTicket } : t))
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets))
}

export function deleteTicket(id) {
  const tickets = getTickets().filter(t => t.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tickets))
}
