import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext} from '../../App';

const CustomDrawer = props => {
  const {userRole, setUserRole} = useContext(UserContext);
  const [role, setRole] = useState('');
  useEffect(() => {
    try {
      (async () => {
        let data = await AsyncStorage.getItem('userData');
        let userdata = JSON.parse(data);
        console.log('userdata ccccccccccc--', userdata);
        if (userdata?.data?.jwtInformation) {
          setRole(userdata?.data?.jwtInformation?.role);
        } else {
          setRole(userdata?.data?.role);
        }
      })();
    } catch (error) {
      console.log('error', error);
    }
    return () => {
      console.log();
    };
  }, []);

  const onLogout = async () => {
    await AsyncStorage.removeItem('userData');
    setUserRole('');
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: '#0e558d'}}>
        <View style={[styles.sidebarTopCol]}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#0e558d', '#084677']}
            style={styles.sidebarProOuter}>
            <View style={styles.sidebarProMediaDiv}>
              <Image
                source={require('../assets/img/avatar.png')}
                style={[styles.sidebarProMedia]}
              />
            </View>
            <View>
              <Text style={styles.headerTitle}>Jhone</Text>
            </View>
            <ImageBackground
              style={styles.sidebarProPatt}
              source={require('../assets/img/sidebarPatt.png')}></ImageBackground>
          </LinearGradient>
        </View>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      {role === 'company'&& (
        <View style={{ padding: 20, paddingVertical: 5 }}>
          <TouchableOpacity
            style={{paddingVertical: 15}}
            onPress={() =>
              Linking.openURL('http://sms.rentdigicare.com/admin')
            }>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Feather
                name={'message-square'}
                color={'#000'}
                size={20}
                style={{marginTop: 4}}
              />
              <Text style={[{marginLeft: 5}, styles.sidebarLinkText]}>
                GSK 90 SMS
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )} 
       {role === 'admin'&&  (
        <View style={{ padding: 20, paddingVertical: 5 }}>
          <TouchableOpacity
            style={{paddingVertical: 15}}
            onPress={() =>
              Linking.openURL('http://sms.rentdigicare.com/admin')
            }>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Feather
                name={'message-square'}
                color={'#000'}
                size={20}
                style={{marginTop: 4}}
              />
              <Text style={[{marginLeft: 5}, styles.sidebarLinkText]}>
                RDCare SMS
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}

      <View
        style={{
          padding: 20,
          paddingVertical: 5,
          borderTopWidth: 1,
          borderTopColor: '#ccc',
        }}>
        <TouchableOpacity style={{ paddingVertical: 15 }} onPress={() => onLogout()}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <MaterialCommunityIcons name={'logout'} color={'#000'} size={26} />
            <Text style={[{marginLeft: 5}, styles.sidebarLinkText]}>
              LOG OUT
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 18,
    color: '#ffffff',
    fontFamily: 'Montserrat-Bold',
  },
  marginBottom: {
    marginBottom: 8,
  },
  sidebarProOuter: {
    position: 'relative',
    paddingHorizontal: 18,
    paddingTop: 40,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  sidebarProPatt: {
    position: 'absolute',
    backgroundSize: 'cover',
    alignItems: 'center',
    resizeMode: 'cover',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
    opacity: 0.34,
  },
  sidebarProMediaDiv: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 90,
    marginRight: 16,
  },
  sidebarProMedia: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: 78,
    height: 78,
    borderRadius: 78,
  },
  sidebarLinkText: {
    fontSize: 16,
    color: '#333333',
    fontFamily: 'Montserrat-SemiBold',
  },
});

export default CustomDrawer;
