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
  const navigation = useNavigation<NavigationProp<any>>();
  const user = useSelector((state: any) => state?.auth?.user);
  const { data: schoolData } = LeApi.useGetSchoolsQuery<any>(`${user?.schoolId}`,{});
  const { data: sessionData, error: sessionError } = LeApi.useGetSessionsQuery<any>(`${user.schoolId}`, {});
  const activeTerm = sessionData?.[0]?.termsId?.filter((term: any) => term.status === 'active')[0];

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.sectionCard}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={[styles.text, {fontSize: 15 }]}>{schoolData?.name}</Text>
          <Text style={[{textTransform: 'capitalize'}, styles.pill]}>{schoolData?.subscriptionStatus}</Text>
        </View>
        <Text style={styles.text}>{sessionData?.[0]?.year} Academic Session</Text>
        <Text style={[styles.text, {textTransform: 'capitalize'}]}>{activeTerm?.name} Term</Text>
        <View style={{margin: 5, flexDirection: 'row', justifyContent: "space-between", marginTop: 20 }}>
          <Icon 
            name="school"
            type="material-icon"
            color={colors.white}
            size={40}
          />
          <View style={{width: '50%'}}>
            <Text style={styles.text}>Total Staff Count</Text>
            <Text style={[styles.text, { fontSize: 20}]}>{(schoolData as any)?.staff?.length || 0}</Text>
          </View>

          <TouchableOpacity>
            <Icon
              name="pencil-circle-outline"
              type="material-community"
              color={colors.white}
              size={30}
            />
          </TouchableOpacity>

        </View>

        <View style={{margin: 5, flexDirection: 'row', justifyContent: "space-between", marginTop: 20 }}>
          <Icon 
            name="chalkboard-teacher"
            type="font-awesome-5"
            color={colors.white}
            size={30}
          />
          <View style={{width: '50%'}}>
            <Text style={styles.text}>Total Student Count</Text>
            <Text style={[styles.text, { fontSize: 20}]}>{(schoolData as any)?.students?.length || 0}</Text>
          </View>

          <TouchableOpacity>
            <Icon
              name="pencil-circle-outline"
              type="material-community"
              color={colors.white}
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* <LeActionBtn 
        onPress={() => navigation.navigate(routenames.School)}
        icon_name='school'
      /> */}
    </ScrollView>
  );
};

export default HomeScreen; 