import { Dimensions, StyleSheet } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    backgroundColor: colors.white,
    padding:40,
  },
});

export default styles;