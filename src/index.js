import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import * as serviceWorker from './serviceWorker';

// Estos 2 imports hacen falta para ... 
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// importamos reducers
import reducers from './Reducers/Index';

ReactDOM.render(

    // el provider tiene un store con los reducers que hemos creado
    // ahora el componente App tiene acceso al store (con los datos?)
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>
    ,
    document.querySelector('#root')
);
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
