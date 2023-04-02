import axios from 'axios';
import React, { useContext, useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import api from '../Constants/API';
import PostMethode from '../Constants/PostMethode';
import {
  emailValidate,
  validatePassword,
} from '../helpers/validations/LoginValidation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { UserContext } from '../../App';
import { log } from 'react-native-reanimated';

const Login = props => {
  const { userRole, setUserRole } = useContext(UserContext);
  const [postData] = PostMethode();
  const [isPasswordSecure, setIsPasswordSecure] = useState(false);
  const { params } = props.route;
  console.log('params', params);
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState({
    isEmail: true,
    isPassword: true,
  });

  const handleClick = async () => {
    const isEmail = emailValidate(loginInfo.email);
    const isPassword = validatePassword(loginInfo.password);
    setError({ ...error, isEmail: isEmail, isPassword: isPassword });
    let data = {
      email: loginInfo.email,
      password: loginInfo.password,
    };
    let apiPoint =
      params && params.adminLogin ? api.POST_S_LOGIN : api.POST_LOGIN;
    await postData(apiPoint, data)
      .then(async res => {
        if (res.data.status == 200) {
          let data = {
            jwt: res.data.accessToken,
            data: res.data,
          };
          console.log('data to check user', data);
          await AsyncStorage.setItem('userData', JSON.stringify(data));
          if (data?.data?.jwtInformation) {
            setUserRole(data?.data?.jwtInformation?.role)
          } else {
            setUserRole(data?.data?.role)
          }
        }
      })
      .catch(err => {
        alert(err.message);
      });
  };

  const HandleForgotPassword = () => {
    props.navigation.navigate('forgotpassword');
  };

  return (
    <ScrollView contentContainerStyle={styles.outerContainer}>
      <StatusBar translucent backgroundColor="#0d568f" />
      <ImageBackground
        style={styles.bgImage}
        source={require('../assets/img/splashbg.jpg')}>
        <View style={styles.loginOuter}>
          <View style={styles.loginCenterDiv}>
            <View style={styles.loginCenterDiv}>
              <View style={styles.loginTextDiv}>
                <Image
                  source={require('../assets/img/logo-sm.png')}
                  style={styles.mainLogo}
                />
                <Text style={styles.mainTitle}>Login to your account</Text>
              </View>
              <View style={styles.loginBoxOuter}>
                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>Your Email</Text>
                  <TextInput
                    style={styles.formControl}
                    onChangeText={value => {
                      setLoginInfo({
                        ...loginInfo,
                        email: value,
                      });
                    }}
                    value={loginInfo.email}
                    placeholder="Enter your Email Address"
                    placeholderTextColor="#707070"
                  />
                  {!error.isEmail && (
                    <Text style={[styles.validation]}>
                      Enter Valid Email !!
                    </Text>
                  )}
                </View>
                <View style={styles.formGroup}>
                  <Text style={styles.formLabel}>Password</Text>
                  <View style={styles.formGroupIcon}>
                    <TextInput
                      style={[styles.formControl, styles.formControlIcon]}
                      onChangeText={value => {
                        setLoginInfo({
                          ...loginInfo,
                          password: value,
                        });
                      }}
                      value={loginInfo.password}
                      placeholder="Enter Your Password"
                      placeholderTextColor="#707070"
                    />
                    {/* <TouchableOpacity
                        style={{
                          width: '10%',
                          justifyContent: 'flex-end',
                          flexDirection: 'row',
                        }}
                        onPress={() => {
                          setIsPasswordSecure(!isPasswordSecure);
                        }}>
                        <FontAwesome
                          name={isPasswordSecure ? 'eye-slash' : 'eye'}
                          color={'#000'}
                          size={20}
                        />
                      </TouchableOpacity> */}
                  </View>
                  {!error.isPassword && (
                    <Text style={styles.validation}>
                      Must be between 8-25 Characters and should have one
                      Capital Alphabet one Number and one Special Character !!
                    </Text>
                  )}
                </View>
                <View style={styles.formGroup}>
                  <TouchableOpacity
                    onPress={HandleForgotPassword}
                    style={styles.textRight}>
                    <Text style={styles.darkLink}>Forgot your password?</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.formGroup}>
                  <TouchableOpacity
                    style={styles.btnDefault}
                    onPress={handleClick}>
                    <Text style={styles.TextStyle}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* <View style={styles.loginInfoDiv}>
              <Text>Don't have an account?</Text>
              <TouchableOpacity
                onPress={HandleRegister}
                style={styles.loginLink}>
                <Text style={[styles.bluLink, styles.underLine]}>Sign Up</Text>
              </TouchableOpacity>
            </View> */}
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  validation: {
    color: 'red',
  },
  outerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    position: 'relative',
    minHeight: '100%',
    fontFamily: 'Montserrat-Regular',
  },
  inner: {
    flex: 1,
  },
  bgImage: {
    backgroundSize: 'cover',
    alignItems: 'center',
    resizeMode: 'cover',
    paddingVertical: 40,
    paddingHorizontal: 24,
    position: 'relative',
    minHeight: '100%',
    zIndex: 1,
  },

  loginOuter: {
    position: 'relative',
    minWidth: '100%',
    zIndex: 2,
  },
  loginCenterDiv: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  loginTextDiv: {
    position: 'relative',
    textAlign: 'center',
    alignItems: 'center',
  },
  mainLogo: {
    width: 200,
    height: 90,
    marginBottom: 10,
  },
  mainTitle: {
    fontSize: 21,
    color: '#221e1f',
    paddingVertical: 40,
    paddingHorizontal: 30,
    fontFamily: 'Montserrat-SemiBold',
  },
  mainTitleSmall: {
    fontSize: 13.5,
    lineHeight: 25,
    color: '#4f4f4f',
    paddingHorizontal: 0,
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    alignItems: 'center',
  },
  rentLogoTxt: {
    color: '#221e1f',
  },

  blueColor: {
    color: '#0d568f',
  },
  loginBoxOuter: {
    width: '100%',
    position: 'relative',
  },
  loginBoxOuter: {
    width: '100%',
    position: 'relative',
  },
  signUpCatBtns: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  roundBtn: {
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#680001',
    borderColor: '#680001',
    borderRadius: 40,
    paddingVertical: 12,
    paddingHorizontal: 40,
    position: 'relative',
  },
  formGroup: {
    marginBottom: 16,
    minWidth: '100%',
    position: 'relative',
  },
  formLabel: {
    fontSize: 16,
    color: '#221e1f',
    fontFamily: 'Montserrat-SemiBold',
    paddingBottom: 10,
  },
  formControl: {
    color: '#221e1f',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
    fontFamily: 'Montserrat-Regular',
    minWidth: '100%',
  },
  formGroupIcon: {
    position: 'relative',
  },
  formControlIcon: {
    paddingRight: 36,
  },
  showHideIcon: {
    position: 'absolute',
    right: 8,
    top: 10,
    width: 24,
    height: 15,
  },
  btnDefault: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d568f',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 30,
    position: 'relative',
    minWidth: 200,
  },
  upperCase: {
    textTransform: 'uppercase',
  },
  txtBold: {
    fontWeight: 'bold',
  },
  fntMedium: {
    fontSize: 21,
  },

  TextStyle: {
    fontSize: 16,
    color: '#ffffff',
    fontFamily: 'Montserrat-SemiBold',
  },
  textRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginInfoDiv: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  whtTextColor: {
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Montserrat-Regular',
  },
  loginLink: {
    marginLeft: 6,
  },
  darkLink: {
    fontSize: 14,
    color: '#221e1f',
    fontFamily: 'Montserrat-SemiBold',
  },
  bluLink: {
    fontSize: 14,
    color: '#0d568f',
    fontFamily: 'Montserrat-SemiBold',
  },

  phoneContainerStyle: {
    color: '#221e1f',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#fff',
    fontFamily: 'Montserrat-Regular',
    minWidth: '100%',
  },
  phoneTextContainerStyle: {
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
    paddingVertical: 0,
    color: '#221e1f',
  },
  phoneTextInputStyle: {
    backgroundColor: 'transparent',
    fontSize: 14,
    color: '#000000',
    fontFamily: 'Montserrat-Regular',
    height: 40,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  phoneCodeTextStyle: {
    fontSize: 14,
    color: '#000000',
    fontFamily: 'Montserrat-Regular',
    borderColor: '#000000',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  phoneFlagButtonStyle: {
    fontSize: 14,
    color: '#000000',
    fontFamily: 'Montserrat-Regular',
    borderColor: '#000000',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  phoneCountryPickerButtonStyle: {
    fontSize: 14,
    color: '#000000',
    fontFamily: 'Montserrat-Regular',
    borderColor: '#000000',
  },
});

export default Login;
