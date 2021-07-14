import {StyleSheet} from 'react-native';

import DeviceInfo from 'react-native-device-info';
const isIphoneX = DeviceInfo.hasNotch();

const styles = StyleSheet.create({
  navigationBar: {
    marginTop: isIphoneX ? 30 : 0,
    padding: 20,
  },
});

export default styles;
