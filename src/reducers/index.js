import { configureStore } from '@reduxjs/toolkit';

import panelReducer from './panelReducers';

const store = configureStore({
  reducer: {
    panel: panelReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(serializableStateInvariantMiddleware()),
  },
});

export default store;