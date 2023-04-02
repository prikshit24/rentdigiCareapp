// import React from 'react';
import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from "react-native-phone-number-input";

const BasicInfo = (props) => {
  const [name, onChangeText] = React.useState("");
  const [email, onChangeText1] = React.useState("");
  //const [phone, onChangeText2] = React.useState("");
  //const [value, setValue] = useState("");
  //const [valid, setValid] = useState(false);
  //const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);
  const handleClick = () => {
    // props.history.push("/shipmentdetails");
    props.navigation.navigate('shipmentdetails');
  }

  return (
    <View style={styles.profileFormOuter}>
      <View style={styles.profileForm}>
        <View style={styles.formGroup}>
          <Text style={styles.formLabelDark}>Name</Text>
          <TextInput
            style={styles.formControlDark}
            onChangeText={onChangeText}
            value={name}
            placeholder=""
            placeholderTextColor="#fbfbfb"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabelDark}>Email Address</Text>
          <TextInput
            style={styles.formControlDark}
            onChangeText={onChangeText1}
            value={email}
            placeholder=""
            placeholderTextColor="#fbfbfb"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabelDark}>Phone Number</Text>
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
          <TouchableOpacity style={styles.btnGradientDiv}>
            <LinearGradient
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
              colors={['#0e558d', '#084677']}
              style={[styles.btnDefault, styles.btnFull]}>
              <Text style={styles.TextStyle}>Submit</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  )

}

const styles = StyleSheet.create({
  formGroup: {
    marginBottom: 16,
    minWidth: '100%',
  },
  formLabelDark: {
    fontSize: 16,
    color: "#aaaaaa",
    fontFamily: 'Montserrat-Regular'
  },
  formControlDark: {
    color: '#434450',
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
  btnDefault: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#680001',
    borderColor: '#680001',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 40,
    position: 'relative',
    minWidth: 280,
  },
  TextStyle: {
    fontSize: 16,
    color: "#ffffff",
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
    color: "#434450",
  },
  phoneTextInputStyle: {
    backgroundColor: 'transparent',
    fontSize: 14,
    color: "#434450",
    fontFamily: 'Montserrat-Regular',
    height: 40,
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  phoneCodeTextStyle: {
    fontSize: 14,
    color: "#434450",
    fontFamily: 'Montserrat-Regular',
    borderColor: '#434450',
    paddingHorizontal: 0,
    paddingVertical: 0,

  },
  phoneFlagButtonStyle: {
    fontSize: 14,
    color: "#434450",
    fontFamily: 'Montserrat-Regular',
    borderColor: '#434450',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  phoneCountryPickerButtonStyle: {
    fontSize: 14,
    color: "#434450",
    fontFamily: 'Montserrat-Regular',
    borderColor: '#434450',
  },
});


export default BasicInfo;