import * as types from '../Types/YouTubeModalTypes';

export interface IYoutTubeModalReducer {
  isVisible: boolean;
  livestreamLink: string;
}

const defaultState = (): IYoutTubeModalReducer => ({
  isVisible: false,
  livestreamLink: '',
});

export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case types.SET_TO_VISIBLE:
      return { isVisible: true, livestreamLink: action.livestreamLink };
    case types.SET_TO_UNVISIBLE:
      return { isVisible: false, livestreamLink: '' };
    default:
      return state;
  }
};
