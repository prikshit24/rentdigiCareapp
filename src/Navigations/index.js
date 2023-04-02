import React, { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import CustomDrawer from './CustomDrawer';
import HomeScreen from '../Screens/Home';
import LoginScreen from '../Screens/Login';
import Register from '../Screens/Register';
import ForgotPassword from '../Screens/ForgotPassword';
import Company from '../Screens/company';
import buildingArea from '../Screens/buildingArea';
import buildingDtl from '../Screens/buildingDtl';
import buildingAdd from '../Screens/buildingAdd';
import BuildingEdt from '../Screens/buildingEdt'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Propertyy from '../Screens/propertyy'
import PropertyDtl from '../Screens/propertyDtl'
import PropertyEdit from '../Screens/propertyEdit'
import PropertyAdd from '../Screens/propertyAdd'

import ManagerDtl from '../Screens/managerDtl'
import ManagerAdd from '../Screens/managerAdd'
import ManagerEdit from '../Screens/managerEdit'

import Rooms from '../Screens/rooms';
import RoomsDtl from '../Screens/roomsDtl'
import RoomsEdt from '../Screens/roomsEdt'
import RoomsAdd from '../Screens/roomsAdd'

import TaskTypes from '../Screens/taskTypes';
import TaskDtl from '../Screens/taskDtl'
import TaskEdt from '../Screens/taskEdt'
import TaskAdd from '../Screens/taskAdd'

import TaskClass from '../Screens/taskClass';
import TaskdtlClass from '../Screens/taskdtlClass'
import TaskclassEdt from '../Screens/taskclassEdt'
import TaskclassAdd from '../Screens/taskclassAdd'

import propertyManager from '../Screens/propertyManager';
import VendorCat from '../Screens/VendorCat';
import VendorCatadd from '../Screens/VendorCatadd'
import VendorCatdtl from '../Screens/VendorCatdtl'
import VendorCatedt from '../Screens/VendorCatedt'

import Vendor from '../Screens/Vendor';
import Vendoradd from '../Screens/Vendoradd'
import Vendoredit from '../Screens/Vendoredit'
import Vendordtl from '../Screens/Vendordtl'

import Ticket from '../Screens/Ticket';
import Ticketadd from '../Screens/Ticketadd'
import Ticketdetl from '../Screens/Ticketdetl'
import Ticketdetledt from '../Screens/Ticketdetledt'
import Ticketdetlvew from '../Screens/Ticketdetlvew'
import Ticketassg from '../Screens/Ticketassg'

import AssetClass from '../Screens/AssetClass';
import AssetClassdtl from '../Screens/AssetClassdtl'
import AssetClassadd from '../Screens/AssetClassadd'
import AssetClassedit from '../Screens/AssetClassedit'

import ProfileSettings from '../Screens/profileSettings';
import CompanyProfile from '../Screens/companyProfile';
import UserAccount from '../Screens/UserAccount';
import UserAccountdtl from '../Screens/UserAccountdtl'
import UserAccountedt from '../Screens/UserAccountedt'

import ResidentApplication from '../Screens/ResidentApplication';
import CompanyAdd from '../Screens/companyAdd';
import CompanyDetail from '../Screens/companyDetail'
import companyEdit from '../Screens/companyEdit'
import UserAccountadd from '../Screens/UserAccountadd';
import Dashboard from '../Screens/Dashboard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';
// import NewPassword from '../Screens/NewPassword';

const MainStack = createNativeStackNavigator();
function MainStackScreen({ navigation }) {
  navigation.setOptions({ tabBarStyle: { display: 'none' } });
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
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
        name="companyAdd"
        component={CompanyAdd}
        options={{ title: '' }}
      />
      <MainStack.Screen name="UserAccountadd" component={UserAccountadd} options={{ title: '' }} />
      <MainStack.Screen name="UserAccountdtl" component={UserAccountdtl} options={{ title: '' }} />
      <MainStack.Screen name="UserAccountedt" component={UserAccountedt} options={{ title: '' }} />
      <MainStack.Screen name="AssetClassdtl" component={AssetClassdtl} options={{ title: '' }} />
      <MainStack.Screen name="AssetClassadd" component={AssetClassadd} options={{ title: '' }} />
      <MainStack.Screen name="AssetClassedit" component={AssetClassedit} options={{ title: '' }} />
      <MainStack.Screen name="buildingDtl" component={buildingDtl} options={{ title: '' }} />
      <MainStack.Screen name="buildingAdd" component={buildingAdd} options={{ title: '' }} />
      <MainStack.Screen name="buildingEdt" component={BuildingEdt} options={{ title: '' }} />
      <MainStack.Screen name="companyDetail" component={CompanyDetail} options={{ title: '' }} />
      <MainStack.Screen name="companyEdit" component={companyEdit} options={{ title: '' }} />
      <MainStack.Screen name="Vendoradd" component={Vendoradd} options={{ title: '' }} />
      <MainStack.Screen name="Vendoredit" component={Vendoredit} options={{ title: '' }} />
      <MainStack.Screen name="Vendordtl" component={Vendordtl} options={{ title: '' }} />
      <MainStack.Screen name="VendorCatadd" component={VendorCatadd} options={{ title: '' }} />
      <MainStack.Screen name="VendorCatdtl" component={VendorCatdtl} options={{ title: '' }} />
      <MainStack.Screen name="VendorCatedt" component={VendorCatedt} options={{ title: '' }} />
      <MainStack.Screen name="roomsDtl" component={RoomsDtl} options={{ title: '' }} />
      <MainStack.Screen name="roomsEdt" component={RoomsEdt} options={{ title: '' }} />
      <MainStack.Screen name="roomsAdd" component={RoomsAdd} options={{ title: '' }} />
      <MainStack.Screen name="managerDtl" component={ManagerDtl} options={{ title: '' }} />
      <MainStack.Screen name="managerAdd" component={ManagerAdd} options={{ title: '' }} />
      <MainStack.Screen name="managerEdit" component={ManagerEdit} options={{ title: '' }} />
      <MainStack.Screen name="propertyDtl" component={PropertyDtl} options={{ title: '' }} />
      <MainStack.Screen name="propertyEdit" component={PropertyEdit} options={{ title: '' }} />
      <MainStack.Screen name="propertyAdd" component={PropertyAdd} options={{ title: '' }} />
      <MainStack.Screen name="taskDtl" component={TaskDtl} options={{ title: '' }} />
      <MainStack.Screen name="taskEdt" component={TaskEdt} options={{ title: '' }} />
      <MainStack.Screen name="taskAdd" component={TaskAdd} options={{ title: '' }} />
      <MainStack.Screen name="taskdtlClass" component={TaskdtlClass} options={{ title: '' }} />
      <MainStack.Screen name="taskclassEdt" component={TaskclassEdt} options={{ title: '' }} />
      <MainStack.Screen name="taskclassAdd" component={TaskclassAdd} options={{ title: '' }} />
      <MainStack.Screen name="Ticketdetlvew" component={Ticketdetlvew} options={{ title: '' }} />
      <MainStack.Screen name="Ticketadd" component={Ticketadd} options={{ title: '' }} />
      <MainStack.Screen name="Ticketdetl" component={Ticketdetl} options={{ title: '' }} />
      <MainStack.Screen name="Ticketdetledt" component={Ticketdetledt} options={{ title: '' }} />
      <MainStack.Screen name="Ticketassg" component={Ticketassg} options={{ title: '' }} />

      {/* <MainStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} /> */}
      {/* <MainStack.Screen name="register" component={Register} options={{ headerShown: false }} /> */}
      {/* <MainStack.Screen name="forgotpassword" component={ForgotPassword} options={{ headerShown: false }} /> */}
      {/* <MainStack.Screen name="newpassword" component={NewPassword} options={{ headerShown: false }} /> */}
      {/* <MainStack.Screen name="dashboard" component={Dashboard} options={{ headerShown: false }} /> */}
    </MainStack.Navigator>
  );
}

