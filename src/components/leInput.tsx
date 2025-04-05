import React from "react";
import { Text, TextInput, View, StyleSheet, Dimensions } from 'react-native';
import colors from "../utils/colors";

interface InputProps {
  label?: string;
  placeholder?: string;
  secureText?: boolean;
}

const LeInput = ({ label, placeholder, secureText = false }: InputProps ) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
        style={styles.textInput} 
        placeholder={placeholder}
        placeholderTextColor={colors.gray}
        secureTextEntry={secureText}
      />
    </View>
  )
};

export default LeInput;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: Dimensions.get('screen').width * 0.8,
    marginVertical: 20,
  },
  label: {
    marginLeft: 10,
    marginBottom: 5,
  },
  textInput: {
    borderWidth: 1,
    height: 50,
    borderRadius: 20,
    padding: 10,
  },
});