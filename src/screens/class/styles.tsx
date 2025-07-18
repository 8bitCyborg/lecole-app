import { StyleSheet, Dimensions } from "react-native";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    width: Dimensions.get('screen').width,
    paddingVertical: Dimensions.get('screen').height * 0.02,
    paddingHorizontal: 10,
    backgroundColor: colors.white,
  },
});

export default styles;