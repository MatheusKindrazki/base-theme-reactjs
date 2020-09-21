import { Action } from 'redux';

import { ToastMessage } from '~/hooks/toast';

export type ToastProps = Omit<ToastMessage, 'id'>;

export function toast(message: ToastProps): Action {
  return {
    type: '@toast/DISPATCH',
    payload: message,
  };
}

export function removeToast(): Action {
  return {
    type: '@toast/REMOVE',
  };
}
