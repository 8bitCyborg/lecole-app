import { StyleSheet, Dimensions} from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    minHeight: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    paddingTop: Dimensions.get('screen').height * 0.1,
    paddingHorizontal: 10,
  },
});

export default styles;