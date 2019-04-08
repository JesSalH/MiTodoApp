import { combineReducers } from 'redux';
// importamos al index nuestro unico reducer (todos)
import todos from './todos'
// un router...?
import {connectRouter} from 'connected-react-router';


export default (history) => combineReducers({
  todos,
  router: connectRouter(history),
});