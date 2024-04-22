import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar, faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { faStar as faStarSolid, faCartShopping, faMagnifyingGlass, faChevronDown, faArrowRight, faLifeRing, faBook, faRulerCombined } from '@fortawesome/free-solid-svg-icons'

library.add(faStar, faStarSolid, faCircleUser, faCartShopping, faMagnifyingGlass, faChevronDown, faArrowRight, faLifeRing, faBook, faRulerCombined)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')


