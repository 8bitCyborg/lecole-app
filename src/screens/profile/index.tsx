import React from "react";
import { ScrollView, View, Text } from 'react-native';
import LeButton from "../../components/leButton";
import { useDispatch } from "react-redux";
import { resetAuth } from "../../store/slices/authSlice";
import styles from "./styles";

const ProfileScreen = () => {
  const dispatch = useDispatch();

  return(
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Settings Screen</Text>
      <LeButton title="Logout" onPress={() => dispatch(resetAuth())} btnStyle={styles.logoutBtn} />
    </ScrollView>
  );
};

export default ProfileScreen;
