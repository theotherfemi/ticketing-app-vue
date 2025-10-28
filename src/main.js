
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useAuth } from './composables/useAuth'
import './style.css'

const { session } = useAuth() // make sure import is correct

const app = createApp(App)

app.use(router)
app.mount('#app')

// Now you can safely check session.value
if (!session.value) {
  router.push('/auth/login')
}

