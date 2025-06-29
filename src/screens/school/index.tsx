import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { Icon } from '@rneui/themed';
import styles from './styles';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import routenames from '../../navigation/routenames';
import LeActionBtn from '../../components/leActionBtn';
import LeModal from '../../components/leModal';
import { Formik } from 'formik';
import LeInput from '../../components/leInput';
import LeButton from '../../components/leButton';
import colors from '../../utils/colors';

const SchoolScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <TouchableOpacity style={styles.jumbo} onPress={() => navigation.navigate(routenames.CreateSchool)}>
        <Text style={styles.text}>You have not set up a school yet...</Text>
        <Text style={styles.text}>Tap here to begin setting up your school.</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 30 }}>
        <View style={styles.row}>
          <View style={styles.rowItem}>
            <Icon
              name="groups"
              size={50}
              color={colors.blue}
            />
          </View>
          <View style={styles.rowItem}>
            <Icon
              name='piechart'
              type="antdesign"
              size={50}
              color={colors.blue}
            />
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.rowItem}>
            <Icon
              name="barchart"
              type="antdesign"
              size={50}
              color={colors.blue}
            />
          </View>
          <View style={styles.rowItem}>
            <Icon
              name="finance"
              type="material-community"
              size={50}
              color={colors.blue}
            />
          </View>
        </View>
      </View>
      
      {/* <LeActionBtn 
        onPress={() => {setIsModalVisible(true)}}
        icon_name='book-plus'
      /> */}

      {/* <LeModal 
        hideModal={() => {setIsModalVisible(false)}}
        isVisible={isModalVisible}
        modalTitle='Set Up Your School'
        childrenContainerStyle={{minHeight: Dimensions.get('screen').height *0.85}}
      >
        <Text>Fill the form below to begin setting up your school.</Text> */}
        {/* <Formik
          initialValues={{
            schoolName: '',
            schoolType: '',
            schoolAddress: '',
            schoolPhone: '',
            schoolEmail: '',
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              <LeInput
                placeholder='Enter School Name'
                value={values.schoolName}
                onChangeText={handleChange('schoolName')}
                onBlur={handleBlur('schoolName')}
                label='School Name'
              />
              <LeInput
                placeholder='Enter School Type'
                value={values.schoolType}
                onChangeText={handleChange('schoolType')}
                onBlur={handleBlur('schoolType')}
                label='School Type'
              />
              <LeInput
                placeholder='Enter School Type'
                value={values.schoolType}
                onChangeText={handleChange('schoolType')}
                onBlur={handleBlur('schoolType')}
                label='School Type'
              />
              <LeInput
                placeholder='Enter School Type'
                value={values.schoolType}
                onChangeText={handleChange('schoolType')}
                onBlur={handleBlur('schoolType')}
                label='School Type'
              />
              <LeInput
                placeholder='Enter School Address'
                value={values.schoolAddress}
                onChangeText={handleChange('schoolAddress')}
                onBlur={handleBlur('schoolAddress')}
                label='School Address'
              /> 
              <LeInput
                placeholder='Enter School Phone'
                value={values.schoolPhone}
                onChangeText={handleChange('schoolPhone')}
                onBlur={handleBlur('schoolPhone')}
                label='School Phone'
                keyboardType='phone-pad'
                keyboardAppearance='dark'
              />
              <LeInput
                placeholder='Enter School Email'
                value={values.schoolEmail}
                onChangeText={handleChange('schoolEmail')}
                onBlur={handleBlur('schoolEmail')}
                label='School Email'
                keyboardType='email-address'
              />
              <LeButton
                title='Save'
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik> */}
      {/* </LeModal> */}
    </ScrollView>
  );
};

export default SchoolScreen;

// const modalStyles = StyleSheet.create({
//   modalContent: {
//     minHeight: Dimensions.get('screen').height * 0.85,
//   },
// });