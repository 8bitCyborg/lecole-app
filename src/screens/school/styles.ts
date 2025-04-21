import { StyleSheet, Dimensions } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    minHeight: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    display: 'flex',
    paddingVertical: Dimensions.get('screen').height * 0.12,
    paddingHorizontal: 20,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.blue,
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
  jumbo: {
    minHeight: Dimensions.get('screen').height * 0.15,
    width: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: colors.blue,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  rowItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '48%',
    borderWidth: 1,
    borderColor: colors.blue,
    minHeight: Dimensions.get('screen').height * 0.2,
    borderRadius: 20,
  }
});

export default styles;