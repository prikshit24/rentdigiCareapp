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
import axios from "axios";
import LinearGradient from 'react-native-linear-gradient';
import { Dropdown } from 'react-native-element-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Formik } from 'formik';
import * as yup from 'yup';
import { launchImageLibrary } from 'react-native-image-picker';

import jwtdecode from 'jwt-decode';
import api from '../../Constants/API';
import PostMethode from '../../Constants/PostMethode';
import DeleteMethode from "../../Constants/DeleteMethode";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from "@react-navigation/native";
import Loading from "../Loading/index";
import PopUp from "../Popup/index";

const data = [
  { label: 'Active', value: 'Active' },
  { label: 'In-active', value: 'Inactive' }
];
const PropertyAdd = props => {
  const validationSchema = yup.object().shape({
    name: yup.string().required('Property Name is required!'),
    layout: yup.string().required('Please select a Layout!'),
    city: yup.string().required('City required!'),
    status: yup.string().required('Please select a Status!'),
    rent: yup.string().required('Rent is required!'),
  });

  const [postData] = PostMethode();
  const [deleteData] = DeleteMethode();
  const [isLoading, setLoading] = useState(false);
  const [isPopUp, setPopUp] = useState(false);
  const [message, setMessage] = useState('');
  const [token, setToken] = useState(null);
  const [jwtData, setJwtData] = useState(false);

  const [layoutData, setLayoutData] = useState([]);
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [totalCount, setTotalCount] = useState(0)
  const [selectedFiles, setSelectedFiles] = useState([]);



  useFocusEffect(
    React.useCallback(() => {
      setTimeout(async () => {
        try {
          var value = await AsyncStorage.getItem("userData");
          let data = JSON.parse(value);
          if (!data || !data.jwt) {
            props.navigation.navigate("Login");
          }
          let decode = jwtdecode(data.jwt);
          // alert(JSON.stringify(decode))
          setJwtData(decode);
          setToken(data.jwt);
          setLayoutData([]);
          setPage(1);
          setLimit(10);
          getLatout(data.jwt);
          setLoading(false);
        } catch (error) { }
      });
    }, [props.route])
  );

  const getLatout = async (jwt) => {
    let filterDate = { companyID: jwtData.id };
    // alert(JSON.stringify(jwt))
    setLoading(true)
    // alert(`${api.GET_LAYOUT}`)
    postData(`${api.GET_LAYOUT}`, filterDate, jwt).then((res) => {
      // alert(JSON.stringify(res.data.layouts))
      if (res.data.status == 200) {
        let data = res.data.layouts;
        let layouts = [];
        data.map((e) => layouts.push({ label: e.layoutName, value: e._id }))
        setLayoutData(layouts);
        setLoading(false);
        setTotalCount(res.data.total)
      }
    })
      .catch(async (err) => {
        setLoading(false)
        // alert(JSON.stringify(err))
      });
  };

  const handleAddCompany = (values) => {
    let layout = [];
    layout.push(values.layout);
    const owner = [jwtData.firstname, jwtData.lastname].join(" ");

    let data = {
      title: values.name,
      companyID: jwtData.id,
      company: jwtData.company,
      companyDomain: jwtData.domain,
      category: layout,
      owner: owner,
      location: values.city,
      status: values.status,
      manager: [],
      documents: [],
      rent: values.rent
    }
    setLoading(true)
    postData(`${api.PROPERTY_ADD}`, data, token).then((res) => {
      // alert(JSON.stringify(res.data))
      if (res.data.status == 201) {
        // alert(res.data.id)
        uploadDoc(res.data.id);
        // setLoading(false);
        // setTotalCount(res.data.total)
      }
    })
      .catch(async (err) => {
        setLoading(false)
        alert(JSON.stringify(err))
      });
    // props.navigation.navigate('property');
  };

  const uploadDoc = async (val) => {
    const formData = new FormData();
    var i = 0;
    while (i < selectedFiles.length) {
      formData.append(`file`, selectedFiles[i]);
      i++;
    }
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        id: `${val}`,
      },
    };
    try {
      const response = await axios.post(
        `${api.UPLOAD_DOC}`,
        // "/property/upload-documents",
        formData,
        config
      );
      // alert(JSON.stringify(response.data))
      setLoading(false);
      props.navigation.navigate('property');
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const handleClick = () => {
    props.navigation.navigate('property');
  }


  const handleUpload = async () => {
    setLoading(true)
    const form = new FormData();
    let options = {
      // mediaType: 'photo',
    };
    await launchImageLibrary(options, async (response) => {
      if (response.didCancel) {
        // alert('Cancelled image Selection');
      } else if (response.errorCode == 'permission') {
        alert("permission not satisfied");
        // alert('permission not satisfied');
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        // alert(response.errorMessage);
      }
      else {
        const { assets } = response;
        const newFile = assets[0];
        setSelectedFiles([...selectedFiles, newFile]);
        setLoading(false)
      }
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
              <Ionicons name={'chevron-back-sharp'} color={'#fff'} size={30} />
            </TouchableOpacity>
          </View>
          <Text style={styles.headerTitle}>Add Property</Text>
        </LinearGradient>
      </View>
      <ScrollView contentContainerStyle={styles.outerContainer}>
        <Formik
          initialValues={{
            name: '',
            layout: '',
            city: '',
            status: '',
            rent: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            // alert(JSON.stringify(values))
            handleAddCompany(values)
          }
          }
        >
          {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors, touched }) => (
            <View style={styles.mainBoxOuter}>
              <View style={styles.fixInfoDiv}>
                <View style={styles.mainBody}>
                  <View>
                    <View style={styles.formOuter}>
                      <View style={{ marginTop: 2 }}>
                        <Text style={[styles.txtInputStyle]}>Property Name*</Text>
                        <View style={{ marginTop: 10 }}>
                          <TextInput
                            style={styles.formControlNew}
                            // onChangeText={value => {
                            //   setAddProperty({
                            //     ...addProperty,
                            //     propertyName: value,
                            //   });
                            // }}
                            // value={addProperty.propertyName}
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                            placeholder="Enter property name"
                            placeholderTextColor="#707070"
                          />
                          {errors.name && touched.name && <Text style={styles.errorMsg}>{errors.name}</Text>}
                        </View>
                      </View>
                      <View style={{ marginTop: 10 }}>
                        <Text style={styles.filtertxtStyle}>Layout*</Text>
                        <View style={{ marginTop: 10 }}>
                          <Dropdown
                            style={[styles.dropdown]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            placeholder="Select..."
                            data={layoutData}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            value={values.layout}
                            onChange={(value) => {
                              setFieldValue('layout', value.value);
                            }}
                            // onChange={() => {
                            //   handleChange('layout')
                            // }
                            // }
                            onBlur={() => {
                              handleBlur('layout')
                            }
                            }
                          />
                          {errors.layout && touched.layout && <Text style={styles.errorMsg}>{errors.layout}</Text>}
                        </View>
                      </View>
                      <View style={{ marginTop: 12 }}>
                        <Text style={[styles.txtInputStyle]}>City*</Text>
                        <View style={{ marginTop: 10 }}>
                          <TextInput
                            style={styles.formControlNew}
                            onChangeText={handleChange('city')}
                            onBlur={handleBlur('city')}
                            value={values.city}
                            placeholder="Enter city name"
                            placeholderTextColor="#707070"
                          />
                          {errors.city && touched.city && <Text style={styles.errorMsg}>{errors.city}</Text>}
                        </View>
                      </View>
                      <View style={{ marginTop: 10 }}>
                        <Text style={styles.filtertxtStyle}>Status*</Text>
                        <View style={{ marginTop: 10 }}>
                          <Dropdown
                            style={[styles.dropdown]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            placeholder="Select..."
                            data={data}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            // value={value}
                            // onChange={item => {
                            //   setValue(item.value);
                            // }}
                            onChange={(value) => {
                              setFieldValue('status', value.value);
                            }}
                            // onChange={() => handleChange('status')}
                            onBlur={() => handleBlur('status')}
                            value={values.status}
                          />
                          {/* {errors.status && touched.status && <Text style={styles.errorMsg}>{errors.status}</Text>} */}
                        </View>
                      </View>
                      <View style={{ marginTop: 12 }}>
                        <Text style={[styles.txtInputStyle]}>Rent ($)*</Text>
                        <View style={{ marginTop: 10 }}>
                          <TextInput
                            style={styles.formControlNew}
                            onChangeText={handleChange('rent')}
                            onBlur={handleBlur('rent')}
                            value={values.rent}
                            placeholder="Enter a rent"
                            placeholderTextColor="#707070"
                          />
                          {errors.rent && touched.rent && <Text style={styles.errorMsg}>{errors.rent}</Text>}
                        </View>
                      </View>
                      <View style={{ marginTop: 12 }}>
                        <Text style={[styles.txtInputStyle]}>Documents*</Text>
                        <View style={styles.formGroupDivv}>
                          <View style={styles.formGroup}>
                            <TouchableOpacity onPress={handleUpload}>
                              <View style={styles.uploadIdDiv}>
                                <Image
                                  source={require('../../assets/img/uploadIconn.png')}
                                  style={styles.uploadIdIcon}
                                />
                                <Text style={styles.uploadIdTitle}>
                                  Drop files here or click to upload.
                                </Text>
                              </View>
                            </TouchableOpacity>
                          </View>
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
      <Loading isLoading={isLoading} />
    </View>
  );
};
const styles = StyleSheet.create({
  formGroupDivv: {
    marginBottom: 16,
    marginTop: 16,
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
  filtertxtStyle: {
    fontSize: 17,
    color: '#000',
    fontFamily: 'Montserrat-Bold',
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
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
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

export default PropertyAdd;
