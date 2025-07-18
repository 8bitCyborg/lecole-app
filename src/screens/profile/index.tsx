import React from "react";
import { 
  ScrollView, 
  View, 
  Text, 
  Dimensions, 
  TouchableOpacity 
} from 'react-native';
import LeButton from "../../components/leButton";
import { useDispatch, useSelector } from "react-redux";
import { resetAuth } from "../../store/slices/authSlice";
import styles from "./styles";
import { Icon } from "@rneui/themed";
import colors from "../../utils/colors";
import moment from "moment";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state?.auth?.user);

  return(
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.backdrop}>
        <View style={styles.backdropInset}>

          <View style={styles.displayPicture}>
            <Icon
              name='person'
              type='material-icon'
              size={70}
              color={colors.white}
            />
          </View>

          <View style={styles.userMeta}>
            <Text style={{ color: colors.blue, fontSize: 25, }}>{user?.firstName} {user?.lastName}</Text>
            <View style={styles.metaDetail}>
              <Icon 
                name="email"
                type="material-icon"
                size={15}
                color={colors.gray}
              />
              <Text style={{color: colors.gray, marginLeft: 5}}>{user?.email}</Text>
            </View>
            <View style={styles.metaDetail}>
              <Icon 
                name="phone"
                type="material-icon"
                size={15}
                color={colors.gray}
              />
              <Text style={{color: colors.gray, marginLeft: 5}}>{user?.phone}</Text>
            </View>
            <View style={styles.metaDetail}>
              <Icon 
                name="person"
                type="material-icon"
                size={15}
                color={colors.gray}
              />
              <Text style={{color: colors.gray, textTransform: 'capitalize', marginLeft: 5}}>{user?.role}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.sectionsContainer}>
        {/* <TouchableOpacity style={styles.section}>
          <Text>Biometrics</Text>
        </TouchableOpacity> */}
        <TouchableOpacity 
          style={styles.section}
          activeOpacity={0.7}
          onPress={() => console.log('About Us pressed')}
        >
          <Text style={styles.sectionText}>About Us</Text>
          <Icon
            name="arrow-right"
            type="material-community"
            size={15}
            color={colors.blue}
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.section}
          activeOpacity={0.7}
          onPress={() => console.log('Privacy Policy pressed')}
        >
          <Text style={styles.sectionText}>Privacy Policy</Text>
          <Icon
            name="arrow-right"
            type="material-community"
            size={15}
            color={colors.blue}
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.section}
          activeOpacity={0.7}
          onPress={() => console.log('Terms pressed')}
        >
          <Text style={styles.sectionText}>Terms and Conditions</Text>
          <Icon
            name="arrow-right"
            type="material-community"
            size={15}
            color={colors.blue}
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.section}
          activeOpacity={0.7}
          onPress={() => console.log('FAQ pressed')}
        >
          <Text style={styles.sectionText}>Frequently Asked Questions</Text>
          <Icon
            name="arrow-right"
            type="material-community"
            size={15}
            color={colors.blue}
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.section}
          activeOpacity={0.7}
          onPress={() => console.log('Help pressed')}
        >
          <Text style={styles.sectionText}>Help and Support</Text>
          <Icon
            name="arrow-right"
            type="material-community"
            size={15}
            color={colors.blue}
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.section}
          activeOpacity={0.7}
          onPress={() => console.log('Reset Password pressed')}
        >
          <Text style={styles.sectionText}>Reset Password</Text>
          <Icon
            name="arrow-right"
            type="material-community"
            size={15}
            color={colors.blue}
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.section}
          activeOpacity={0.7}
          onPress={() => dispatch(resetAuth())}
        >
          <Text style={styles.sectionText}>Logout</Text>
          <Icon
            name="arrow-right"
            type="material-community"
            size={15}
            color={colors.blue}
          />
        </TouchableOpacity>
      
        <View style={styles.footer}>
          <Text>&copy;{moment().format('MMMM Do, YYYY')}</Text>
          <Text>All rights reserved</Text>
        </View>
      </View>

    </ScrollView>
  );
};

export default ProfileScreen;
