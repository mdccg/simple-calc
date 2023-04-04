import Icon from 'react-native-vector-icons/FontAwesome5';
import { palette } from './palette';
import { globalStyles } from './globalStyles';

export const CustomIcon = ({ name, isOrange, customSize }) => (
  <Icon
    size={customSize || globalStyles.size}
    name={name}
    color={isOrange ? palette.orange : palette.white} />
)