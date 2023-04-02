import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import LinearGradient from 'react-native-linear-gradient';
import { accessibilityViewIsModal } from 'deprecated-react-native-prop-types/DeprecatedViewPropTypes';

import api from '../Constants/API';
import PostMethode from '../Constants/PostMethode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from "@react-navigation/native";

const CompanyAdd = props => {
  const [postData] = PostMethode();
  // const [deleteData] = DeleteMethode();
  const [isLoading, setLoading] = useState(false);
  const [isPopUp, setPopUp] = useState(false);
  const [message, setMessage] = useState('');
  const [token, setToken] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(async () => {
        try {
          var value = await AsyncStorage.getItem("userData");
          let data = JSON.parse(value);
          if (!data || !data.jwt) {
            props.navigation.navigate("Login");
          }
          // let decode = jwtdecode(data.jwt);
          // setJwtData(decode);
          setToken(data.jwt);
        } catch (error) { }
      });
    }, [props.route])
  );


  const [addCompany, setAddCompany] = useState({
    email: '',
    domain: '',
    ownerLastName: '',
    ownerFirstName: '',
    name: '',
    phone: '',
    city: '',
    state: '',
    address1: '',
    address2: '',
    zip: '',
  });

  const validationSchema = yup.object().shape({
    name: yup.string().required('Company name is required'),
    ownerFirstName: yup.string().required('Owner first name is required'),
    ownerLastName: yup.string().required('Owner last name is required'),
    address1: yup.string().required('address is required'),
    city: yup.string().required('City is required'),
    state: yup.string().required('State is required'),
    zip: yup.string().required('Zip code is required'),
    email: yup.string().email().required('Email is required'),
    phone: yup.string().required('Phone is required').min(10),
    domain: yup.string().required('Domain is required'),
  });

  const handleClick = () => {
    // alert(JSON.stringify(addCompany))
    props.navigation.navigate('company');
  };

  const handleAddCompany = (values) => {
    // alert(JSON.stringify(values))
    var data = values;
    let address = [];
    address.push(values.address1);
    address.push(values.address2);
    data.address = address;
    delete data.address1;
    delete data.address2;
    // alert(JSON.stringify(data))
    setLoading(true)
    postData(`${api.ADD_COMPANY}`, data, token).then((res) => {
      alert(JSON.stringify(res.data))
      if (res.data.status == 200) {
        setLoading(false)
        props.navigation.navigate('company');
      }
    })
      .catch(async (err) => {
        setLoading(false)
        alert(JSON.stringify(err))
      });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <StatusBar translucent backgroundColor="transparent" />
      <View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#0e558d', '#084677']}
          style={styles.mainHeader}>
          <View style={styles.backMenuDiv}>
            <TouchableOpacity style={styles.backBtnDiv} onPress={handleClick}>
              <Image
                source={require('../assets/img/backArrow1.png')}
                style={[styles.arrowBtn, styles.arrowBtnLight]}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.headerTitle}>Add Company</Text>
        </LinearGradient>
      </View>
      <ScrollView contentContainerStyle={styles.outerContainer}>
        <Formik
          initialValues={{
            email: '',
            domain: '',
            ownerLastName: '',
            ownerFirstName: '',
            name: '',
            phone: '',
            city: '',
            state: '',
            address1: '',
            address2: '',
            zip: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => handleAddCompany(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={styles.mainBoxOuter}>
              <View style={styles.fixInfoDiv}>
                <View style={styles.mainBody}>
                  <View>
                    <View style={styles.formOuter}>
                      <View style={{ marginTop: 2 }}>
                        <Text style={[styles.txtInputStyle]}>Company Name*</Text>
                        <View style={{ marginTop: 5 }}>
                          <TextInput
                            style={styles.formControlNew}
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            // onChangeText={value => {
                            //   setAddCompany({
                            //     ...addCompany,
                            //     name: value,
                            //   });
                            // }}
                            value={values.name}
                            placeholder="Enter company name"
                            placeholderTextColor="#707070"
                          />
                          {errors.name && touched.name && <Text style={styles.errorMsg}>{errors.name}</Text>}
                        </View>
                      </View>
                      <View style={{ marginTop: 12 }}>
                        <Text style={[styles.txtInputStyle]}>
                          Owner First Name*
                        </Text>
                        <View style={{ marginTop: 5 }}>
                          <TextInput
                            style={styles.formControlNew}
                            onChangeText={handleChange('ownerFirstName')}
                            onBlur={handleBlur('ownerFirstName')}
                            // onChangeText={value => {
                            //   setAddCompany({
                            //     ...addCompany,
                            //     ownerFirstName: value,
                            //   });
                            // }}
                            value={values.ownerFirstName}
                            placeholder="Enter owner first  name"
                            placeholderTextColor="#707070"
                          />
                          {errors.ownerFirstName && touched.ownerFirstName && <Text style={styles.errorMsg}>{errors.ownerFirstName}</Text>}
                        </View>
                      </View>
                      <View style={{ marginTop: 12 }}>
                        <Text style={[styles.txtInputStyle]}>Owner Last Name*</Text>
                        <View style={{ marginTop: 5 }}>
                          <TextInput
                            style={styles.formControlNew}
                            // onChangeText={value => {
                            //   setAddCompany({
                            //     ...addCompany,
                            //     ownerLastName: value,
                            //   });
                            // }}
                            onChangeText={handleChange('ownerLastName')}
                            onBlur={handleBlur('ownerLastName')}
                            value={values.ownerLastName}
                            placeholder="Enter owner last name"
                            placeholderTextColor="#707070"
                          />
                          {errors.ownerLastName && touched.ownerLastName && <Text style={styles.errorMsg}>{errors.ownerLastName}</Text>}
                        </View>
                      </View>
                      <View style={{ marginTop: 12 }}>
                        <Text style={[styles.txtInputStyle]}>Address1*</Text>
                        <View style={{ marginTop: 5 }}>
                          <TextInput
                            style={styles.formControlNew}
                            // onChangeText={value => {
                            //   setAddCompany({
                            //     ...addCompany,
                            //     address1: value,
                            //   });
                            // }}
                            onChangeText={handleChange('address1')}
                            onBlur={handleBlur('address1')}
                            value={values.address1}
                            placeholder="Enter your address"
                            placeholderTextColor="#707070"
                          />
                          {errors.address1 && touched.address1 && <Text style={styles.errorMsg}>{errors.address1}</Text>}
                        </View>
                      </View>
                      <View style={{ marginTop: 12 }}>
                        <Text style={[styles.txtInputStyle]}>Address2</Text>
                        <View style={{ marginTop: 5 }}>
                          <TextInput
                            style={styles.formControlNew}
                            // onChangeText={value => {
                            //   setAddCompany({
                            //     ...addCompany,
                            //     address2: value,
                            //   });
                            // }}
                            onChangeText={handleChange('address2')}
                            onBlur={handleBlur('address2')}
                            value={values.address2}
                            placeholder="Enter your address"
                            placeholderTextColor="#707070"
                          />
                          {errors.address2 && touched.address2 && <Text style={styles.errorMsg}>{errors.address2}</Text>}
                        </View>
                      </View>
                      <View style={{ marginTop: 12 }}>
                        <Text style={[styles.txtInputStyle]}>City*</Text>
                        <View style={{ marginTop: 5 }}>
                          <TextInput
                            style={styles.formControlNew}
                            // onChangeText={value => {
                            //   setAddCompany({
                            //     ...addCompany,
                            //     city: value,
                            //   });
                            // }}
                            onChangeText={handleChange('city')}
                            onBlur={handleBlur('city')}
                            value={values.city}
                            placeholder="Enter your city"
                            placeholderTextColor="#707070"
                          />
                          {errors.city && touched.city && <Text style={styles.errorMsg}>{errors.city}</Text>}
                        </View>
                      </View>
                      <View style={{ marginTop: 12 }}>
                        <Text style={[styles.txtInputStyle]}>State*</Text>
                        <View style={{ marginTop: 5 }}>
                          <TextInput
                            style={styles.formControlNew}
                            // onChangeText={value => {
                            //   setAddCompany({
                            //     ...addCompany,
                            //     state: value,
                            //   });
                            // }}
                            onChangeText={handleChange('state')}
                            onBlur={handleBlur('state')}
                            value={values.state}
                            placeholder="Enter your state"
                            placeholderTextColor="#707070"
                          />
                          {errors.state && touched.state && <Text style={styles.errorMsg}>{errors.state}</Text>}
                        </View>
                      </View>
                      <View style={{ marginTop: 12 }}>
                        <Text style={[styles.txtInputStyle]}>Zip*</Text>
                        <View style={{ marginTop: 5 }}>
                          <TextInput
                            style={styles.formControlNew}
                            // onChangeText={value => {
                            //   setAddCompany({
                            //     ...addCompany,
                            //     zip: value,
                            //   });
                            // }}
                            onChangeText={handleChange('zip')}
                            onBlur={handleBlur('zip')}
                            value={values.zip}
                            placeholder="Enter your zip"
                            placeholderTextColor="#707070"
                          />
                          {errors.zip && touched.zip && <Text style={styles.errorMsg}>{errors.zip}</Text>}
                        </View>
                      </View>
                      <View style={{ marginTop: 12 }}>
                        <Text style={[styles.txtInputStyle]}>Email*</Text>
                        <View style={{ marginTop: 5 }}>
                          <TextInput
                            style={styles.formControlNew}
                            // onChangeText={value => {
                            //   setAddCompany({
                            //     ...addCompany,
                            //     email: value,
                            //   });
                            // }}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            placeholder="Enter your email address"
                            placeholderTextColor="#707070"
                          />
                          {errors.email && touched.email && <Text style={styles.errorMsg}>{errors.email}</Text>}
                        </View>
                      </View>
                      <View style={{ marginTop: 12 }}>
                        <Text style={[styles.txtInputStyle]}>Phone*</Text>
                        <View style={{ marginTop: 5 }}>
                          <TextInput
                            style={styles.formControlNew}
                            // onChangeText={value => {
                            //   setAddCompany({
                            //     ...addCompany,
                            //     phone: value,
                            //   });
                            // }}
                            onChangeText={handleChange('phone')}
                            onBlur={handleBlur('phone')}
                            value={values.phone}
                            keyboardType='numeric'
                            maxLength={10}
                            placeholder="Enter your phone number"
                            placeholderTextColor="#707070"
                          />
                          {errors.phone && touched.phone && <Text style={styles.errorMsg}>{errors.phone}</Text>}
                        </View>
                      </View>
                      <View style={{ marginTop: 12 }}>
                        <Text style={[styles.txtInputStyle]}>Domain*</Text>
                        <View style={{ marginTop: 5 }}>
                          <TextInput
                            style={styles.formControlNew}
                            // onChangeText={value => {
                            //   setAddCompany({
                            //     ...addCompany,
                            //     domain: value,
                            //   });
                            // }}
                            onChangeText={handleChange('domain')}
                            onBlur={handleBlur('domain')}
                            value={values.domain}
                            placeholder="Enter your domain"
                            placeholderTextColor="#707070"
                          />
                          {errors.domain && touched.domain && <Text style={styles.errorMsg}>{errors.domain}</Text>}
                        </View>
                      </View>
                      <View style={styles.formBtn}>
                        <TouchableOpacity
                          style={styles.btnGradientDiv}
                          onPress={handleSubmit}>
                          <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            colors={['#0e558d', '#084677']}
                            style={[styles.btnDefault, styles.btnFull]}>
                            <Text style={styles.TextStyle}>SUBMIT</Text>
                          </LinearGradient>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  formControlNew: {
    fontSize: 14,
    color: '#434450',
    height: 50,
    borderWidth: 1,
    borderColor: '#b2b2b2',
    paddingBottom: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: 'transparent',
    fontFamily: 'Montserrat-Regular',
    minWidth: '100%',
  },
  txtInputStyle: {
    fontSize: 17,
    color: '#000',
    fontFamily: 'Montserrat-Bold',
  },
  outerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#ffffff',
    position: 'relative',
    minHeight: '100%',
    fontFamily: 'Montserrat-Regular',
  },
  blackText: {
    color: '#000000',
  },
  greyText: {
    fontSize: 16,
    color: '#777777',
  },
  mainBoxOuter: {
    flex: 1,
  },
  mainHeader: {
    backgroundColor: '#970000',
    minWidth: '100%',
    paddingTop: 34,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  backMenuDiv: {
    position: 'absolute',
    left: 16,
    top: 36,
  },
  backBtnDiv: {
    marginRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowBtn: {
    height: 15,
    width: 10,
    marginRight: 12,
  },
  arrowBtn: {
    height: 17,
    width: 12,
  },
  arrowBtnLight: {
    height: 19,
    width: 10,
  },
  sideMenuIcon: {
    height: 20,
    width: 25,
  },
  arrowText: {
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'Montserrat-Regular',
  },
  headerTitle: {
    fontSize: 18,
    color: '#ffffff',
    fontFamily: 'Montserrat-Bold',
  },
  mainBody: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    flex: 1,
  },
  mainTitle: {
    fontSize: 18,
    color: '#ffffff',
    fontFamily: 'Montserrat-SemiBold',
  },
  subTitle: {
    fontSize: 16,
    color: '#ffffff',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
    marginVertical: 20,
    lineHeight: 22,
  },
  centerBox: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  successMedia: {
    marginBottom: 20,
  },
  sucessIcon: {
    width: 200,
    height: 220,
  },
  btnDefault: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#680001',
    borderColor: '#680001',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 40,
    position: 'relative',
    minWidth: 280,
  },
  btnFull: {
    minWidth: '100%',
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
  whtTextColor: {
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'Montserrat-Regular',
  },
  whtTextBoldColor: {
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'Montserrat-Bold',
  },
  loginLink: {
    marginLeft: 6,
  },
  whtLink: {
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'Montserrat-SemiBold',
  },
  customTabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  customTabCol: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  customTabCount: {
    backgroundColor: '#e5e9ec',
    width: 40,
    height: 40,
    paddingVertical: 7,
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Montserrat-Bold',
    borderRadius: 40,
    alignItems: 'center',
    textAlign: 'center',
  },
  customTabCountFill: {
    backgroundColor: '#0e558d',
    color: '#ffffff',
  },
  customTabText: {
    fontSize: 14,
    color: '#000000',
    fontFamily: 'Montserrat-SemiBold',
  },
  formTitleDiv: {
    marginBottom: 16,
    position: 'relative',
    zIndex: 1,
  },
  formTitleText: {
    fontSize: 18,
    color: '#333333',
    fontFamily: 'Montserrat-Bold',
  },
  frmTtlBrdr: {
    backgroundColor: '#0e558d',
    position: 'absolute',
    width: 96,
    height: 5,
    left: 0,
    bottom: 3,
    opacity: 0.24,
    zIndex: -1,
  },
  formGroupDiv: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: -6,
  },
  formGroupDivv: {
    marginBottom: 16,
    marginTop: 16,
  },
  formGroupNew: {
    paddingHorizontal: 6,
    position: 'relative',
    paddingTop: 12,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formGroupSimple: {
    alignItems: 'flex-start',
    paddingTop: 0,
  },
  formLabelNew: {
    fontSize: 14,
    color: '#aaaaaa',
    fontFamily: 'Montserrat-Regular',
    position: 'absolute',
    top: 5,
    left: 24,
    backgroundColor: '#ffffff',
    zIndex: 1,
    paddingHorizontal: 6,
  },
  noAbsolute: {
    position: 'relative',
    paddingHorizontal: 0,
    left: 0,
    top: 0,
  },
  formControlNew: {
    fontSize: 14,
    color: '#434450',
    height: 50,
    borderWidth: 1,
    borderColor: '#b2b2b2',
    paddingBottom: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: 'transparent',
    fontFamily: 'Montserrat-Regular',
    minWidth: '100%',
  },
  inputIcon: {
    position: 'absolute',
    right: 24,
    top: 28,
  },
  formBtn: {
    marginTop: 12,
  },
  disFormDataDiv: {
    flexDirection: 'row',
    marginBottom: 16,
    marginHorizontal: -6,
  },
  disFormData: {
    flexDirection: 'row',
    paddingHorizontal: 6,
    position: 'relative',
    alignItems: 'center',
  },
  disIcon: {
    marginRight: 12,
  },
  disText: {
    fontSize: 14,
    color: '#434450',
    fontFamily: 'Montserrat-Regular',
  },
  fixBtnDiv: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    bottom: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 1,
    shadowOpacity: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerFlex: {
    flex: 1,
    justifyContent: 'center',
  },
  amtTextLabel: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Montserrat-SemiBold',
  },
  amtText: {
    fontSize: 16,
    color: '#990000',
    fontFamily: 'Montserrat-Bold',
  },
  textAreaContainer: {
    borderColor: '#b2b2b2',
    borderWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 4,
    minWidth: '100%',
    borderRadius: 40,
    fontFamily: 'Montserrat-Regular',
  },
  textArea: {
    height: 90,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    color: '#434450',
    fontFamily: 'Montserrat-Regular',
    borderColor: '#b2b2b2',
    paddingBottom: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: 'transparent',
    fontSize: 14,
    borderWidth: 1,
    minWidth: '100%',
  },
  dropGroup: {
    position: 'relative',
  },
  dropArrowBtn: {
    position: 'absolute',
    right: 20,
    top: 20,
    width: 12,
    height: 7,
  },
  dropdownInput: {
    borderColor: '#b2b2b2',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginVertical: 0,
    borderRadius: 8,
    height: 52,
  },
  dropTextStyle: {
    fontSize: 14,
    color: '#434450',
    fontFamily: 'Montserrat-Regular',
    paddingVertical: 15,
    paddingHorizontal: 0,
    marginVertical: 0,
    fontWeight: '600',
    width: '100%',
    height: 52,
  },
  dropdownStyle: {
    backgroundColor: '#ffffff',
    paddingVertical: 0,
    marginVertical: 0,
    borderWidth: 1,
    borderColor: '#b2b2b2',
    borderBottomWidth: 4,
    borderStyle: 'solid',
    borderBottomColor: '#084677',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  dropdownTextStyle: {
    fontSize: 14,
    color: '#434450',
    fontFamily: 'Montserrat-Regular',
    paddingHorizontal: 16,
  },
  dropdownTextHighlightStyle: {
    backgroundColor: '#084677',
    color: '#ffffff',
  },
  uploadIdDiv: {
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'rgba(0,0,0,0.49)',
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
    color: '#222',
    fontFamily: 'Montserrat-Regular',
    marginTop: 12,
  },
  errorMsg: {
    color: '#ff0000'
  }
});

export default CompanyAdd;
