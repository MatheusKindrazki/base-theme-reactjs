import { Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default (reducers: Reducer): Reducer => {
  const persistName = process.env.REACT_APP_PERSIST_NAME || 'example';

  const persistedReducer = persistReducer(
    {
      key: persistName,
      storage,
      whitelist: [''],
    },
    reducers,
  );

  return persistedReducer;
};
