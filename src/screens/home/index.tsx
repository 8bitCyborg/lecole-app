import React from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
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
  const { data: schoolData } = LeApi.useGetSchoolsQuery(`${user.schoolId}`,{});

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.sectionCard}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={[styles.text, {fontSize: 15 }]}>Welcome, {user.firstName}</Text>
          <Text style={styles.text}>{moment().format("MMMM Do, YYYY")}</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start', paddingVertical: 10, marginTop: 5 }}>
          <Icon 
            name="feed-person"
            type="octicon"
            size={50}
            color={colors.white}
          />
          <View style={{ flexDirection: 'column', marginLeft: 12 }}>
            <Text style={styles.text}>{user?.email}</Text>
            <Text style={styles.text}>{user?.phone}</Text>
            <Text style={[styles.text, { textTransform: "capitalize"}]}>{user?.role}</Text>
          </View>
        </View>
      </View>

      <View style={styles.sectionCard}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={[styles.text, {fontSize: 15 }]}>{(schoolData as any)?.name}</Text>
          <Text style={[{textTransform: 'capitalize'}, styles.pill]}>{(schoolData as any)?.subscriptionStatus}</Text>
        </View>
        <View style={{margin: 5, flexDirection: 'row', justifyContent: "space-between", marginTop: 20 }}>
          <Icon 
            name="school"
            type="material-icon"
            color={colors.white}
            size={40}
          />
          <View style={{width: '50%'}}>
            <Text style={styles.text}>Total Staff Count</Text>
            <Text style={[styles.text, { fontSize: 20}]}>{(schoolData as any)?.staff.length}</Text>
          </View>

          <Icon
            name="pencil-circle-outline"
            type="material-community"
            color={colors.white}
            size={30}
          />
        
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
            <Text style={[styles.text, { fontSize: 20}]}>{(schoolData as any)?.students.length}</Text>
          </View>

          <Icon
            name="pencil-circle-outline"
            type="material-community"
            color={colors.white}
            size={30}
          />
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