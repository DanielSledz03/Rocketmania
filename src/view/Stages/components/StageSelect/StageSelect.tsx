import { PreviewStageSelect } from './components/Preview';
import { useEffect, useState } from 'react';
import { LayoutAnimation, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RobotoMedium } from '@/components';
import { ListItem } from '@/components/ListItem/ListItem';
import { RootState } from '@/store';

const StageSelect = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const rocket = useSelector((state: RootState) => state.rocketDetails.rocketDetails);

  const [selectedValue, setSelectedValue] = useState({
    Name: 'Wybierz stopień',
    Photo: { url: '' },
    Specification: [],
    Description: '',
  });
  const [values, setValues] = useState([{ Name: 'Wybierz stopień' }]);

  useEffect(() => {
    const stages =
      rocket?.stages?.map((stage) => {
        return {
          id: stage._id,
          Name: stage.name,
          Specification: stage.specifications,
          Description: stage.description,
          Photo: {
            url: stage.image?.asset.url,
          },
        };
      }) || [];

    setValues([{ Name: 'Wybierz stopień' }, ...stages]);
  }, [rocket]);

  if (!values) {
    return (
      <View style={styles.box}>
        <View style={styles.container}>
          <ListItem
            onPress={() => null}
            text={'ŁADOWANIE....'}
            isVisible
            isExpandButtonVisible={false}
          />
        </View>
      </View>
    );
  }

  const handleClickItem = (item: any) => {
    setIsVisible((prev) => !prev);
    setSelectedValue(item);
    setExpanded(true);
  };

  const handleClickAll = (item: any) => {
    setIsVisible((prev) => !prev);
    setSelectedValue(item);
    setExpanded(false);
  };

  const listItems = values.map((item, index) => {
    if (index === 0) {
      return (
        <ListItem key={index} onPress={() => handleClickAll(item)} text={item.Name} isVisible />
      );
    }

    return (
      <TouchableOpacity
        key={index}
        onPress={() => handleClickItem(item)}
        style={styles.listItemContainer}
      >
        <RobotoMedium style={styles.text}>{item.Name}</RobotoMedium>
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.box}>
      <View style={[styles.container, { marginBottom: expanded ? 20 : 0 }]}>
        <View
          style={[
            styles.scrollViewStyle,
            {
              height: LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut),
              backgroundColor: isVisible ? '#1C1C1C' : 'black',
            },
          ]}
        >
          {isVisible ? (
            <>{listItems}</>
          ) : (
            <ListItem
              onPress={() => {
                setIsVisible((prev) => !prev);
              }}
              text={selectedValue.Name}
              isVisible={false}
            />
          )}
        </View>
      </View>
      {expanded && selectedValue && <PreviewStageSelect selectedValue={selectedValue} />}
    </View>
  );
};

export default StageSelect;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 1,
    overflow: 'hidden',
    flexDirection: 'row',
    backgroundColor: 'black',
    zIndex: 140,
  },

  box: { marginBottom: 15 },

  scrollViewStyle: {
    backgroundColor: '#1C1C1C',
    position: 'relative',
  },

  text: {
    fontSize: 11,
    textTransform: 'uppercase',
  },

  listItemContainer: {
    width: '90%',
    height: 45,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
});
