import { mount, shallowMount } from '@vue/test-utils'
import axios from 'axios'
import component from '@/components/CurrencySelect'
import currencys from '~/prisma/seeds/currencys'

jest.spyOn(axios, 'get').mockResolvedValue(currencys)

describe('CurrencySelect component', () => {
    /** 
    test('is a Vue instance', () => {
        const wrapper = shallowMount(component)
        expect(wrapper.vm).toBeTruthy()
    })*/

    test('can load currencys', async () => {
        const data = {};
        axios.get.mockImplementationOnce(() => Promise.resolve(data));
        const wrapper = shallowMount(component)
        await wrapper.vm.$nextTick();
        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(axios.get).toHaveBeenCalledWith('/api/currency')
    })

    /** 
    test('can parse prop', () => {
        const wrapper = shallowMount(component, {
            propsData: {
                initialValue: 1
            }
        })
        console.log('hello');
    })
    */
})
