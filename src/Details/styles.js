import {StyleSheet} from 'react-native';

import colors from '../assets/colors/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: colors.lowContrast.background,
    marginBottom: 5,
    padding: 20,
  },
  description: {color: colors.lowContrast.text, paddingBottom: 20},
  image: {width: 200, height: 200},
});

export default styles;
