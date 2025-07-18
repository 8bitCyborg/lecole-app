import React from 'react';
import { View, TouchableOpacity, Text} from 'react-native';
import { Icon } from '@rneui/themed';
import { useSelector } from 'react-redux';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import LeApi from '../../../store/api/leApi';
import styles from '../styles';
import colors from '../../../utils/colors';
import routenames from '../../../navigation/routenames';

const StaffDashboard = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const user = useSelector((state: any) => state?.auth?.user);
  const { data: schoolData } = LeApi.useGetSchoolsQuery<any>(`${user?.schoolId}`,{});
  const { data: sessionData, error: sessionError } = LeApi.useGetSessionsQuery<any>(`${user.schoolId}`, {});
  const activeTerm = sessionData?.[0]?.termsId?.filter((term: any) => term.status === 'active')[0];


  return (
    <View>
      <View style={styles.sectionCard}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={[styles.text, {fontSize: 15 }]}>{schoolData?.name}</Text>
          {/* <Text style={[{textTransform: 'capitalize'}, styles.pill]}>{schoolData?.subscriptionStatus}</Text> */}
        </View>
        <Text style={styles.text}>{sessionData?.[0]?.year} Academic Session</Text>
        <Text style={[styles.text, {textTransform: 'capitalize'}]}>{activeTerm?.name} Term</Text>

        <View style={styles.sectionCardMeta}>
          <Icon 
            name="google-classroom"
            type="material-community"
            color={colors.white}
            size={40}
          />
          <View style={{width: '50%'}}>
            <Text style={styles.text}>Your Class</Text>
            <Text style={[styles.text, { fontSize: 20}]}>{(schoolData as any)?.staff?.length || 0}</Text>
          </View>

          <TouchableOpacity 
            style={styles.sectionCardBtn}
            onPress={() => navigation.navigate(routenames.ClassRoom)}
          >
            <Text style={{ color: colors.black }}>View</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionCardMeta}>
          <Icon 
            name="bookshelf"
            type="material-community"
            color={colors.white}
            size={40}
          />
          <View style={{width: '50%'}}>
            <Text style={styles.text}>Subjects You Teach</Text>
            <Text style={[styles.text, { fontSize: 20}]}>{(schoolData as any)?.staff?.length || 0}</Text>
          </View>

          <TouchableOpacity style={styles.sectionCardBtn}>
            <Text style={{ color: colors.black }}>View</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionCardMeta}>
          <Icon 
            name="school"
            type="material-community"
            color={colors.white}
            size={40}
          />
          <View style={{width: '50%'}}>
            <Text style={styles.text}>Total Student Count</Text>
            <Text style={[styles.text, { fontSize: 20}]}>{(schoolData as any)?.students?.length || 0}</Text>
          </View>

          <TouchableOpacity style={styles.sectionCardBtn}>
            <Text style={{ color: colors.black }}>View</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.sectionCard}>
        <View>
          <Text style={[styles.text, { fontSize: 18 }]}>Attendance</Text>
        </View>
      </View>

      <View style={styles.sectionCard}>
        <View>
          <Text style={[styles.text, { fontSize: 18 }] }>Assessments</Text>
        </View>
      </View>
    </View>
  );
};

export default StaffDashboard;