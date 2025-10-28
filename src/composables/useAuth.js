import { ref } from 'vue'
import { useRouter } from 'vue-router'

const session = ref(JSON.parse(localStorage.getItem('session')) || null)

export function useAuth() {
  const router = useRouter()

  const login = (userData) => {
    session.value = userData
    localStorage.setItem('session', JSON.stringify(userData))
  }

  const logout = () => {
    session.value = null
    localStorage.removeItem('session')
    router.push('/login')
  }

  const isAuthenticated = () => !!session.value

  return { session, login, logout, isAuthenticated }
}

