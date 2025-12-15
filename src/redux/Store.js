import {createStore}  from 'redux'
import Cake_reducer from './cake/Cake_reducer'

const store=createStore(Cake_reducer)
export default store