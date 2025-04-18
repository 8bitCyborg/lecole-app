import { StyleSheet, Dimensions } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;