import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { RobotoBold } from '@components/texts';
import { IconTemplateProps, TabBarIconProps } from './interface';
import { useNavigation } from '@react-navigation/native';

const IconTemplate = ({ icon, title, focused, stackName }: IconTemplateProps) => {
  const navigation = useNavigation();

  const handlePress = () => {
    console.log('Press', stackName);
    navigation.navigate(stackName);
  };

  return (
    <TouchableOpacity activeOpacity={1} style={styles.container} onPress={handlePress}>
      <Image source={icon} style={styles.image} resizeMode='contain' />
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
