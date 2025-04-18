import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';
import styles from './styles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import routenames from '../../navigation/routenames';
import LeActionBtn from '../../components/leActionBtn';

const SchoolScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>()

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text>School Screen</Text>
      
      <LeActionBtn 
        onPress={() => {}}
        icon_name='book-plus'
      />
    </ScrollView>
  );
};

export default SchoolScreen;