import React from "react";
import { View, Text } from 'react-native';
import styles from "./styles";
import LeButton from "../../components/leButton";
import { useNavigation, NavigationProp } from "@react-navigation/core";

const Welcome = () => {
  const Navigation = useNavigation<NavigationProp<any>>();

  return(
    <View style={styles.container}>
      <Text style={{ fontSize: 25, marginBottom: 25 }}>Le`Cole</Text>
      <LeButton title="Login" onPress={() => Navigation.navigate('Login')} />
      <LeButton title="Create Account" onPress={() => Navigation.navigate('SignUp')} />
    </View>
  );
};

export default Welcome;