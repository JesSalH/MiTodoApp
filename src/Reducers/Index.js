import { combineReducers } from 'redux';
import todos from './todos'
import {connectRouter} from 'connected-react-router';


export default (history) => combineReducers({
  todos,
  router: connectRouter(history),
});