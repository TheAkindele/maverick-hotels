import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer'

//const middleware = []

export const store = createStore(rootReducer)