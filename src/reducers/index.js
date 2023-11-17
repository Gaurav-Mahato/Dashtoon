import { configureStore } from '@reduxjs/toolkit';
import panelReducer from './panelReducers';

const store = configureStore({
  reducer: {
    panel: panelReducer,
  },
});

export default store;