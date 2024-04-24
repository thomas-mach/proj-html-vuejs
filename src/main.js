import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCircleUser, faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faTwitter, faInstagram, faInvision } from '@fortawesome/free-brands-svg-icons'
import {
    faCartShopping, faMagnifyingGlass,
    faChevronDown, faArrowRight, faLifeRing,
    faBook, faRulerCombined, faCircle, faArrowUp
} from '@fortawesome/free-solid-svg-icons'

library.add(faCircleUser, faCartShopping,
    faMagnifyingGlass, faChevronDown,
    faArrowRight, faLifeRing, faBook,
    faRulerCombined, faCircle, faFacebook,
    faTwitter, faInstagram, faInvision, faCopyright, faArrowUp)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')


