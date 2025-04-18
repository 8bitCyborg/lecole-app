import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Icon } from '@rneui/themed';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import routenames from '../../navigation/routenames';
import LeActionBtn from '../../components/leActionBtn';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>

      <LeActionBtn 
        onPress={() => navigation.navigate(routenames.School)}
        icon_name='school'
      />
    </View>
  );
};

export default HomeScreen; 