import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions, Button } from "react-native";
import colors from "../utils/colors";

interface ButtonProps {
  title: string;
};

const LeButton = ({ title }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LeButton;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: colors.black,
    width: Dimensions.get('screen').width * 0.5,
    height: 50,
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    color: colors.white,
  }
});