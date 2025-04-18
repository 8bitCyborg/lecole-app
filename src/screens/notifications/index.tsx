import React from "react";
import { ScrollView, Text } from "react-native";
import styles from "./styles";

const NotificationsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>Notifications</Text>
    </ScrollView>
  );
};

export default NotificationsScreen;