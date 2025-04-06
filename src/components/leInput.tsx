import React from "react";
import { Text, TextInput, View, StyleSheet, Dimensions, TextInputProps, TouchableOpacity } from 'react-native';
import colors from "../utils/colors";
import { Icon } from "@rneui/themed";
interface InputProps extends Omit<TextInputProps, 'style'> {
  label?: string;
  placeholder?: string;
  secureText?: boolean;
  error?: string | boolean;
  errorMessage?: string;
  iconType?: string;
  iconName?: string;
  touched?: boolean;
}

const LeInput = ({ 
  label, 
  placeholder, 
  secureText = false,
  error,
  errorMessage,
  iconType = 'material-community',
  iconName = '',
  touched,
  ...props 
}: InputProps ) => {
  const [ maskInput, setMaskInput ] = React.useState<boolean>(secureText);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <Icon 
          type={iconType}
          name={iconName}
          size={25}
          color={colors.black}
          style={styles.icon}
        />
        <TextInput
          style={[
            styles.textInput,
            error && styles.errorInput
          ]} 
          placeholder={placeholder}
          placeholderTextColor={colors.gray}
          secureTextEntry={maskInput}
          {...props}
        />
        {secureText &&
          <TouchableOpacity 
            style={styles.icon} 
            onPress={() => setMaskInput(!maskInput)}
          >
            <Icon 
              type="material-community"
              name={maskInput ? "eye" : "eye-off"}
              size={30}
              color={colors.black}
            />
          </TouchableOpacity>
        }
      </View>
      {error && typeof error === 'string' && (
        <Text style={styles.errorText}>{error}</Text>
      )}
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
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 7,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 20,
  },
  label: {
    marginLeft: 10,
    marginBottom: 5,
  },
  textInput: {
    height: 45,
    borderRadius: 20,
    padding: 10,
    borderColor: colors.gray,
    width: Dimensions.get('screen').width * 0.64,
  },
  icon: {
    justifyContent: 'center',
    height: 'auto',
    width: 'auto',
  },
  errorInput: {
    borderColor: colors.red,
  },
  errorText: {
    color: colors.red,
    fontSize: 12,
    marginTop: 5,
    marginLeft: 10,
  },
});