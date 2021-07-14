import React, {useEffect} from 'react';

import {View, Text, Image} from 'react-native';

import {AccessibilityModeContext} from '../utils/AccessibilityModeContext';
import {VoiceRecognitionContext} from '../utils/VoiceRecognitionContext';
import colors from '../assets/colors/colors';
import styles from './styles';

const Details = ({
  route: {
    params: {item},
  },
  navigation,
}) => {
  const {isAccesibilityModeOn} = React.useContext(AccessibilityModeContext);
  const voiceInstructions = React.useContext(VoiceRecognitionContext);

  useEffect(() => {
    if ((voiceInstructions || []).includes('back')) {
      navigation.goBack();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [voiceInstructions]);

  return (
    <View
      style={[
        styles.container,
        isAccesibilityModeOn && {
          backgroundColor: colors.highContrast.background,
        },
      ]}>
      <Text
        style={[
          styles.description,
          isAccesibilityModeOn && {
            color: colors.highContrast.text,
          },
        ]}
        accessibilityLabel={item.title}>
        {item.title} - {item.description}
      </Text>
      <Image style={styles.image} source={item.image} />
    </View>
  );
};

export default Details;
