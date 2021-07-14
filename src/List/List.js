import React, {useState, useEffect, useRef} from 'react';
import {FlatList, View, AccessibilityInfo, findNodeHandle} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

import ListItem from '../ListItem/ListItem';
import {VoiceRecognitionContext} from '../utils/VoiceRecognitionContext';

const listElements = [
  {
    title: 'Dog',
    description: 'Just tiny pupy',
    image: require('../assets/images/dog.jpg'),
  },
  {
    title: 'Car',
    description: 'My fav red car',
    image: require('../assets/images/car.jpg'),
  },
  {
    title: 'Bike',
    description: 'On of my bikes',
    image: require('../assets/images/bike.jpg'),
  },
];

const List = ({navigation}) => {
  const listItemsRefs = useRef([]);
  const [currentlyFocusedIndex, setCurrentlyFocusedIndex] = useState(0);

  const voiceInstructions = React.useContext(VoiceRecognitionContext);

  const focusNextItem = () => {
    let nextIndex = currentlyFocusedIndex + 1;
    console.log(nextIndex, listItemsRefs.length);

    if (nextIndex >= listItemsRefs.current.length) {
      nextIndex = 0;
    }

    const reactTag = findNodeHandle(listItemsRefs.current[nextIndex]);

    if (reactTag) {
      setCurrentlyFocusedIndex(nextIndex);
      AccessibilityInfo.setAccessibilityFocus(reactTag);
    }
  };

  const focusPrevItem = () => {
    let nextIndex = currentlyFocusedIndex - 1;

    if (nextIndex < 0) {
      nextIndex = listItemsRefs.current.length - 1;
    }

    const reactTag = findNodeHandle(listItemsRefs.current[nextIndex]);

    if (reactTag) {
      setCurrentlyFocusedIndex(nextIndex);
      AccessibilityInfo.setAccessibilityFocus(reactTag);
    }
  };

  const focusFirstItem = () => {
    const reactTag = findNodeHandle(listItemsRefs.current[0]);

    if (reactTag) {
      AccessibilityInfo.setAccessibilityFocus(reactTag);
    }
  };

  useEffect(() => {
    console.log(voiceInstructions);
    if ((voiceInstructions || []).includes('next')) {
      focusNextItem();
    } else if (
      (voiceInstructions || []).includes('previous') ||
      (voiceInstructions || []).includes('back')
    ) {
      focusPrevItem();
    } else if ((voiceInstructions || []).includes('press')) {
      console.log(listElements[currentlyFocusedIndex], currentlyFocusedIndex);
      navigation.navigate('Details', {
        item: listElements[currentlyFocusedIndex],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [voiceInstructions]);

  useEffect(() => {
    focusFirstItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      focusFirstItem();
    }, []),
  );

  console.log(currentlyFocusedIndex);

  return (
    <View>
      <FlatList
        data={listElements}
        renderItem={({item, index}) => (
          <ListItem
            key={item.title}
            refProp={ref => (listItemsRefs.current[index] = ref)}
            isFocused={currentlyFocusedIndex === index}
            item={item}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

export default List;
