import { StyleSheet, Dimensions} from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtn: {
    position: 'absolute',
    bottom: Dimensions.get('screen').height * 0.15,
    right: 20,
    height: 50,
    width: 50,
    borderWidth: 10,
    borderRadius: 50,
  }
});

export default styles;