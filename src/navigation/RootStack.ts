import { StarshipStackParamList } from './Stacks/Starship';
import { RocketLaunchesStackParamList } from '@/navigation/Stacks/Launches';

export interface RootStackParamList {
  RocketLaunchesStackParamList: RocketLaunchesStackParamList;
  StarshipStackParamList: StarshipStackParamList;
  // Add other screens here
}
