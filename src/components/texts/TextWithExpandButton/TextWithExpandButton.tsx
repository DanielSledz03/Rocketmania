import { useState } from 'react';
import { Animated, LayoutAnimation, StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { ButtonExpand } from '@/components/Buttons/ButtonExpand';

interface PropsInterface {
  children: string;
}

export const TextWithExpandButton = ({ children }: PropsInterface) => {
  const [expanded, setExpanded] = useState(false);

  const TextStyles: any = [
    styles.description,
    {
      height: LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut),
    },
  ];

  return (
    <>
      <View style={styles.container}>
        <Animated.Text style={TextStyles}>
          {expanded ? children : children.length > 600 ? children.slice(0, 600) + '...' : children}
        </Animated.Text>
      </View>

      {children.length < 600 ? null : (
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
