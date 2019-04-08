import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
// nuestros reducers
import createRootReducer from '../reducers';
const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// el history...
export const history = createBrowserHistory();

// el el store con nuestros reducers (y un history como parametro...???)
export const store = createStore(
    createRootReducer(history),
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            ReduxThunk,
        ),
    ),
);