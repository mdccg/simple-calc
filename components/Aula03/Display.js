import { Text, View, StyleSheet } from 'react-native';
import { palette } from './palette';

export default ({ numero = 0 }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{numero}</Text>
      <View style={styles.horizontalRule} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'column',
    display: 'flex',
    height: '40%',
    padding: 16,
  },
  text: {
    color: palette.white,
    fontSize: 48,
  },
  horizontalRule: {
    backgroundColor: palette.gray,
    marginTop: 8,
    width: '100%',
    height: 1,
  }
});
