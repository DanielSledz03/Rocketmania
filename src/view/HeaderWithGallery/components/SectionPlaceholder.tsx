import { ScrollView, StyleSheet, View } from 'react-native';
import { Placeholder } from '@/components';
import { SCREEN_WIDTH } from '@/utils';

export const SectionPlaceholder = () => {
  return (
    <>
      <Placeholder>
        <View />
      </Placeholder>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        {[1, 2, 3].map((index) => (
          <Placeholder key={index}>
            <View />
          </Placeholder>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  firstPlaceholderContainer: {
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
  },

  scrollView: { flexDirection: 'row' },

  placeholderContainer: {
    width: SCREEN_WIDTH / 2.4,
    height: SCREEN_WIDTH / 2.4,
    flexDirection: 'row',
    overflow: 'hidden',
  },
});
