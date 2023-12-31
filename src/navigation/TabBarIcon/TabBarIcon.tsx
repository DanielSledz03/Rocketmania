import { IconTemplateProps, TabBarIconProps } from './interface';
import { RobotoBold } from '@components/texts';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';

const IconTemplate = ({ icon, title, focused, stackName }: IconTemplateProps) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(stackName);
  };

  return (
    <TouchableOpacity activeOpacity={1} style={styles.container} onPress={handlePress}>
      <FastImage source={icon} style={styles.image} resizeMode='contain' />
      <RobotoBold style={[styles.text, { color: focused ? 'white' : '#505050' }]}>
        {title}
      </RobotoBold>
    </TouchableOpacity>
  );
};

export const TabBarIcon = (props: TabBarIconProps) => {
  if (!props.focused) return <IconTemplate {...props} icon={props.iconFocused} />;
  else return <IconTemplate {...props} icon={props.icon} />;
};

const styles = StyleSheet.create({
  container: {
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: { width: '100%', height: '45%' },

  text: {
    fontSize: 12,
  },
});
