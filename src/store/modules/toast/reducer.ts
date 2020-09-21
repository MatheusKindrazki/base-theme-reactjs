import { Reducer } from 'redux';

import { produce } from 'immer';

import { ToastProps } from './actions';

type ReducerToast = Omit<ToastProps, 'type'>;

interface ToastP extends ReducerToast {
  type: string;
}

const INITIAL_STATE = {
  message: {} as ToastP,
};

export type INITIAL_STATE_TYPE = typeof INITIAL_STATE;

const auth: Reducer<INITIAL_STATE_TYPE> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case '@toast/DISPATCH': {
        draft.message = action.payload as ToastP;
        break;
      }
      case '@toast/REMOVE': {
        draft.message = {} as ToastP;
        break;
      }
      default:
    }
  });
};

export default auth;
