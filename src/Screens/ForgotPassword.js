import axios from 'axios';
import React, { useState } from 'react';
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
import Config from '../Config/Config';
import { emailValidate } from '../helpers/validations/LoginValidation';
import api from '../Constants/API';
import PostMethode from '../Constants/PostMethode';

const ForgotPassword = props => {
  const [postData] = PostMethode();
  const [error, setError] = useState({
    isEmail: true,
  });
  const [email, setEmail] = useState('');

  const handleBack = async () => {
    props.navigation.navigate('Home');
  }

  const handleClick = async () => {
    const isEmail = emailValidate(email);
    setError({ ...error, isEmail: isEmail });

    const data = {
      email: email,
    };

    await postData(api.RESET_PASSWORD, data)
      .then(async res => {
        if (res.data.status == 200) {
          alert(res?.data?.message);
          setTimeout(() => {
            props.navigation.navigate('Login');
          }, 1500);
        }
      })
      .catch(err => {
        alert(err.message);
      });
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
                <Text style={styles.mainTitle}>Forgot Password</Text>
                <Text style={styles.mainTitleSmall}>
                  Please enter the email you used to sign in.
                </Text>
              </View>
              <View style={styles.loginBoxOuter}>
                <View style={styles.loginBoxInner}>
                  <View style={styles.space50}>
                    <View style={styles.formGroup}>
                      <Text style={styles.formLabel}>Your Email</Text>
                      <TextInput
                        style={styles.formControl}
                        onChangeText={email => setEmail(email)}
                        value={email}
                        placeholder="Write Your Email"
                        placeholderTextColor="#ddd"
                      />
                      {!error.isEmail && (
                        <Text style={[styles.validation]}>
                          Enter Valid Email !!
                        </Text>
                      )}
                    </View>
                  </View>
                  <View style={styles.formGroup}>
                    <TouchableOpacity
                      style={styles.btnDefault}
                      onPress={handleClick}>
                      <Text style={styles.TextStyle}>Reset Password</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            <TouchableOpacity onPress={handleBack}>
              <View style={styles.loginInfoDiv}>
                <Text>Back To </Text>
                <Text style={[styles.bluLink, styles.underLine]}>Login</Text>
              </View>
            </TouchableOpacity>
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
    paddingVertical: 20,
    paddingHorizontal: 20,
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
  subTitle: {
    fontSize: 16,
    color: '#ffffff',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    marginVertical: 20,
    lineHeight: 22,
  },
  loginBoxOuter: {
    width: '100%',
    position: 'relative',
  },
  space50: {
    marginVertical: 40,
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
    marginBottom: 24,
    minWidth: '100%',
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
  btnDefault: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d568f',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 40,
    position: 'relative',
    minWidth: 200,
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
    color: '#ffffff',
    fontFamily: 'Montserrat-Regular',
  },
  loginLink: {
    marginLeft: 6,
  },
  whtLink: {
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'Montserrat-SemiBold',
  },
  phoneContainerStyle: {
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
    paddingVertical: 0,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    minWidth: '100%',
  },
  phoneTextContainerStyle: {
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
    paddingVertical: 0,
    color: '#ffffff',
  },
  phoneTextInputStyle: {
    backgroundColor: 'transparent',
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'Montserrat-Regular',
    height: 40,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  phoneCodeTextStyle: {
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'Montserrat-Regular',
    borderColor: '#ffffff',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  phoneFlagButtonStyle: {
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'Montserrat-Regular',
    borderColor: '#ffffff',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  phoneCountryPickerButtonStyle: {
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'Montserrat-Regular',
    borderColor: '#ffffff',
  },
  bluLink: {
    fontSize: 14,
    color: '#0d568f',
    fontFamily: 'Montserrat-SemiBold',
  },
});

export default ForgotPassword;
