import { ref } from 'vue'

const session = ref(JSON.parse(localStorage.getItem('ticketapp_session')) || null)

export function useAuth() {
  const login = (data) => {
    localStorage.setItem('ticketapp_session', JSON.stringify(data))
    session.value = data // instantly update reactive session
  }

  const logout = () => {
    localStorage.removeItem('ticketapp_session')
    session.value = null
  }

  return { session, login, logout }
}
