import Vue from 'vue'
import Home from '@/components/Home'
Vue.config.isUnknownElement = () => {}
describe('Home.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(Home)
        const vm = new Constructor().$mount()
        expect(vm.$el.querySelector('.home h1').textContent)
            .toEqual('Welcome To Test Pokemon TCG')
    })
})