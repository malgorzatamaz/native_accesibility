import {StyleSheet} from 'react-native';

import colors from '../assets/colors/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  content: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  focusedItemContainer: {
    borderColor: 'red',
    borderWidth: 3,
  },
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    backgroundColor: colors.lowContrast.background,
  },
  title: {
    fontWeight: 'bold',
    color: colors.lowContrast.text,
  },
  description: {
    color: '#353f40',
  },
  listImage: {
    width: 100,
    height: 100,
  },
});

export default styles;
