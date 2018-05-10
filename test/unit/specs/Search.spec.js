import Vue from 'vue'
import Search from '@/components/Search'
import Pokemon from 'pokemontcgsdk'

Vue.config.isUnknownElement = () => {}

const pokemon = Pokemon
function getPokemon (Component) {
    const Constructor = Vue.extend(Component)
    const vm = new Constructor().$mount()
    return vm.$el.querySelector('.setSelected').textContent
}
describe('Search.vue', () => {
    it('renders correctly with pokemon', () => {
        expect(getPokemon(Search)).toBe('Set --  ')
    })
})