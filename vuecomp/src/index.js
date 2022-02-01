import { useCssModule } from 'vue'
import components from './components'

const vuecomp = {
    install(Vue) {
        for (const prop in components) {
            if (components.hasOwnProperty(prop)) {
                const component = components[prop]
                Vue.component(component.name, component)
            }
        }
    }
}

export default vuecomp