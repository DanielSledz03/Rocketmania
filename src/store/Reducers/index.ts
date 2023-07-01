import { combineReducers } from 'redux';

import ThemeReducer, { IThemeReducer } from './ThemeReducer';
import YouTubeModalReducer, {
  IYoutTubeModalReducer,
} from './YouTubeModalReducer';

const reducers = combineReducers({
  themeReducer: ThemeReducer,
  youtubeModal: YouTubeModalReducer,
});

export interface IState {
  themeReducer: IThemeReducer;
  youtubeModal: IYoutTubeModalReducer;
}

export default reducers;
