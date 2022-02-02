import PcButton from "./PcButton.vue"
import { App } from 'vue'

const vuecomp = {
    install(app: App) {
        app.component(PcButton.name, PcButton)
    }
}

export default vuecomp