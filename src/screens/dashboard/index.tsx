import React from 'react';
import { Text, ScrollView } from 'react-native';
import styles from './styles';
import { useSelector } from 'react-redux';
import AdminDashboard from './dashboards/adminDashboard';
import StaffDashboard from './dashboards/staffDashboard';
import StudentDashboard from './dashboards/studentDashboard';

const Dashboard = () => {
  const user = useSelector((state: any) => state?.auth?.user);
  const role = user?.role;

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.welcomeText}>Welcome, {user.firstName}</Text>

      {role === 'superadmin' && <AdminDashboard />}
      {role === 'staff' && <StaffDashboard />}
      {role === 'student' && <StudentDashboard /> }

    </ScrollView>
  );
};

export default Dashboard; 