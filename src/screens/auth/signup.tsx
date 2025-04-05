import React from "react";
import { ScrollView, View, Text, TouchableWithoutFeedback } from "react-native";
import styles from "./styles";
import LeInput from "../../components/leInput";
import LeButton from "../../components/leButton";
import { useNavigation, NavigationProp } from "@react-navigation/core";
import colors from "../../utils/colors";
import routenames from "../../navigation/routenames";

const SignUp = () => {
  const Navigation = useNavigation<NavigationProp<any>>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subHeader}>Create Account</Text>
      <LeInput
        label="First Name" 
        placeholder="John"
      />
      <LeInput
        label="Last Name" 
        placeholder="Doe"
      />
      <LeInput
        label="email" 
        placeholder="Johndoe@email.com"
      />
      <LeInput
        label="Password" 
        secureText={true}
      />
      <LeInput
        label="Confirm Password" 
        secureText={true}
      />
      <LeButton 
        title="Sign Up" 
        onPress={() => {}}
      />

      <View style={styles.footer}>
        <Text>Already have an account?</Text>
        <TouchableWithoutFeedback onPress={() => Navigation.navigate(routenames.Login)}>
          <Text style={{ textAlign: 'center', color: colors.red, marginTop: 5 }}>Login Instead</Text>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
};

export default SignUp;