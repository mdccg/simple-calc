import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { CustomIcon } from './CustomIcon';
import { palette } from './palette';
import { globalStyles } from './globalStyles';

export const CustomButton = ({
  children,
  onPress,
  isOrange,
  icon,
  customIconSize,
  hasCircle
}) => {
  const isIcon = children === undefined && typeof icon === 'string';

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {!isIcon ? (
        hasCircle ? (
          <View style={styles.circle}>
            <Text style={[styles.text, styles.circleText]}>{children}</Text>
          </View>
        ) : (
          <Text style={[styles.text,
            { color: isOrange ? palette.orange : palette.white }
          ]}>{children}</Text>
        )
      ) : <CustomIcon name={icon} isOrange={isOrange} customSize={customIconSize} />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    height: 64,
  },
  text: {
    fontSize: globalStyles.size,
  },
  circle: {
    width: 48,
    height: 48,
    borderRadius: 48,
    backgroundColor: palette.orange,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
  circleText: {
    color: palette.white,
  },
});