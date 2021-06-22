import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import { library } from '@fortawesome/fontawesome-svg-core'
// icons
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faSortDown} from '@fortawesome/free-solid-svg-icons'
import { faCog} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons'
import {faPowerOff} from '@fortawesome/free-solid-svg-icons'
import {faBorderAll} from '@fortawesome/free-solid-svg-icons'
import {faBroadcastTower} from '@fortawesome/free-solid-svg-icons'
import {faPlayCircle} from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

import { BBadge } from 'bootstrap-vue'
Vue.component('b-badge', BBadge)
import { BadgePlugin } from 'bootstrap-vue'
Vue.use(BadgePlugin)
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { DropdownPlugin, TablePlugin } from 'bootstrap-vue'
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)
Vue.use(Vuelidate)


library.add(faFileAlt)
library.add(faLightbulb)
library.add(faPlayCircle)
library.add(faBroadcastTower)
library.add(faBorderAll)
library.add(faPowerOff)
library.add(faQuestionCircle)
library.add(faCog)
library.add(faUser)
library.add(faSortDown)
library.add(faBell)
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
