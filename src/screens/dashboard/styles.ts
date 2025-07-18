import { StyleSheet, Dimensions} from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: Dimensions.get('screen').width,
    paddingVertical: Dimensions.get('screen').height * 0.02,
    paddingHorizontal: 10,
  },
  welcomeText: {
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: '500',
    marginLeft: 10,
  },
  sectionCard: {
    minHeight: Dimensions.get('screen').height * 0.12,
    marginVertical: 10,
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
  sectionCardMeta: {
    margin: 5, 
    flexDirection: 'row', 
    justifyContent: "space-between",
    alignItems: 'center',
    marginTop: 20 
  },
  sectionCardBtn: {
    backgroundColor: colors.white,
    height: 25,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
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
  iconStyle: {
    borderWidth: 2,
    borderColor: colors.white,
    padding: 3,
    borderRadius: 20,
  }
});

export default styles;