import { SET_TO_DARK, SET_TO_LIGHT } from '../Types/ThemeTypes';

const setToDark = () => ({
  type: SET_TO_DARK,
});

const setToLight = () => ({
  type: SET_TO_LIGHT,
});

export { setToDark, setToLight };
