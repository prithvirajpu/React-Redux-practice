import {createStore}  from 'redux'
import Cake_reducer from './cake/Cake_reducer'
import Ice_cream_reducer from './ice_cream/Ice_cream_reducer'
import { combineReducers } from 'redux'

const root_reducer=combineReducers({
    cake:Cake_reducer,
    icecream:Ice_cream_reducer
})

const store=createStore(root_reducer)
export default store