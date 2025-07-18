import { StyleSheet, Dimensions } from "react-native";
import colors from "../../utils/colors";
import fonts from "../../utils/fonts";

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    display: 'flex',
  },
  backdrop: {
    height: Dimensions.get('screen').height * 0.2,
    backgroundColor: colors.blue,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  backdropInset: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    width: Dimensions.get('screen').width * 0.9,
    height: Dimensions.get('screen').height * 0.25,
    backgroundColor: colors.white,
    left: Dimensions.get('screen').width * 0.05,
    top: 45,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    borderRadius: 20,
  },
  displayPicture: {
    position: 'absolute',
    width: 100, 
    height: 100,
    backgroundColor: colors.blue,
    top: -45,
    left: 125,
    borderRadius: 120,
    borderWidth: 2,
    borderColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userMeta: {
    marginTop: 65,
    justifyContent: 'center',
    alignItems: 'center'
  },
  metaDetail: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('screen').width * 0.40,
  },
  metaDetailText: {
    color: colors.gray, 
    marginLeft: 5,
    fontFamily: fonts.normal,
  },
  section: {
    width: Dimensions.get('screen').width * 0.7,
    height: Dimensions.get('screen').height * 0.04,
    padding: 5,
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.blue,
    flexDirection: 'row',
    marginTop: 5,
  },
     sectionText: {
     color: colors.black,
     fontFamily: fonts.normal,
   },
   sectionsContainer: {
     marginTop: Dimensions.get('screen').height * 0.15,
     display: 'flex',
     flexDirection: 'column',
     alignSelf: 'center',
     width: Dimensions.get('screen').width,
   },
   footer: {
     marginTop: 30,
     width: Dimensions.get('screen').width * 0.7,
     alignSelf: 'center', 
     alignItems: 'flex-end', 
     flexDirection: 'column'
   }
});

export default styles;