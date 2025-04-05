import React from "react";
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from "./styles";
import LeInput from "../../components/leInput";
import LeButton from "../../components/leButton";
import colors from "../../utils/colors";
import { useNavigation, NavigationProp } from "@react-navigation/core";
import routenames from "../../navigation/routenames";

const Login = () => {
  const Navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={styles.container}>
      <Text style={styles.subHeader}>Login</Text>
      <LeInput 
        label="Email"
        placeholder="user@email.com"
      />
      <LeInput 
        label="Password"
        placeholder="Password"
        secureText={true}
      />
      <LeButton 
        title="Login"
        onPress={() => {}}
      />

      <View style={styles.footer}>
        <Text>Don't have an account yet?</Text>
        <TouchableWithoutFeedback onPress={() => Navigation.navigate(routenames.SignUp)}>
          <Text style={{ textAlign: 'center', color: colors.red, marginTop: 5 }}>Create an account</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Login;