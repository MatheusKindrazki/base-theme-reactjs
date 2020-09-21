import { combineReducers } from 'redux';

import { connectRouter } from 'connected-react-router';

import history from '~/services/history';

import toast from './toast/reducer';

export default combineReducers({
  router: connectRouter(history),
  toast,
});
