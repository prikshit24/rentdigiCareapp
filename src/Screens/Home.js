// import React from 'react';
import React, { useState, useRef, useEffect } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = props => {
  const [adminLogin, setAdminLogin] = useState(false);

  useEffect(() => {
    // redirectToIntroScreen();
    //
    setTimeout(async () => {
      try {
        var value = await AsyncStorage.getItem("userData");
        let data = JSON.parse(value);
        if (!data || !data.jwt) {
          props.navigation.navigate("Home");
          // props.navigation.navigate("ProfileSetup");

        } else {
          props.navigation.navigate("company");
        }
      } catch (error) { }
    });
  }, []);

  const handleClick = () => {
    props.navigation.navigate('Login', { adminLogin: adminLogin });
    // props.history.push("/dashboard");
  };

  const HandleRegister = () => {
    setAdminLogin(!adminLogin);
    // props.navigation.navigate('register');
  };

  return (
    <ScrollView contentContainerStyle={styles.outerContainer}>
      <StatusBar translucent backgroundColor="transparent" />
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
                <Text style={styles.mainTitleSmall}>
                  It is a long established fact that a reader will be distracted
                  by the readable content
                  <Text style={styles.rentLogoTxt}>
                    {' '}
                    <Text style={styles.blueColor}>Rent Digi Care</Text>
                  </Text>{' '}
                  will help you on your journey!
                </Text>
              </View>
              <View>
                {!adminLogin ? (
                  <View style={styles.formGroup}>
                    <TouchableOpacity
                      style={styles.btnDefault}
                      onPress={() => handleClick()}>
                      <Text
                        style={[
                          styles.TextStyle,
                          styles.upperCase,
                          styles.txtBold,
                          styles.fntMedium,
                        ]}>
                        Login
                      </Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <View style={styles.formGroup}>
                    <TouchableOpacity
                      style={styles.btnDefault}
                      onPress={() => handleClick()}>
                      <Text
                        style={[
                          styles.TextStyle,
                          styles.upperCase,
                          styles.txtBold,
                          styles.fntMedium,
                        ]}>
                        Super Admin Login
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
            <View style={styles.loginInfoDiv}>
              <Text style={{ color: '#888' }}>{adminLogin && "Don't have "}Administrator Account?</Text>
              <TouchableOpacity
                style={styles.loginLink}
                onPress={HandleRegister}>
                <Text style={[styles.bluLink, styles.underLine]} >Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
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
    paddingTop: 0,
    paddingBottom: 30,
    paddingHorizontal: 20,
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
    marginBottom: 70,
  },
  mainLogo: {
    width: 87,
    height: 93,
    marginBottom: 30,
    marginTop: -120,
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
  signUpCatBtns: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  roundBtnDiv: {
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
  roundBtn: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 40,
    position: 'relative',
    borderRadius: 40,
    alignItems: 'center',
  },
  formGroup: {
    marginBottom: 16,
    minWidth: '100%',
    position: 'relative',
  },
  formControl: {
    color: '#fbfbfb',
    height: 40,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    paddingBottom: 12,
    paddingHorizontal: 0,
    borderRadius: 0,
    backgroundColor: 'transparent',
    fontFamily: 'Montserrat-Regular',
    minWidth: '100%',
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
    paddingVertical: 10,
    paddingHorizontal: 40,
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
    fontSize: 17,
  },

  TextStyle: {
    fontSize: 11,
    color: '#ffffff',
    fontFamily: 'Montserrat-SemiBold',
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
  bluLink: {
    fontSize: 14,
    color: '#0d568f',
    fontFamily: 'Montserrat-SemiBold',
  },
  mainLogo: {
    width: 200,
    height: 90,
    marginBottom: 10,
  },
});

export default Home;
