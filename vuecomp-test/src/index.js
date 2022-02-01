
import { createApp } from "vue"
import App from "./app.vue"
import vuecomp from '@thetrav/vuecomp'

const app = createApp(App)
app.use(vuecomp)
app.mount("app")
