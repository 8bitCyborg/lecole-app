import React from 'react';
import { 
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Icon } from '@rneui/themed';
import { 
  useSelector, 
  useDispatch 
} from 'react-redux';
import { resetAuth } from '../store/slices/authSlice';
import colors from '../utils/colors';
import routenames from './routenames';

const DrawerContent = ({ navigation, closeDrawer }: { navigation: any; closeDrawer: () => void }) => {
  const user = useSelector((state: any) => state?.auth?.user);
  const isAdmin = user.role == 'superadmin';
  const dispatch = useDispatch();

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.blue }}
      contentContainerStyle={{ paddingBottom: 90 }}
    >
      <View style={{ paddingTop: 50 }}>
      {/* User Profile Section */}
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center',  }}>
          <Icon 
            name="account-circle"
            type="material-icon"
            size={50}
            color={colors.white}
          />
          <View style={{ marginLeft: 15 }}>
            <Text style={{ color: colors.white, fontSize: 18, fontWeight: 'bold' }}>
              {user?.firstName} {user?.lastName}
            </Text>
            <Text style={{ color: colors.white, fontSize: 14 }}>
              {user?.email}
            </Text>
            <Text style={{ color: colors.white, fontSize: 12, textTransform: 'capitalize' }}>
              {user?.role}
            </Text>
          </View>
        </View>
      </View>

      <View style={{ width: '100%', height: 1, backgroundColor: colors.white, marginVertical: 20,}}></View>

      {/* Navigation Menu */}
      <View style={{ paddingHorizontal: 20 }}>
        <TouchableOpacity 
          style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}
          onPress={() => {
            navigation.navigate('Home');
            closeDrawer();
          }}
        >
          <Icon name="google-classroom" type="material-community" size={24} color={colors.white} />
          <Text style={{ color: colors.white, fontSize: 16, marginLeft: 15 }}>Classes</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}
          onPress={() => {
            // Navigate to Subjects screen
            closeDrawer();
          }}
        >
          <Icon name="bookshelf" type="material-community" size={24} color={colors.white} />
          <Text style={{ color: colors.white, fontSize: 16, marginLeft: 15 }}>Subjects</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}
          onPress={() => {
            // Navigate to Students screen
            closeDrawer();
          }}
        >
          <Icon name="school" type="material-community" size={24} color={colors.white} />
          <Text style={{ color: colors.white, fontSize: 16, marginLeft: 15 }}>Students</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}
          onPress={() => {
            // Navigate to Assessments screen
            closeDrawer();
          }}
        >
          <Icon name="person" type="material-icon" size={24} color={colors.white} />
          <Text style={{ color: colors.white, fontSize: 16, marginLeft: 15 }}>Assessments</Text>
        </TouchableOpacity>

        {isAdmin &&
          <>
            <TouchableOpacity 
              style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}
              onPress={() => {
                // Navigate to Staff screen
                closeDrawer();
              }}
            >
              <Icon name="people" type="material-icon" size={24} color={colors.white} />
              <Text style={{ color: colors.white, fontSize: 16, marginLeft: 15 }}>Staff</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}
              onPress={() => {
                // Navigate to Finances screen
                closeDrawer();
              }}
            >
              <Icon name="money-bill-wave" type="font-awesome-5" size={24} color={colors.white} />
              <Text style={{ color: colors.white, fontSize: 16, marginLeft: 15 }}>Finances</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}
              onPress={() => {
                // Navigate to Events screen
                closeDrawer();
              }}
            >
              <Icon name="event" type="material-icon" size={24} color={colors.white} />
              <Text style={{ color: colors.white, fontSize: 16, marginLeft: 15 }}>Events</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}
              onPress={() => {
                // Navigate to Archives screen
                closeDrawer();
              }}
            >
              <Icon name="archive" type="entypo" size={24} color={colors.white} />
              <Text style={{ color: colors.white, fontSize: 16, marginLeft: 15 }}>Archives</Text>
            </TouchableOpacity>
          </>
        }
      </View>
      
      <View style={{ width: '100%', height: 1, backgroundColor: colors.white, marginVertical: 20,}}></View>

      <View style={{ paddingHorizontal: 20, position: 'absolute', bottom: -90 }}>
        <TouchableOpacity 
          style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 15 }}
          onPress={() => {
            dispatch(resetAuth())
          }}
        >
          <Icon name="logout" type="simple-line-icon" size={24} color={colors.white} />
          <Text style={{ color: colors.white, fontSize: 16, marginLeft: 15 }}>Logout</Text>
        </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
};

export default DrawerContent;