import './assets/styles/general.scss'
//tutte le regole di stile di file general si applicano a questo file
//se voglio utilizzare delle regole di stile contenute in un partial, devo importarlo anche qui!!!

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
