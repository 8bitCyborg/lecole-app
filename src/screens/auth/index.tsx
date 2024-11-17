import React from "react";
import { ScrollView, Text } from 'react-native';
import styles from "./styles";
import LeInput from "../../components/leInput";
import LeButton from "../../components/leButton";

const Login = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Login</Text>
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
      />
    </ScrollView>
  );
};

export default Login;