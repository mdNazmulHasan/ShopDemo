import {createStore, combineReducers} from 'redux';
import cartReducer from './reducers/carts';
const rootReducer = combineReducers({
  carts: cartReducer,
});
const store = createStore(rootReducer);
export default store;
