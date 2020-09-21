import { ExamplesReducer } from './modules/example/types';
import { INITIAL_STATE_TYPE as ToastProps } from './modules/toast/reducer';

interface ApplicationState {
  example: ExamplesReducer;
  toast: ToastProps;
}
declare global {
  declare namespace Store {
    type State = ApplicationState;
  }
}
