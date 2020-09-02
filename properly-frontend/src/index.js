import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit'
import App from './components/App';
import rootReducer from './reducers'
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loadState, saveState } from './localStorage'

const persistedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState:  persistedState
})

store.subscribe(()  => {
  saveState({
    authorization: store.getState().authorization,
    isLoggedIn: store.getState().isLoggedIn
  });
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
