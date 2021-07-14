import React, {useEffect} from 'react';
import {Switch, View} from 'react-native';

import {AccessibilityModeContext} from '../utils/AccessibilityModeContext';
import {VoiceRecognitionContext} from '../utils/VoiceRecognitionContext';
import styles from './styles';

const NavigationBar = () => {
  const {isAccesibilityModeOn, setIsAccesibilityModeOn} = React.useContext(
    AccessibilityModeContext,
  );

  const voiceInstructions = React.useContext(VoiceRecognitionContext);
  const offInstructions = ['turn off', 'switch off'];
  const onInstructions = ['turn on', 'switch on'];

  useEffect(() => {
    if (
      offInstructions.some(instuction =>
        (voiceInstructions || []).includes(instuction),
      )
    ) {
      setIsAccesibilityModeOn(false);
    } else if (
      onInstructions.some(instuction =>
        (voiceInstructions || []).includes(instuction),
      )
    ) {
      setIsAccesibilityModeOn(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [voiceInstructions]);

  return (
    <View style={styles.navigationBar}>
      <Switch
        value={isAccesibilityModeOn}
        onChange={() => setIsAccesibilityModeOn(!isAccesibilityModeOn)}
      />
    </View>
  );
};

export default NavigationBar;
