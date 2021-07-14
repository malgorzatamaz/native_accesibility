import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

import styles from './styles';
import colors from '../assets/colors/colors';
import {AccessibilityModeContext} from '../utils/AccessibilityModeContext';

const Touchable =
  Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

const ListItem = ({item, navigation, isFocused, refProp}) => {
  const {isAccesibilityModeOn} = React.useContext(AccessibilityModeContext);

  return (
    <Touchable
      accessible={true}
      ref={r => refProp(r)}
      onPress={() => navigation.navigate('Details', {item})}
      accessibilityLabel={item.title}
      accessibilityHint={`Say "press" to navigate to ${item.title} details. Say "next" to move to next item.`}
      onAccessibilityTap={() => navigation.navigate('Details', {item})}>
      <View
        style={[
          isFocused && styles.focusedItemContainer,
          styles.itemContainer,
          isAccesibilityModeOn && {
            backgroundColor: colors.highContrast.background,
          },
        ]}>
        <View style={styles.content}>
          <Text
            style={[
              styles.title,
              isAccesibilityModeOn && {
                color: colors.highContrast.text,
              },
            ]}>
            {item.description}
          </Text>
          <Text
            style={[
              styles.description,
              isAccesibilityModeOn && {color: colors.highContrast.text},
            ]}>
            {item.title}
          </Text>
        </View>
        <Image style={styles.listImage} source={item.image} />
      </View>
    </Touchable>
  );
};

export default ListItem;
