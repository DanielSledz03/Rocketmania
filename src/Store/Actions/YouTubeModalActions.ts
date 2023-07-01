import { SET_TO_UNVISIBLE, SET_TO_VISIBLE } from '../Types/YouTubeModalTypes';

const setToVisible = (livestreamLink: string) => ({
  type: SET_TO_VISIBLE,
  livestreamLink: livestreamLink,
});

const setToUnvisible = () => ({
  type: SET_TO_UNVISIBLE,
});

export { setToVisible, setToUnvisible };
