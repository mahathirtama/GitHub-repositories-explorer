import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app'
import { Provider } from 'react-redux'
import { store } from './store'


const Root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
Root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

