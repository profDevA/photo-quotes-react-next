import { INCREMENT_COUNTER } from '../types'
import { DECREMENT_COUNTER } from '../types'

//Action Creator
export const incrementCounter = () => ({
    type: INCREMENT_COUNTER
});

export const decrementCounter = () => ({
    type: DECREMENT_COUNTER
});