import missionDetailsReducer from './missionDetails';
import missionsFiltersReducer from './missionsFilters';
import missionsSearchReducer from './missionsSearch';
import rocketDetailsReducer from './rocketDetails';
import themeReducer from './theme';
import youtubeModalReducer from './youtubeModal';

import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    missionsSearch: missionsSearchReducer,
    theme: themeReducer,
    missionsFilters: missionsFiltersReducer,
    youtubeModal: youtubeModalReducer,
    missionDetails: missionDetailsReducer,
    rocketDetails: rocketDetailsReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
