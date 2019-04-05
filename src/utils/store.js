import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import createRootReducer from '../reducers';
const composeEnhancers = (window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();
export const store = createStore(
    createRootReducer(history),
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            ReduxThunk,
        ),
    ),
);