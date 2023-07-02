import { configureStore } from '@reduxjs/toolkit';
import missionsSearchReducer from './missionsSearch';
import themeReducer from './theme';
import missionsFiltersReducer from './missionsFilters';
import youtubeModalReducer from './youtubeModal';
import missionDetailsReducer from './missionDetails';

const store = configureStore({
  reducer: {
    missionsSearch: missionsSearchReducer,
    theme: themeReducer,
    missionsFilters: missionsFiltersReducer,
    youtubeModal: youtubeModalReducer,
    missionDetails: missionDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
