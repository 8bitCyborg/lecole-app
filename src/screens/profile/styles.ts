import { StyleSheet, Dimensions } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoutBtn: {
    position: 'absolute',
    bottom: Dimensions.get('screen').height * 0.15,
    width: 60,
    height: 60,
    borderRadius: 50,
    right: 10,
  }

});

export default styles;