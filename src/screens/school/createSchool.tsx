import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Formik } from 'formik';
import LeInput from '../../components/leInput';

const CreateSchoolScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.text}>Create School</Text>
        <Text>Here you can begin the process of setting up your school.</Text>
        <View>
          <Formik
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
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <View>
                <LeInput
                  label='School Name'
                  placeholder='Enter School Name'
                  value={values.schoolName}
                  onChangeText={handleChange('schoolName')}
                  onBlur={handleBlur('schoolName')}
                />
                <LeInput
                  label='School Address'
                  placeholder='Enter School Address'
                  value={values.schoolAddress}
                  onChangeText={handleChange('schoolAddress')}
                  onBlur={handleBlur('schoolAddress')}
                  multiline={true}
                  numberOfLines={50}
                  textAlignVertical='top'
                />
              </View>
            )}
          </Formik>
        </View>
    </ScrollView>
  );
};

export default CreateSchoolScreen;