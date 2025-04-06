import React from "react";
import { ScrollView, View, Text, TouchableWithoutFeedback } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./styles";
import LeInput from "../../components/leInput";
import LeButton from "../../components/leButton";
import { useNavigation, NavigationProp } from "@react-navigation/core";
import colors from "../../utils/colors";
import routenames from "../../navigation/routenames";
import LeApi from "../../store/api/leApi";
import { useDispatch } from "react-redux";
import { setAuth } from "../../store/slices/authSlice";

const SignupSchema = Yup.object().shape({
  first_name: Yup.string()
    .min(2, 'First name is too short')
    .required('First name is required'),
  last_name: Yup.string()
    .min(2, 'Last name is too short')
    .required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password'),
});

const SignUp = () => {
  const Navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useDispatch();
  const [ signup, { isLoading, error }] = LeApi.useSignupMutation();

  const handleSubmit = async(values: any) => {
    const response: any = await signup(values);
    if(response.data.status === 200) {
      dispatch(setAuth({
          isLoggedIn: true,
          user: response.data.user,
          access_token: response.data.access_token,
        })
      );
    };
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.subHeader}>Create Account</Text>
      
      <Formik
        initialValues={{
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <LeInput
              label="First Name"
              placeholder="John"
              onChangeText={handleChange('first_name')}
              onBlur={handleBlur('first_name')}
              value={values.first_name}
              error={touched.first_name && errors.first_name}
              iconName="person"
              iconType="material-icon"
            />
            
            <LeInput
              label="Last Name"
              placeholder="Doe"
              onChangeText={handleChange('last_name')}
              onBlur={handleBlur('last_name')}
              value={values.last_name}
              error={touched.last_name && errors.last_name}
              iconName="person"
              iconType="material-icon"
            />
            
            <LeInput
              label="Email"
              placeholder="Johndoe@email.com"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              error={touched.email && errors.email}
              keyboardType="email-address"
              autoCapitalize="none"
              iconName="email"
            />
            
            <LeInput
              label="Password"
              secureText={true}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              error={touched.password && errors.password}
              iconName="account-key"
            />
            
            <LeInput
              label="Confirm Password"
              secureText={true}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              error={touched.confirmPassword && errors.confirmPassword}
              iconName="account-key"
            />
            
            <LeButton
              title={isLoading ? "Signing Up..." : "Sign Up"}
              onPress={() => handleSubmit()}
              disabled={isLoading}
            />
          </View>
        )}
      </Formik>

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