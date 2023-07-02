import missionDetailsReducer from './missionDetails';
import missionsFiltersReducer from './missionsFilters';
import missionsSearchReducer from './missionsSearch';
import themeReducer from './theme';
import youtubeModalReducer from './youtubeModal';
import { configureStore } from '@reduxjs/toolkit';

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
