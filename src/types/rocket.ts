import { Agency } from './agency';
import { Image } from './image';

export interface Rocket {
  _id: string;
  name: string;
  description?: string;
  generalInformations?: string;
  carrying_capacity?: { name: string; value: string }[];
  statistics?: { name: string; value: string }[];
  image: Image;
  gallery?: {
    image: Image;
  }[];
  Agencies: Agency[];
}
