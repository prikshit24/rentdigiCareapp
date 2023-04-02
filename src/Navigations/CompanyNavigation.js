import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import CustomDrawer from './CustomDrawer';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Dashboard from '../Screens/Dashboard';
import PropertyManager from '../Screens/CompnayAccount/PropertyManager';
import Property from '../Screens/CompnayAccount/Property';
import PropertyLayout from '../Screens/CompnayAccount/PropertyLayout';
import AddLayout from '../Screens/CompnayAccount/AddLayout';
import PropertyAdd from '../Screens/CompnayAccount/PropertyAdd';
import ManagerAdd from '../Screens/CompnayAccount/ManagerAdd';
import RequestType from '../Screens/CompnayAccount/RequestType';
import EmailNotifications from '../Screens/CompnayAccount/EmailNotifications';
import ViewRequest from '../Screens/CompnayAccount/ViewRequest';
import ViewTechnicalStaff from '../Screens/CompnayAccount/ViewTechnicalStaff';
import AddTechnicalStaff from '../Screens/CompnayAccount/AddTechnicalStaff';
import ApproveVendor from '../Screens/CompnayAccount/ApproveVendor';
import ViewVendor from '../Screens/CompnayAccount/ViewVendor';
import AddSpecialities from '../Screens/CompnayAccount/AddSpecialities';
import AddSpecialityForm from '../Screens/CompnayAccount/AddSpecialityForm';
import ViewLeads from '../Screens/CompnayAccount/ViewLeads';
import ResidentApplication from '../Screens/CompnayAccount/ResidentApplication';
import WidgetSetting from '../Screens/CompnayAccount/WidgetSetting';
import HomeScreen from '../Screens/Home';
import LoginScreen from '../Screens/Login';
import Register from '../Screens/Register';
import ForgotPassword from '../Screens/ForgotPassword';
import OnCompanyLogin from './OnCompanyLogin';
import PropertyDetails from '../Screens/CompnayAccount/PropertyDetails';
import EditProperty from '../Screens/CompnayAccount/EditProperty';
import ManagerEdit from '../Screens/CompnayAccount/ManagerEdit';
import PropertyManrDtls from '../Screens/CompnayAccount/PropertyManrDtls';
import CalenderView from '../Screens/CompnayAccount/CalenderView';
import Availability from '../Screens/CompnayAccount/Availability';
import ApproveAppoinment from '../Screens/CompnayAccount/ApproveAppoinment';
import ReasonsTypes from '../Screens/CompnayAccount/ReasonsTypes';
import AddRequestType from '../Screens/CompnayAccount/AddRequestType';
import EditRequestType from '../Screens/CompnayAccount/EditRequestType';
import EditEmailNotifications from '../Screens/CompnayAccount/EditEmailNotifications';
import ViewRequestDtls from '../Screens/CompnayAccount/ViewRequestDtls';
import TicketApprove from '../Screens/CompnayAccount/TicketApprove';
import TicketApproveDtls from '../Screens/CompnayAccount/TicketApproveDtls';
import TechnicalStaffDtls from '../Screens/CompnayAccount/TechnicalStaffDtls';
import EditSpecialities from '../Screens/CompnayAccount/EditSpecialities';
import AddSpeciality from '../Screens/CompnayAccount/AddSpeciality';
import ApproveVendorDtls from '../Screens/CompnayAccount/ApproveVendorDtls';
import ViewVendorDtls from '../Screens/CompnayAccount/ViewVendorDtls';
import AddVendor from '../Screens/CompnayAccount/AddVendor';
import VendorSpeciality from '../Screens/CompnayAccount/VendorSpeciality';
import AddVendorSpeciality from '../Screens/CompnayAccount/AddVendorSpeciality';
import EditVendorSpeciality from '../Screens/CompnayAccount/EditVendorSpeciality';
import LeadsDetails from '../Screens/CompnayAccount/LeadsDetails';
import AddReasonType from '../Screens/CompnayAccount/AddReasonType';
import EditReasonType from '../Screens/CompnayAccount/EditReasonType';
import ApproveAppoinmentDtls from '../Screens/CompnayAccount/ApproveAppoinmentDtls';
import AppoinmentDtls from '../Screens/CompnayAccount/AppoinmentDtls';
import ResidentAppDtl from '../Screens/CompnayAccount/ResidentAppDtl';

