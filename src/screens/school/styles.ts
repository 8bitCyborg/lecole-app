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
  sectionCard: {
    marginBottom: 20,
    minHeight: Dimensions.get('screen').height * 0.15,
    borderRadius: 20,
    backgroundColor: colors.blue,
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    shadowColor: colors.red,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8, // For Android
  },
  pill: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 1,
    borderRadius: 20,
    color: colors.red,
  },
  text: {
    color: colors.white,
    fontFamily: 'Poppins',
    fontWeight: '700'
  },
  actionBtn: {
    position: 'absolute',
    bottom: Dimensions.get('screen').height * 0.15,
    right: 20,
    height: 50,
    width: 50,
    borderWidth: 10,
    borderRadius: 50,
  },
});

export default styles;