import React from 'react';
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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Propertyy from '../Screens/propertyy';
import propertyManager from '../Screens/propertyManager';
import ResidentApplication from '../Screens/ResidentApplication';
import CompanyAdd from '../Screens/companyAdd';
import CompanyDetail from '../Screens/companyDetail';
import companyEdit from '../Screens/companyEdit';
import Dashboard from '../Screens/Dashboard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ResidentDtl from '../Screens/ResidentDtl';
import OnSupAdmin from './OnSupAdmin';
import PropertyDtl from '../Screens/PropertyDtl';
import PropertyManagerDtl from '../Screens/PropertyManagerDTL';

const MainStack = createNativeStackNavigator();
function MainStackScreen({ navigation }) {
  navigation.setOptions({ tabBarStyle: { display: 'none' } });
  return (
    <MainStack.Navigator
      initialRouteName="onSupAdmin"
      screenOptions={{ headerShown: false }}>
      <MainStack.Screen
        name="onSupAdmin"
        component={OnSupAdmin}
        options={{ title: '', gestureEnabled: false }}
      />
      {/* <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: '', gestureEnabled: false }}
      /> */}
      {/* <MainStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: '', gestureEnabled: false }}
      /> */}
      {/* <MainStack.Screen
        name="register"
        component={Register}
        options={{ title: '' }}
      /> */}
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
      <MainStack.Screen
        name="companyDetail"
        component={CompanyDetail}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="companyEdit"
        component={companyEdit}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="propertyDtl"
        component={PropertyDtl}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="propertyManagerDtl"
        component={PropertyManagerDtl}
        options={{ title: '' }}
      />
      <MainStack.Screen
        name="residentDtl"
        component={ResidentDtl}
        options={{ title: '' }}
      />
    </MainStack.Navigator>
  );
}

const SuperAdminNavigation = () => {
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
                <MaterialCommunityIcons
                  name={'view-dashboard'}
                  color={'#fff'}
                  size={20}
                />
              </LinearGradient>
            ),
          }}
        />
        {/* } */}
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
                <MaterialCommunityIcons
                  name={'home-city'}
                  color={'#fff'}
                  size={20}
                />
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
        />
        <Drawer.Screen
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
                <MaterialCommunityIcons
                  name={'application-edit'}
                  color={'#fff'}
                  size={16}
                />
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

export default SuperAdminNavigation;
