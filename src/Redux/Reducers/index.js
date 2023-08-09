import { combineReducers } from 'redux';
import { productsReducer, selectedProductReducer } from './productReducer';

const reducers = combineReducers({
  products: productsReducer,
  product: selectedProductReducer,
});

export default reducers;
