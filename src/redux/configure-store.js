import { createStore } from 'redux';
import rootReducer from './root-reducer';

const configureStore = () => {
  const store = createStore(rootReducer);
  return store;
};

export default configureStore;