// const Tab = createBottomTabNavigator();
const AppNavigation = () => {

  const [userData, setUserData] = useState(false);
  useEffect(() => {
    // await getData();
    try {
      (async () => {
        let data = await AsyncStorage.getItem('userData');
        let userdata = JSON.parse(data);
        // alert(JSON.stringify(userData.data.role))
        setUserData(userdata);
        // return;
      })()
    } catch (error) {
      console.log('error', error);
      // return;
    }
    return () => {
      console.log();
    }
  }, []);

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
          name="Home"
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
                {/* <FontAwesome
                  name={'home'}
                  color={'#fff'}
                  size={20}
                /> */}
                <FontAwesome name={"home"} color={'#fff'} size={20} />
              </LinearGradient>
            ),
          }}
        />
        <Drawer.Screen
          name="company"
          component={Company}
          options={{
            drawerLabel: 'Companies',
            title: 'Companies',
            drawerIcon: ({ color }) => (
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={['#0e558d', '#084677']}
                style={[styles.sidebarLinkIcon]}>
                {/* <FontAwesome
                  name={'home'}
                  color={'#fff'}
                  size={20}
                /> */}
                <FontAwesome name={"home"} color={'#fff'} size={20} />
              </LinearGradient>
            ),
          }}
        />
        <Drawer.Screen
          name="propertyy"
          component={Propertyy}
          options={{
            drawerLabel: 'Properties',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Properties',
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
        /><Drawer.Screen
          name="propertyManager"
          component={propertyManager}
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
          name="ResidentApplication"
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


        {/* <Drawer.Screen
          name="buildingArea"
          component={buildingArea}
          options={{
            drawerLabel: 'BuildingArea',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'BuildingArea',
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
        /> */}
        {/* <Drawer.Screen
          name="rooms"
          component={Rooms}
          options={{
            drawerLabel: 'Rooms',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Rooms',
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
        /> */}
        {/* <Drawer.Screen
          name="taskTypes"
          component={TaskTypes}
          options={{
            drawerLabel: 'Task Types',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Task Types',
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
        /> */}
        {/* <Drawer.Screen
          name="taskClass"
          component={TaskClass}
          options={{
            drawerLabel: 'Task Class',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Task Class',
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
        /> */}
        {/* <Drawer.Screen
          name="VendorCat"
          component={VendorCat}
          options={{
            drawerLabel: "Vendor's Category",
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: "Vendor's Category",
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
        /> */}
        {/* <Drawer.Screen
          name="Vendor"
          component={Vendor}
          options={{
            drawerLabel: 'Vendor',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Vendor',
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
        /> */}
        {/* <Drawer.Screen
          name="Ticket"
          component={Ticket}
          options={{
            drawerLabel: 'Ticket',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Ticket',
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
        /> */}
        {/* <Drawer.Screen
          name="AssetClass"
          component={AssetClass}
          options={{
            drawerLabel: 'Asset Class',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Asset Class',
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
        /> */}
        {/* <Drawer.Screen
          name="ProfileSettings"
          component={ProfileSettings}
          options={{
            drawerLabel: 'Profile Settings',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Profile Settings',
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
        /> */}
        {/* <Drawer.Screen
          name="CompanyProfile"
          component={CompanyProfile}
          options={{
            drawerLabel: 'Company Profile',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'Company Profile',
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
        /> */}
        {/* <Drawer.Screen
          name="UserAccount"
          component={UserAccount}
          options={{
            drawerLabel: 'User Account',
            style: { fontSize: 18, fontFamily: 'Montserrat-Bold' },
            title: 'User Account',
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
        /> */}
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

export default AppNavigation;
