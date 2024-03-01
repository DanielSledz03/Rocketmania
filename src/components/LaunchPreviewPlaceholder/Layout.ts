import { SCREEN_HEIGHT } from '@/utils';

const createLayout = (
  key: string,
  width: string,
  heightFactor: number,
  marginBottomFactor: number,
) => ({
  key,
  width,
  height: SCREEN_HEIGHT * heightFactor,
  marginBottom: SCREEN_HEIGHT * marginBottomFactor,
  opacity: 0.8,
  backgroundColor: 'black',
});

export const LaunchPreviewPlaceholderLayout = [
  createLayout('1', '80%', 0.04, 0.02),
  createLayout('2', '70%', 0.04, 0.06),
  createLayout('3', '90%', 0.05, 0.06),
  createLayout('4', '75%', 0.025, 0.04),
  createLayout('5', '75%', 0.025, 0.06),
  createLayout('6', '75%', 0.07, 0.06),
];
