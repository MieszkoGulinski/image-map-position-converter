import {createStore} from 'redux';
import reducer from './reducer';

const mainStore = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default mainStore;
