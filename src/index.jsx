import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const initialState = {
  number: 0
}

const reducer = (state = initialState, action) =>{
  switch(action.type) {
    case 'increment':
      return {
        ...state ,
        number: state.number + 1
      }
    case 'decrement':
      return {
        ...state ,
        number: state.number - 1
      }
    case 'reset':
      return {
        ...state ,
        number: state.number - state.number
      }
    default: 
      return state
  }
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
