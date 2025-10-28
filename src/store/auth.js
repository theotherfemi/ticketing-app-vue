import { reactive, onMounted } from 'vue'
import { supabase } from '../services/supabase'

const state = reactive({
  user: null,
  loading: true,
})

export function useAuth() {
  const fetchUser = async () => {
    const { data } = await supabase.auth.getSession()
    state.user = data.session?.user || null
    state.loading = false
  }

  const signOut = async () => {
    await supabase.auth.signOut()
    state.user = null
  }

  onMounted(fetchUser)

  return { ...state, signOut }
}
