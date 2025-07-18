import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default styles;