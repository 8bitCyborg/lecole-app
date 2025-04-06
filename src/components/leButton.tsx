import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions, Button } from "react-native";
import colors from "../utils/colors";

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

const LeButton = ({ title, onPress, disabled = false }: ButtonProps) => {
  return (
    <TouchableOpacity 
      style={[
        styles.container,
        disabled && styles.disabled
      ]} 
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[
        styles.title,
        disabled && styles.disabledText
      ]}>{title}</Text>
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
  },
  disabled: {
    backgroundColor: colors.gray,
    borderColor: colors.gray,
  },
  disabledText: {
    color: colors.white,
    opacity: 0.7,
  }
});