const MainStack = createNativeStackNavigator();
function MainStackScreen({ navigation }) {
  navigation.setOptions({ tabBarStyle: { display: 'none' } });
  return (
    <MainStack.Navigator
      initialRouteName="onCompanyLogin"
      screenOptions={{ headerShown: false }}>
      <MainStack.Screen
        name="onCompanyLogin"
        component={OnCompanyLogin}
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
        name="managerEdit"
        component={ManagerEdit}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="addtechnicalstaff"
        component={AddTechnicalStaff}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="Vendoradd"
        component={AddVendor}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="addSpecialityForm"
        component={AddSpecialityForm}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="propertyDetails"
        component={PropertyDetails}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="editProperty"
        component={EditProperty}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="propertyManrDtls"
        component={PropertyManrDtls}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="addRequestType"
        component={AddRequestType}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="editRequestType"
        component={EditRequestType}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="editEmailNotifications"
        component={EditEmailNotifications}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="viewRequestDtls"
        component={ViewRequestDtls}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="ticketApprove"
        component={TicketApprove}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="ticketApprveDtls"
        component={TicketApproveDtls}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="technicalStaffDtls"
        component={TechnicalStaffDtls}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="addTechnicalStaff"
        component={AddTechnicalStaff}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="editSpecialities"
        component={EditSpecialities}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="aadSpeciality"
        component={AddSpeciality}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="approveVendorDtls"
        component={ApproveVendorDtls}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="viewVendorDtls"
        component={ViewVendorDtls}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="addVendorSpeciality"
        component={AddVendorSpeciality}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="editVendorSpeciality"
        component={EditVendorSpeciality}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="leadsDetails"
        component={LeadsDetails}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="addReasonType"
        component={AddReasonType}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="editReasonType"
        component={EditReasonType}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="approveAppoinmentDtls"
        component={ApproveAppoinmentDtls}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="appoinmentDtls"
        component={AppoinmentDtls}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="residentAppDtl"
        component={ResidentAppDtl}
        options={{ title: '' }}
      />
    </MainStack.Navigator>
  );
}

const CompanyNavigation = () => {
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
          name="propertylayout"
          component={PropertyLayout}
          options={{
            drawerLabel: 'Property Layout',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Property Layout',
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
          name="propertymanager"
          component={PropertyManager}
          options={{
            drawerLabel: 'Property Manager',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Property Manager',
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
          name="calenderView"
          component={CalenderView}
          options={{
            drawerLabel: 'Calender View',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Calender View',
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
          name="availability"
          component={Availability}
          options={{
            drawerLabel: 'Availability',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Availability',
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
          name="approveAppoinment"
          component={ApproveAppoinment}
          options={{
            drawerLabel: 'Approve Appoinment',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Approve Appoinment',
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
          name="reasonsTypes"
          component={ReasonsTypes}
          options={{
            drawerLabel: 'Reasons Types',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Reasons Types',
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
          name="requesttype"
          component={RequestType}
          options={{
            drawerLabel: 'Request Type',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Request Type',
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
          name="emailNotification"
          component={EmailNotifications}
          options={{
            drawerLabel: 'Email Notification',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Email Notification',
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
          name="viewRequest"
          component={ViewRequest}
          options={{
            drawerLabel: 'View Request',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'View Request',
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
          name="viewTechnicalStaff"
          component={ViewTechnicalStaff}
          options={{
            drawerLabel: 'View Technical Staff',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'View Technical Staff',
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
          name="addSpecialities"
          component={AddSpecialities}
          options={{
            drawerLabel: 'Add Specialities',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Add Specialities',
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
          name="approveVendor"
          component={ApproveVendor}
          options={{
            drawerLabel: 'Approve Vendor',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Approve Vendor',
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
          name="viewVendor"
          component={ViewVendor}
          options={{
            drawerLabel: 'View Vendor',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'View Vendor',
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
          name="vendorSpecialities"
          component={VendorSpeciality}
          options={{
            drawerLabel: 'Vendor Speciality',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Vendor Speciality',
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
          name="viewleads"
          component={ViewLeads}
          options={{
            drawerLabel: 'View Leads',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'View Leads',
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
          name="widgetSetting"
          component={WidgetSetting}
          options={{
            drawerLabel: 'Widget Settings',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Widget Settings',
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

export default CompanyNavigation;
