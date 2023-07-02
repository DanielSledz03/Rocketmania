import { useState } from 'react';
import { Animated, LayoutAnimation, StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { ButtonExpand } from '@/components/Buttons/ButtonExpand';

interface IProps {
  children: string;
}

export const TextWithExpandButton = ({ children }: IProps) => {
  const [expanded, setExpanded] = useState(false);
  const [lines, setLines] = useState(0);

  return (
    <>
      <View style={styles.container}>
        <Animated.Text
          onTextLayout={(e) => setLines(e.nativeEvent.lines.length)}
          numberOfLines={expanded ? lines : 4}
          style={[
            styles.description,
            {
              height: LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut),
            },
          ]}
        >
          {children}
        </Animated.Text>
      </View>

      {children.length < 280 ? null : (
        <ButtonExpand setIsExpand={setExpanded} isExpand={expanded} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  description: {
    fontSize: moderateScale(13),
    lineHeight: moderateScale(21),
    color: 'white',
    marginTop: moderateScale(10),
    fontFamily: 'Roboto-Medium',
  },
});
