import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import './index.css';
import App from './containers/App/App';
import registerServiceWorker from './registerServiceWorker';

const router = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);

ReactDOM.render(
  <Provider store={store} >
    {router}
  </Provider>, document.getElementById('root'));
registerServiceWorker();
