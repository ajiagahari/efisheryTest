import Vue from 'vue'
import View from '@/components/View'
Vue.config.isUnknownElement = () => {}
function getRenderedText (Component, propsData) {
    const Constructor = Vue.extend(Component)
    const vm = new Constructor({ propsData: propsData }).$mount()
    return vm.$el.querySelector('.idCard').textContent
}
describe('View.vue', () => {
    it('renders correctly with different props', () => {
        expect(getRenderedText(View, {
            cardId: 'ex8-98'
        })).toBe('ex8-98')

        expect(getRenderedText(View, {
            cardId: '123'
        })).toBe('123')
    })
})