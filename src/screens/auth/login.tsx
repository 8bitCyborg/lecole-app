import React from "react";
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from "./styles";
import LeInput from "../../components/leInput";
import LeButton from "../../components/leButton";
import colors from "../../utils/colors";
import { useNavigation, NavigationProp } from "@react-navigation/core";
import routenames from "../../navigation/routenames";
import LeApi from "../../store/api/leApi";

const Login = () => {
  const Navigation = useNavigation<NavigationProp<any>>();
  const [ login, { isLoading, isError } ] = LeApi.useLoginMutation();

  const handleLogin = async () => {
    console.log("login");
    const response = await login({
      email: "test@test.com",
      password: "test"
    });
    console.log('response', response);
  };

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
        onPress={handleLogin}
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