import React, {useState, useEffect, createContext} from 'react';
import {StyleSheet} from 'react-native';
import CompanyNavigation from './src/Navigations/CompanyNavigation';
import SuperAdminNavigation from './src/Navigations/SuperAdminNavigation';
import 'react-native-gesture-handler';
import {NativeRouter} from 'react-router-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navigation from './src/Navigations/Navigation';
import ManagerNavigation from './src/Navigations/ManagerNavigation';
import TechnicalStaffNavigation from './src/Navigations/TechnicalStaffNavigation';
import VendorNavigation from './src/Navigations/VendorNavigation';
export const UserContext = createContext({});

const App = () => {
  const [userRole, setUserRole] = useState('');
  // const [userdata, setUserdata] = useState();
  console.log("userRole", userRole);

  useEffect(() => {
    try {
      (async () => {
        let data = await AsyncStorage.getItem('userData');
        const userdata = JSON.parse(data);
        // alert(1)
        if (userdata?.data?.jwtInformation) {
          setUserRole(userdata?.data?.jwtInformation?.role);
        } else {
          setUserRole(userdata?.data?.role);
        }
      })();
    } catch (error) {
      console.log('error', error);
    }
    return () => {
      console.log();
    };
  }, []);

  return (
    <>
      <UserContext.Provider value={{userRole, setUserRole}}>
        <GestureHandlerRootView style={{flex: 1}}>
          <NativeRouter>
            {userRole === 'manager' ? (
              <ManagerNavigation />
            ) : userRole === 'company' ? (
              <CompanyNavigation />
            ) : userRole === 'admin' ? (
              <SuperAdminNavigation />
            ) : userRole === 'technical staff' ? (
              <TechnicalStaffNavigation />
            ) : userRole === 'vendor' ? (
              <VendorNavigation/>
            ) : (
              <Navigation />
            )}
          </NativeRouter>
        </GestureHandlerRootView>
      </UserContext.Provider>
    </>
  );
};
const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 0,
    backgroundColor: '#00B4D8',
  },
});

export default App;
