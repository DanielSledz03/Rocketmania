import { Booster } from './booster';
import { Image } from './image';
import { Rocket } from './rocket';

export interface Mission {
  name: string;
  date: string;
  status: string;
  description?: string;
  specification?: string[];
  windowStart?: string;
  windowEnd?: string;
  probability?: number;
  livestream?: string;
  changeLogs?: string[];
  patch?: Image;
  rocket: Rocket;
  _id: string;
  boosters: Booster[];
}
