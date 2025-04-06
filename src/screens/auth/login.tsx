import React from "react";
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./styles";
import LeInput from "../../components/leInput";
import LeButton from "../../components/leButton";
import colors from "../../utils/colors";
import { useNavigation, NavigationProp } from "@react-navigation/core";
import routenames from "../../navigation/routenames";
import LeApi from "../../store/api/leApi";
import { setAuth } from "../../store/slices/authSlice";
import { useDispatch } from "react-redux";

const LoginSchema = Yup.object().shape({
  login_id: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required'),
});

const Login = () => {
  const Navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useDispatch();
  const [ login, { isLoading, isError } ] = LeApi.useLoginMutation();

  const handleSubmit = async (values: { login_id: string; password: string }) => {
    try {
      const response: any = await login(values);
      if(response.data.status === 200) {
        dispatch(setAuth({
          isLoggedIn: true,
          user: response.data.user,
          access_token: response.data.access_token,
        }));
      } 
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subHeader}>Login</Text>
      
      <Formik
        initialValues={{
          login_id: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={{ alignItems: 'center' }}>
            <LeInput 
              label="Email"
              placeholder="user@email.com"
              onChangeText={handleChange('login_id')}
              onBlur={handleBlur('login_id')}
              value={values.login_id}
              error={touched.login_id && errors.login_id}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            
            <LeInput 
              label="Password"
              placeholder="Password"
              secureText={true}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              error={touched.password && errors.password}
            />
            
            <LeButton 
              title={isLoading ? "Logging in..." : "Login"}
              onPress={() => handleSubmit()}
              disabled={isLoading}
            />
          </View>
        )}
      </Formik>

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