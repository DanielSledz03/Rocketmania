import { RobotoRegular } from '../texts';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

interface IProps {
  text: string;
  onPress: () => void;
  isVisible: boolean;
  isExpandButtonVisible?: boolean;
}

export const ListItem = ({ text, onPress, isVisible, isExpandButtonVisible = true }: IProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.listAllItemContainer}>
      <View
        style={[styles.listItemTextContainer, { width: isExpandButtonVisible ? '80%' : '100%' }]}
      >
        <RobotoRegular style={styles.text}>{text}</RobotoRegular>
      </View>

      {isExpandButtonVisible && (
        <View style={styles.iconContainer}>
          <Image
            source={
              isVisible
                ? require('../../assets/images/expand/expandRotated.png')
                : require('../../assets/images/expand/expand.png')
            }
            style={styles.icon}
            resizeMode='contain'
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listAllItemContainer: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
  },

  listItemTextContainer: {
    width: '80%',
    height: '100%',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },

  text: {
    fontSize: 11,
    textTransform: 'uppercase',
  },

  icon: { width: '20%', height: '20%' },

  iconContainer: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
