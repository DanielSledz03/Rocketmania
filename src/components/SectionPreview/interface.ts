import { ImageSourcePropType } from 'react-native';

export interface SectionPreviewProps {
  photoUrl: ImageSourcePropType;
  introduction: string;
  note: string;
  description: string;
  credits: string;
  buttonTitle: string;
  buttonDisabled?: boolean;
  onPress: () => any;
  title: string;
}
