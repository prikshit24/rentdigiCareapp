// import React from 'react';
import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from "react-native-phone-number-input";

const BasicInfoDriver = (props) => {
  const [name, onChangeText] = React.useState("");
  const [email, onChangeText1] = React.useState("");
  //const [phone, onChangeText2] = React.useState("");
  //const [value, setValue] = useState("");
  //const [valid, setValid] = useState(false);
  //const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);
  const handleClick = () => {
    // props.history.push("/shipmentdetails");
  }

  return (
    <View style={styles.profileFormOuter}>
      <View style={styles.profileForm}>
        <View style={styles.formGroup}>
          <Text style={[styles.formLabelDark, styles.textBold]}>Name</Text>
          <TextInput
            style={styles.formControlDark}
            onChangeText={onChangeText}
            value={name}
            placeholder=""
            placeholderTextColor="#fbfbfb"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={[styles.formLabelDark, styles.textBold]}>Email Address</Text>
          <TextInput
            style={styles.formControlDark}
            onChangeText={onChangeText1}
            value={email}
            placeholder=""
            placeholderTextColor="#fbfbfb"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={[styles.formLabelDark, styles.textBold]}>Phone Number</Text>
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
          <Text style={[styles.formLabelDark, styles.textBold]}>Update Government ID</Text>
          <View style={styles.docuCol}>
            <LinearGradient
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
              colors={['#0e558d', '#084677']}
              style={styles.editBtnDiv}>
              <TouchableOpacity style={styles.editBtn}>
                <Image source={require('../assets/img/edit.png')} style={[styles.editIcon]} />
              </TouchableOpacity>
            </LinearGradient>
            <View style={styles.docuDiv}>
              <Image source={require('../assets/img/pdfIcon.png')} style={[styles.docuMedia]} />
            </View>
          </View>
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
  textBold: {
    fontFamily: 'Montserrat-SemiBold',
  },
  docuCol: {
    backgroundColor: '#ffffff',
    position: 'relative',
    width: 104,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 8,
    shadowOpacity: 1,
    elevation: 6,
    borderRadius: 6,
    padding: 12,
    marginTop: 12,
  },
  editBtnDiv: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 20,
    lineHeight: 20,
    alignItems: 'center',
    paddingVertical: 4,
    right: 4,
    top: 4,
    zIndex: 1,
  },
  editIcon: {
    width: 10,
    height: 10,
  },
  docuDiv: {

  },
  docuMedia: {
    width: 80,
    height: 106,
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


export default BasicInfoDriver;