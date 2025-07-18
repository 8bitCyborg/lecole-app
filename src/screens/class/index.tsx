import React from "react";
import { ScrollView, View, Text } from 'react-native';
import styles from "./styles";
import colors from "../../utils/colors";

const ClassRoom = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={{color: colors.black}}>Class</Text>
    </ScrollView>
  );
};

export default ClassRoom;