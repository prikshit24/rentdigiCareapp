import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import HomeScreen from '../Screens/Home';
import LoginScreen from '../Screens/Login';
import Register from '../Screens/Register';
import ForgotPassword from '../Screens/ForgotPassword';
import Dashboard from '../Screens/Dashboard';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Calendar from '../Screens/ManagerAccount/Calendar';
// import TempToCal from './tempToCal';
const MainStack = createNativeStackNavigator();
function MainStackScreen({ navigation }) {
  navigation.setOptions({ tabBarStyle: { display: 'none' } });
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      {/* <MainStack.Screen
        name="tempToCal"
        component={TempToCal}
        options={{ title: '', gestureEnabled: false }}
      /> */}
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
    </MainStack.Navigator>
  );
}

const Navigation = () => {
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
                <FontAwesome name={'home'} color={'#fff'} size={20} />
              </LinearGradient>
            ),
          }}
        />

        {/* <Drawer.Screen
          name="calendar"
          component={Calendar}
          options={{
            drawerLabel: 'Calendar',
            title: 'Calendar',
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

export default Navigation;
