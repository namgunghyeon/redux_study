import { createStore, combineReducers } from '../src/index'
import { addTodo, dispatchInMiddle, throwError, unknownAction } from './helpers/actionCreators'
import * as reducers from './helpers/reducers'
import * as Rx from 'rxjs'
import $$observable from 'symbol-observable'

const store = createStore(combineReducers(reducers), {todos:[]})

const listenerA = () => {
  console.log('listenerA', store.getState());
}
const listenerB = () => {
  console.log('listenerB', store.getState());
}
let unsubscribeA = store.subscribe(listenerA)
//let unsubscribeB = store.subscribe(listenerB)

//store.dispatch(unknownAction())
store.dispatch(addTodo())

/*
const observable = store2[$$observable]()
const results = []
console.log('observable', observable);
observable.subscribe({
  next(state) {
    console.log('state', state);
    results.push(state)
  }
})
*/
//store2.dispatch(addTodo())
