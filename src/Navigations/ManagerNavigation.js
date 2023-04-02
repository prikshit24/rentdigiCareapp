import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import CustomDrawer from './CustomDrawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Dashboard from '../Screens/Dashboard';
import AddLayout from '../Screens/CompnayAccount/AddLayout';
import PropertyAdd from '../Screens/CompnayAccount/PropertyAdd';
import ManagerAdd from '../Screens/CompnayAccount/ManagerAdd';
import AddTechnicalStaff from '../Screens/CompnayAccount/AddTechnicalStaff';
import Vendors from '../Screens/ManagerAccount/Vendors';
import AddSpecialityForm from '../Screens/CompnayAccount/AddSpecialityForm';
import ResidentApplication from '../Screens/ManagerAccount/ResidentApplication';
import HomeScreen from '../Screens/Home';
import LoginScreen from '../Screens/Login';
import Register from '../Screens/Register';
import ForgotPassword from '../Screens/ForgotPassword';
import OnManager from './OnManager';
import TechnicalStaff from '../Screens/ManagerAccount/TechnicalStaff';
import Leads from '../Screens/ManagerAccount/Leads';
import MaintenanceRequest from '../Screens/ManagerAccount/MaintenanceRequest';
import Property from '../Screens/ManagerAccount/Property';
import CalendarAvailability from '../Screens/ManagerAccount/CalendarAvailability';
import CalendarAppointment from '../Screens/ManagerAccount/CalendarAppointment';
const MainStack = createNativeStackNavigator();
function MainStackScreen({ navigation }) {
  navigation.setOptions({ tabBarStyle: { display: 'none' } });
  return (
    <MainStack.Navigator
      initialRouteName="onManagerLogin"
      screenOptions={{ headerShown: false }}>
      <MainStack.Screen
        name="onManagerLogin"
        component={OnManager}
        options={{ title: '', gestureEnabled: false }}
      />
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: '', gestureEnabled: false }}
      />
      <MainStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: '', gestureEnabled: false }}
      />
      <MainStack.Screen
        name="register"
        component={Register}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="forgotpassword"
        component={ForgotPassword}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="addlayout"
        component={AddLayout}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="propertyAdd"
        component={PropertyAdd}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="managerAdd"
        component={ManagerAdd}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="addtechnicalstaff"
        component={AddTechnicalStaff}
        options={{ title: '' }}
      />
      {/* <MainStack.Screen
        name="Vendoradd"
        component={VendorCatadd}
        options={{title: ''}}
      /> */}
      <MainStack.Screen
        name="addSpecialityForm"
        component={AddSpecialityForm}
        options={{ title: '' }}
      />
    </MainStack.Navigator>
  );
}

const ManagerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          drawerActiveBackgroundColor: '#fff',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#0b4e83',
          },
          headerTitleStyle: {
            fontSize: 18,
            fontFamily: 'Montserrat-Bold',
          },
          drawerItemStyle: {
            borderBottomWidth: 1,
            borderBottomColor: '#dadde1',
          },
          drawerLabelStyle: {
            marginLeft: -30,
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 15,
          },
        }}>
        <Drawer.Screen
          options={{
            drawerItemStyle: { display: 'none' },
            drawerLabel: () => null,
            title: null,
            drawerIcon: () => null,
            header: () => null,
          }}
          name="dash"
          component={MainStackScreen}
        />
        <Drawer.Screen
          name="dashboard"
          component={Dashboard}
          options={{
            drawerLabel: 'Dashboard',
            title: 'Dashboard',
            drawerIcon: ({ color }) => (
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#0e558d', '#084677']}
                style={[styles.sidebarLinkIcon]}>
                <FontAwesome name={'home'} color={'#fff'} size={20} />
              </LinearGradient>
            ),
          }}
        />
        <Drawer.Screen
          name="property"
          component={Property}
          options={{
            drawerLabel: 'Property',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Property',
            drawerIcon: ({ color }) => (
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#0e558d', '#084677']}
                style={[styles.sidebarLinkIcon]}>
                <FontAwesome name={'home'} color={'#fff'} size={20} />
              </LinearGradient>
            ),
          }}
        />
        <Drawer.Screen
          name="vendors"
          component={Vendors}
          options={{
            drawerLabel: 'Vendors',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Vendors',
            drawerIcon: ({ color }) => (
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#0e558d', '#084677']}
                style={[styles.sidebarLinkIcon]}>
                <FontAwesome name={'home'} color={'#fff'} size={20} />
              </LinearGradient>
            ),
          }}
        />
        <Drawer.Screen
          name="technicalStaff"
          component={TechnicalStaff}
          options={{
            drawerLabel: 'Technical Staff',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Technical Staff',
            drawerIcon: ({ color }) => (
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#0e558d', '#084677']}
                style={[styles.sidebarLinkIcon]}>
                <FontAwesome name={'home'} color={'#fff'} size={20} />
              </LinearGradient>
            ),
          }}
        />
        <Drawer.Screen
          name="residentApplication"
          component={ResidentApplication}
          options={{
            drawerLabel: 'Resident Application',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Resident Application',
            drawerIcon: ({ color }) => (
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#0e558d', '#084677']}
                style={[styles.sidebarLinkIcon]}>
                <FontAwesome name={'home'} color={'#fff'} size={20} />
              </LinearGradient>
            ),
          }}
        />
        <Drawer.Screen
          name="calendarAvailability"
          component={CalendarAvailability}
          options={{
            drawerLabel: 'Calendar Availability',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Calendar Availability',
            drawerIcon: ({ color }) => (
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#0e558d', '#084677']}
                style={[styles.sidebarLinkIcon]}>
                <FontAwesome name={'home'} color={'#fff'} size={20} />
              </LinearGradient>
            ),
          }}
        />
        <Drawer.Screen
          name="calendarAppointment"
          component={CalendarAppointment}
          options={{
            drawerLabel: 'Calendar Appointment',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Calendar Appointment',
            drawerIcon: ({ color }) => (
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#0e558d', '#084677']}
                style={[styles.sidebarLinkIcon]}>
                <FontAwesome name={'home'} color={'#fff'} size={20} />
              </LinearGradient>
            ),
          }}
        />
        <Drawer.Screen
          name="maintenanceRequest"
          component={MaintenanceRequest}
          options={{
            drawerLabel: 'Maintenance Request',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Maintenance Request',
            drawerIcon: ({ color }) => (
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#0e558d', '#084677']}
                style={[styles.sidebarLinkIcon]}>
                <FontAwesome name={'home'} color={'#fff'} size={20} />
              </LinearGradient>
            ),
          }}
        />
        <Drawer.Screen
          name="leads"
          component={Leads}
          options={{
            drawerLabel: 'Leads',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Leads',
            drawerIcon: ({ color }) => (
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#0e558d', '#084677']}
                style={[styles.sidebarLinkIcon]}>
                <FontAwesome name={'home'} color={'#fff'} size={20} />
              </LinearGradient>
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sidebarLinkIcon: {
    width: 40,
    height: 40,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginRight: 5,
  },
  sidebarLinkImg: {
    width: 20,
    height: 20,
  },
});

export default ManagerNavigation;
