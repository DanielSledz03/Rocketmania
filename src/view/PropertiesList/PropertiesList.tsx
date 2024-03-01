import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { Property } from '@/components';

interface IProps {
  list: string[];
  containerStyle?: StyleProp<ViewStyle>;
}

export const PropertiesList = ({ list, containerStyle }: IProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {list.map((item) => {
        return <Property key={item} name={item.split(': ')[0]} value={item.split(': ')[1]} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 20,
    flexWrap: 'wrap',
  },
});
