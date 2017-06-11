import { createStore, applyMiddleware, combineReducers } from '../src/index'
import * as reducers from './helpers/reducers'
import { addTodo, addTodoAsync, addTodoIfEmpty } from './helpers/actionCreators'
import { thunk } from './helpers/middleware'

function logger({ dispatch, getState }) {
  return (next) => (action) => {
    console.log('earlyDispatch', next, action);
    console.log('state after dispatch', getState())
    return next(action);
  }
}




const store = createStore(combineReducers(reducers), applyMiddleware(logger))

const listenerB = () => {
  console.log('listenerB', store.getState());
}
//let unsubscribeA = store.subscribe(listenerB)
store.dispatch(addTodo('test'))


store.dispatch(addTodo('test3'))
