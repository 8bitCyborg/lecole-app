import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Touchable } from 'react-native';
import styles from './styles';
import { Icon } from '@rneui/themed';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import routenames from '../../navigation/routenames';
import LeActionBtn from '../../components/leActionBtn';
import { useSelector } from 'react-redux';
import moment from 'moment';
import colors from '../../utils/colors';
import LeApi from '../../store/api/leApi';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
    </ScrollView>
  );
};

export default HomeScreen; 