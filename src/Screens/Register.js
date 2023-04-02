// import React from 'react';
import React, { useState, useRef } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import PhoneInput from "react-native-phone-number-input";
import {
    Colors
} from 'react-native/Libraries/NewAppScreen';
const Register = (props) => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const [name, onChangeText] = React.useState("");
    const [email, onChangeText1] = React.useState("");
    const [password, onChangeText2] = React.useState("");
    const [confirmPassword, onChangeText3] = React.useState("");
    //const [value, setValue] = useState("");
    //const [valid, setValid] = useState(false);
    //const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef(null);
    const handleClick = () => {
        // props.history.push("/login");
        props.navigation.navigate('Login')
    }

    const handleLogin = () => {
        // props.navigation.navigate('Login');
        props.navigation.navigate('Login')
    }

    return (
        <ScrollView contentContainerStyle={styles.outerContainer}>
            <StatusBar translucent backgroundColor="#0d568f" />
            <ImageBackground style={styles.bgImage} source={require('../assets/img/splashbg.jpg')} >
                <View style={styles.loginOuter}>
                    <View style={styles.loginTextDiv}>
                        <Image source={require('../assets/img/logo-sm.png')} style={styles.mainLogo} />
                        <Text style={styles.mainTitle}>Signup to Get Started</Text>
                    </View>
                    <View style={styles.loginBoxOuter}>
                        <View style={styles.loginBoxInner}>
                            <View style={styles.formGroup}>
                                <Text style={styles.formLabel}>Name</Text>
                                <TextInput
                                    style={styles.formControl}
                                    onChangeText={onChangeText}
                                    value={name}
                                    placeholder=""
                                    placeholderTextColor="#fbfbfb"
                                />
                            </View>
                            <View style={styles.formGroup}>
                                <Text style={styles.formLabel}>Email Address</Text>
                                <TextInput
                                    style={styles.formControl}
                                    onChangeText={onChangeText1}
                                    value={email}
                                    placeholder=""
                                    placeholderTextColor="#fbfbfb"
                                />
                            </View>
                            <View style={styles.formGroup}>
                                <Text style={styles.formLabel}>Phone Number</Text>
                                {/* <TextInput
                  style={styles.formControl}
                  value=""
                  placeholder=""
                  placeholderTextColor = "#fbfbfb"
                /> */}
                                <PhoneInput
                                    ref={phoneInput}
                                    //defaultValue={value}
                                    defaultCode="IND"
                                    layout="second"
                                    //value={value}
                                    flagButtonStyle=""
                                    placeholder="&nbsp;"
                                    placeholderTextColor="#ffffff"
                                    // onChangeText={(text) => {
                                    //   setValue(text);
                                    // }}
                                    // onChangeFormattedText={(text) => {
                                    //   setFormattedValue(text);
                                    // }}
                                    withDarkTheme
                                    //withShadow
                                    //autoFocus
                                    containerStyle={styles.phoneContainerStyle}
                                    textContainerStyle={styles.phoneTextContainerStyle}
                                    textInputStyle={styles.phoneTextInputStyle}
                                    codeTextStyle={styles.phoneCodeTextStyle}
                                    flagButtonStyle={styles.phoneFlagButtonStyle}
                                    countryPickerButtonStyle={styles.phoneCountryPickerButtonStyle}
                                />
                            </View>
                            <View style={styles.formGroup}>
                                <Text style={styles.formLabel}>Password</Text>
                                <View style={styles.formGroupIcon}>
                                    <TextInput
                                        style={[styles.formControl, styles.formControlIcon]}
                                        onChangeText={onChangeText2}
                                        secureTextEntry={true}
                                        value={password}
                                        placeholder=""
                                        placeholderTextColor="#fbfbfb"
                                    />
                                    <Image source={require('../assets/img/showIcon.png')} style={styles.showHideIcon} />
                                </View>
                            </View>
                            <View style={styles.formGroup}>
                                <Text style={styles.formLabel}>Confirm Password</Text>
                                <View style={styles.formGroupIcon}>
                                    <TextInput
                                        style={[styles.formControl, styles.formControlIcon]}
                                        onChangeText={onChangeText3}
                                        secureTextEntry={true}
                                        value={confirmPassword}
                                        placeholder=""
                                        placeholderTextColor="#fbfbfb"
                                    />
                                    <Image source={require('../assets/img/showIcon.png')} style={styles.showHideIcon} />
                                </View>
                            </View>
                            <View style={styles.formGroup}>
                                <TouchableOpacity style={styles.btnDefault} onPress={handleClick}>
                                    <Text style={styles.TextStyle}>Signup</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                    <View style={styles.loginInfoDiv}>
                        <Text>Already have an account</Text>
                        {/* <Link to="Login" underlayColor="#ffffff" style={styles.loginLink}> */}
                        <TouchableOpacity style={styles.loginLink} onPress={handleLogin}>
                            <Text style={[styles.bluLink, styles.underLine]}>Login</Text>
                        </TouchableOpacity>
                        {/* </Link> */}
                    </View>
                </View>
            </ImageBackground>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    outerContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#000000',
        position: "relative",
        minHeight: '100%',
        fontFamily: 'Montserrat-Regular'
    },
    inner: {
        flex: 1
    },
    bgImage: {
        backgroundSize: "cover",
        alignItems: 'center',
        resizeMode: 'cover',
        paddingVertical: 40,
        paddingHorizontal: 24,
        position: 'relative',
        minHeight: '100%',
        zIndex: 1
    },

    loginOuter: {
        position: 'relative',
        minWidth: '100%',
        zIndex: 2
    },
    loginTextDiv: {
        position: "relative",
        textAlign: "center",
        alignItems: 'center',
    },
    mainLogo: {
        width: 200,
        height: 90,
        marginBottom: 10,
    },
    mainTitle: {
        fontSize: 21,
        color: "#221e1f",
        padding: 10,
        fontFamily: 'Montserrat-SemiBold'
    },
    mainTitleSmall: {
        fontSize: 13.5,
        lineHeight: 25,
        color: "#4f4f4f",
        paddingHorizontal: 0,
        fontFamily: 'Montserrat-SemiBold',
        textAlign: "center",
        alignItems: 'center',
    },
    rentLogoTxt: {
        color: "#221e1f",
    },
    loginBoxOuter: {
        width: "100%",
        position: "relative",
    },
    signUpCatBtns: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 25,
    },
    roundBtnDiv: {
        width: '48%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
    },
    roundBtn: {
        width: '100%',
        //backgroundColor: '#680001',
        //borderColor: '#680001',
        paddingVertical: 15,
        paddingHorizontal: 0,
        position: 'relative',
        borderRadius: 40,
        alignItems: 'center',
    },
    formGroup: {
        marginBottom: 16,
        minWidth: '100%',
        position: 'relative',
    },
    formLabel: {
        fontSize: 16,
        color: "#221e1f",
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
    uploadIdDiv: {
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: 'rgba(255,255,255,0.49)',
        borderRadius: 8,
        paddingHorizontal: 14,
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    uploadIdIcon: {
        width: 50,
        height: 47,
    },
    uploadIdTitle: {
        fontSize: 16,
        color: "#ffffff",
        fontFamily: 'Montserrat-Regular',
        marginTop: 12,
    },
    btnDefault: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#0d568f',
        borderRadius: 30,
        paddingVertical: 14,
        paddingHorizontal: 40,
        position: 'relative',
        minWidth: 200,
        marginTop: 15,
    },
    upperCase: {
        textTransform: 'uppercase',

    },
    txtBold: {
        fontWeight: "bold",
    },
    fntMedium: {
        fontSize: 21,
    },
    TextStyle: {
        fontSize: 16,
        color: "#ffffff",
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
        color: "#ffffff",
        fontFamily: 'Montserrat-Regular'
    },
    loginLink: {
        marginLeft: 6,
    },
    whtLink: {
        fontSize: 14,
        color: "#ffffff",
        fontFamily: 'Montserrat-SemiBold'
    },
    ligtLink: {
        fontSize: 14,
        color: "#0e5690",
        fontFamily: 'Montserrat-SemiBold'
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
        color: "#221e1f",
    },
    phoneTextInputStyle: {
        backgroundColor: 'transparent',
        fontSize: 14,
        color: "#000000",
        fontFamily: 'Montserrat-Regular',
        height: 40,
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
    phoneCodeTextStyle: {
        fontSize: 14,
        color: "#000000",
        fontFamily: 'Montserrat-Regular',
        borderColor: '#000000',
        paddingHorizontal: 0,
        paddingVertical: 0,

    },
    phoneFlagButtonStyle: {
        fontSize: 14,
        color: "#000000",
        fontFamily: 'Montserrat-Regular',
        borderColor: '#000000',
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
    phoneCountryPickerButtonStyle: {
        fontSize: 14,
        color: "#000000",
        fontFamily: 'Montserrat-Regular',
        borderColor: '#000000',
    },
    bluLink: {
        fontSize: 14,
        color: "#0d568f",
        fontFamily: 'Montserrat-SemiBold'
    },
});

export default Register;
