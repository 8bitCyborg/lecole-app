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
import { DrawerLayout } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import colors from '../utils/colors';
import fonts from '../utils/fonts';
import routenames from './routenames';

export const ScreenWrapper = ({ children, title, headerStyle }: { children: React.ReactNode; title?: string, headerStyle?: any }) => {
  const navigation = useNavigation();
  const isNested = navigation.getParent();
  const drawerRef = React.useRef<DrawerLayout>(null);

  return (
    <DrawerLayout
      ref={drawerRef}
      drawerWidth={280}
      drawerPosition='left'
      drawerType='slide'
      drawerBackgroundColor={colors.blue}
      renderNavigationView={() => <DrawerContent navigation={navigation} closeDrawer={() => drawerRef.current?.closeDrawer()} />}
    >
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        <View style={[
          { 
            flexDirection: 'row', 
            alignItems: 'center', 
            paddingHorizontal: 20, 
            paddingTop: 50, 
            paddingBottom: 15,
            backgroundColor: colors.blue
          },
          headerStyle,
        ]}>
          <TouchableOpacity
            onPress={() => drawerRef.current?.openDrawer()}
            style={{ marginRight: 15 }}
          >
            <Icon name="menu" type="material-icon" size={30} color={colors.white} />
          </TouchableOpacity>

          <Text style={{ color: colors.white, fontSize: 20, fontWeight: 'bold' }}>
            {title}
          </Text>
        </View>
        {children}
      </View>
    </DrawerLayout>
  );
};

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
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center',  }}>
          <Icon 
            name="account-circle"
            type="material-icon"
            size={50}
            color={colors.white}
          />
          <View style={{ marginLeft: 15 }}>
            <Text style={{ color: colors.white, fontSize: 18, fontWeight: 'bold', fontFamily: fonts.normal }}>
              {user?.firstName} {user?.lastName}
            </Text>
            <Text style={{ color: colors.white, fontSize: 14, fontFamily: fonts.medium }}>
              {user?.email}
            </Text>
            <Text style={{ color: colors.white, fontSize: 12, textTransform: 'capitalize', fontFamily: fonts.medium }}>
              {user?.role}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.divider}></View>

      {/* Navigation Menu */}
      <View style={{ paddingHorizontal: 20 }}>

        <TouchableOpacity 
          style={styles.drawerItem}
          onPress={() => {
            navigation.navigate(routenames.ClassRoom);
            closeDrawer();
          }}
        >
          <Icon name="google-classroom" type="material-community" size={24} color={colors.white} />
          <Text style={styles.drawerItemText}>Class</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.drawerItem}
          onPress={() => {
            // Navigate to Subjects screen
            closeDrawer();
          }}
        >
          <Icon name="bookshelf" type="material-community" size={24} color={colors.white} />
          <Text style={styles.drawerItemText}>Subjects</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.drawerItem}
          onPress={() => {
            // Navigate to Students screen
            closeDrawer();
          }}
        >
          <Icon name="school" type="material-community" size={24} color={colors.white} />
          <Text style={styles.drawerItemText}>Students</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.drawerItem}
          onPress={() => {
            // Navigate to Assessments screen
            closeDrawer();
          }}
        >
          <Icon name="person" type="material-icon" size={24} color={colors.white} />
          <Text style={styles.drawerItemText}>Assessments</Text>
        </TouchableOpacity>

        {isAdmin &&
          <>
            <TouchableOpacity 
              style={styles.drawerItem}
              onPress={() => {
                // Navigate to Staff screen
                closeDrawer();
              }}
            >
              <Icon name="people" type="material-icon" size={24} color={colors.white} />
              <Text style={styles.drawerItemText}>Staff</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.drawerItem}
              onPress={() => {
                // Navigate to Finances screen
                closeDrawer();
              }}
            >
              <Icon name="money-bill-wave" type="font-awesome-5" size={24} color={colors.white} />
              <Text style={styles.drawerItemText}>Finances</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.drawerItem}
              onPress={() => {
                // Navigate to Events screen
                closeDrawer();
              }}
            >
              <Icon name="event" type="material-icon" size={24} color={colors.white} />
              <Text style={styles.drawerItemText}>Events</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.drawerItem}
              onPress={() => {
                // Navigate to Archives screen
                closeDrawer();
              }}
            >
              <Icon name="archive" type="entypo" size={24} color={colors.white} />
              <Text style={styles.drawerItemText}>Archives</Text>
            </TouchableOpacity>
          </>
        }
      </View>
      
      <View style={styles.divider}></View>

      <View style={{ paddingHorizontal: 20, position: 'absolute', bottom: -90 }}>
        <TouchableOpacity 
          style={styles.drawerItem}
          onPress={() => {
            dispatch(resetAuth())
          }}
        >
          <Icon name="logout" type="simple-line-icon" size={24} color={colors.white} />
          <Text style={styles.drawerItemText}>Logout</Text>
        </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
};

export default DrawerContent;


const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: 1, 
    backgroundColor: colors.white, 
    marginVertical: 20,
  },
  drawerItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingVertical: 15 
  },
  drawerItemText: {
    color: colors.white, 
    fontSize: 16, 
    marginLeft: 15,
    fontFamily: fonts.medium
  },

})