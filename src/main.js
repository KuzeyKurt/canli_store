import { createApp} from 'vue'
import App from './App.vue'
import store from './vuex/store'
import './assets/styles/styles.scss'

App.config.productionTip = false
 store
createApp(App).mount('#app')
