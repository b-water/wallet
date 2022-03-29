import { mount } from '@vue/test-utils'
import component from '@/components/CurrencySelect'

describe('CurrencySelect component', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(component)
        expect(wrapper.vm).toBeTruthy()
    })
})
