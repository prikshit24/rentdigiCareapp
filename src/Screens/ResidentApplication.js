import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  Platform,
  FlatList
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import api from '../Constants/API';
import PostMethode from '../Constants/PostMethode';
import GetMethode from '../Constants/GetMethode';
import DeleteMethode from "../Constants/DeleteMethode";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from "@react-navigation/native";
import Loading from "./Loading/index";

const data = [
  { label: 'Denied', value: 'Denied' },
  { label: 'Pending', value: 'Pending' },
  { label: 'Approved', value: 'Approved' },
]
const source = [
  { label: 'Google', value: 'Google' },
  { label: 'GSK Website', value: 'GSK Website' },
  { label: 'Referral', value: 'Referral' },
  { label: 'Rent Board', value: 'Rent Board' },
  { label: 'Rent Faster', value: 'Rent Faster' },
  { label: 'Other', value: 'Other' },
]
const ResidentApplication = props => {
  const [postData] = PostMethode();
  const [getData] = GetMethode();
  const [deleteData] = DeleteMethode();
  const [isLoading, setLoading] = useState(false);
  const [isPopUp, setPopUp] = useState(false);
  const [message, setMessage] = useState('');
  const [token, setToken] = useState(null);

  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");
  const [property, setProperty] = useState("");
  const [value1, setValue1] = useState("");
  const [startDate, setStartDate] = useState(false);
  const [startDateSelected, setStartDateSelected] = useState("");
  const [endDateSelected, setEndDateSelected] = useState("");
  const [propertyID, setPropertyID] = useState('');
  const [endDate, setEndDate] = useState(false);
  const [residentFilter, setResidentFilter] = useState({
    applicantName: '',
    applicantPhone: '',
  });

  const [applicantList, setApplicantList] = useState([]);
  const [applicantFilterList, setApplicantFilterList] = useState([]);
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [totalCount, setTotalCount] = useState()
  const [filter, setFilter] = useState("")
  const [filterData, setFilterData] = useState()
  const [totalObj, setTotalObj] = useState()

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(async () => {
        try {
          var value = await AsyncStorage.getItem("userData");
          let data = JSON.parse(value);
          if (!data || !data.jwt) {
            props.navigation.navigate("Login");
          }
          setApplicantList([]);
          // let decode = jwtdecode(data.jwt);
          // setJwtData(decode);
          // setToken(data.jwt);
          // getCompanyList(data.jwt);
          setPage(1);
          setLimit(10);
          getCompanyList();
          getApplicant(1, 10);
        } catch (error) { }
      });
    }, [props.route])
  );


  const searchApplicant = async () => {
    setPage(1);
    setApplicantList([]);
    if (residentFilter.applicantName || residentFilter.applicantPhone || startDateSelected || endDateSelected || value || value1 || property) {
      // setLimit(10);
      const date = new Date(startDateSelected);
      const fromDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      const endDate = new Date(endDateSelected);
      const toDate = `${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDate()}`;
      let data = {
        applicantName: residentFilter.applicantName,
        applicantPhone: residentFilter.applicantPhone,
        applicationStatus: value,
        filter: true,
        fromDate: startDateSelected ? fromDate : "",
        propertyName: property,
        sorting: "",
        source: value1,
        toDate: endDateSelected ? toDate : "",
        role: "admin"
      }
      // alert(JSON.stringify(data))
      getApplicant(1, 10, data, "filter");
      setFilter("filter")
      setFilterData(data)
      setVisible(!visible)
    }
  }

  const getCompanyList = async () => {
    postData(`${api.GET_APPLICANT_FILTER}`, "").then((res) => {
      // setCompanyFilterList(res.data.companies);
      let data = res.data.propertyNameList;
      let options = [];
      data.map((e) => options.push({ label: e.title, value: e.title }))
      setApplicantFilterList(options)
    })
      .catch(async (err) => {
        alert(JSON.stringify(err))
      });
  };

  const clearFilter = async () => {
    setApplicantList([]);
    setResidentFilter({
      applicantName: '',
      applicantPhone: '',
    });
    setValue("");
    setValue1("");
    setStartDateSelected("");
    setEndDateSelected("");
    setProperty("")
    setVisible(!visible)
    setLimit(10);
    getApplicant(1, 10, "", "");
    setFilter("")
  }

  const getApplicant = async (page, limit, data, filter) => {
    console.log('resident ====?>', data);
    let filterDate = { role: "admin" };
    if (filter == "filter") {
      filterDate = data
    }
    setLoading(true)
    postData(`${api.GET_APPLICANT}?page=${page}&limit=${limit}`, filterDate, "").then((res) => {
      if (res.data.status == 200) {
        setLoading(false);
        setApplicantList((prev) => ([...prev, ...res.data.results.applications]));
        setTotalCount(res.data.total && res.data.total.Total)
        setTotalObj(res.data.total)
      }
    })
      .catch(async (err) => {
        setLoading(false)
        alert(JSON.stringify(err))
      });
  };

  const onStartDateClick = () => {
    setStartDate(true);
  };

  const onStartDateSelected = (event, value) => {
    setStartDateSelected(value);
    setStartDate(false);
  };
  const onEndDateSelected = (event, value) => {
    setEndDateSelected(value);
    setEndDate(false);
  };

  const onEndDateClick = () => {
    setEndDate(true);
  };
  const ResidentDtl = (data) => {
    // alert(data.applicants[0].currentAddress)
    props.navigation.navigate('residentDtl', { data: data });
  };

  const handleLoadMore = () => {
    // if (isDataReady) {
    let pageN = Math.ceil(totalCount / 10);
    let nextPage = page + 1
    setPage(nextPage);
    if (nextPage <= pageN) {
      // alert(nextPage)
      getApplicant(nextPage, 10, filterData, filter);
    }
    // }
  }
  const renderItemData = ({ item, index }) => (
    <View key={index}>
      <TouchableOpacity
        style={styles.proprtyCardItem}
        backgroundColor={'#ffffff'}
        onPress={() => ResidentDtl(item)}
      // onPress={CompanyDetail}
      >
        <View style={styles.proprtyCardCol}>
          <View style={styles.proprtyCardRow}>
            <View style={[styles.proprtyCardRight]}>
              <View
                style={styles.cmpRow}>
                <Text style={[styles.mediumTitle, styles.pt8, styles.textBlue, { fontSize: 15 },]}> # {index + 1} </Text>
                <View style={{ flexDirection: 'row' }}>
                  {/* <TouchableOpacity onPress={() => confirmDelete(item._id, index)}> */}
                  <TouchableOpacity>
                    <AntDesign name={'delete'} color={'#0d568f'} size={20} />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={[styles.mediumTitle, styles.pt8, styles.textBlue,]}>Property Name</Text>
              <Text style={[{ color: '#707070' }]}>
                {item.main.property}
              </Text>
              <Text style={[styles.mediumTitle, styles.pt8, styles.textBlue,]}>Address</Text>
              <Text style={[{ color: '#707070', display: 'flex', flexDirection: 'row', alignItems: 'center' }]}>
                {item.applicants[0].currentAddress}</Text>
              <Text style={[styles.mediumTitle, styles.pt8, styles.textBlue,]}>Mobile</Text>
              <Text style={[{ color: '#707070', display: 'flex', flexDirection: 'row', alignItems: 'center' }]}>
                {item.phone}</Text>
            </View>
          </View>
          <View style={styles.space28}></View>
        </View>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <StatusBar translucent backgroundColor="transparent" />
      {/* <ScrollView contentContainerStyle={styles.outerContainer}> */}
      <View style={styles.mainBoxOuter}>
        <View style={styles.fixInfoDiv}>
          <View
            style={{
              marginTop: '5%',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={[styles.txtStyle]}>Resident Application</Text>
            <TouchableOpacity
              style={styles.filterBtnContainer}
              onPress={() => setVisible(true)}>
              <Text style={[styles.mainTitle, { color: '#fff', fontSize: 16 }]}>
                Filters
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.columnTwo]}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View
                style={[
                  styles.mt10,
                  { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 },
                ]}>
                <Text style={[styles.mainTitle, styles.greyText, { paddingHorizontal: 8 }]}>
                  Total ({totalObj && totalObj.Total ? totalObj.Total : 0})
                </Text>
                <Text style={[styles.mainTitle, styles.greyText, { paddingHorizontal: 8 }]}>
                  Pending ({totalObj && totalObj.Pending ? totalObj.Pending : 0})
                </Text>
                <Text style={[styles.mainTitle, styles.greyText, { paddingHorizontal: 8 }]}>
                  Approved ({totalObj && totalObj.Approved ? totalObj.Approved : 0})
                </Text>
                <Text style={[styles.mainTitle, styles.greyText, { paddingHorizontal: 8 }]}>
                  Denied ({totalObj && totalObj.Denied ? totalObj.Denied : 0})
                </Text>
              </View>
            </ScrollView>
          </View>
          <View style={[styles.prpertyList]}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={applicantList}
              onEndReached={() => handleLoadMore()}
              onEndReachedThreshold={0.5}
              contentContainerStyle={{ paddingBottom: 180 }}
              renderItem={(item, index) => renderItemData(item, index)}
              style={{ height: '100%' }}
            />
            {/* <TouchableOpacity
              style={styles.proprtyCardItem}
              backgroundColor={'#ffffff'}
              onPress={ResidentDtl}>
              <View style={styles.proprtyCardCol}>
                <View style={styles.proprtyCardRow}>
                  <View style={[styles.proprtyCardRight]}>
                    <Text
                      style={[
                        styles.mediumTitle,
                        styles.pt8,
                        styles.textBlue,
                      ]}>
                      Oxford Campus
                    </Text>
                    <Text style={[styles.locatnTextBig, styles.py7]}>
                      11635 102 Avenue, Edmonton, Alberta, T5K0R4
                    </Text>
                    <View style={[styles.spaceBetween, styles.pb10]}>
                      <Text style={[styles.prptyFtrIcon]}>
                        <Image
                          source={require('../assets/img/userIcon1.png')}
                        />{' '}
                        Danish Sharma
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.space28}></View>
              </View> */}
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(!visible)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00000080',
            marginTop: Platform.OS === 'ios' ? 40 : 0,
          }}>
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#ffffff',
            }}>
            <View
              style={{
                backgroundColor: '#0d568f',
                padding: '5%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: '#ffffff',
                  fontFamily: 'Montserrat-Bold',
                }}>
                Filters
              </Text>
              <View>
                <TouchableOpacity onPress={() => setVisible(!visible)}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#ffffff',
                      fontFamily: 'Montserrat-Bold',
                    }}>
                    Close
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <ScrollView>
              <View style={{ marginTop: 4, marginHorizontal: '4%', paddingBottom: 150 }}>
                <View style={{ marginTop: '5%' }}>
                  <Text style={styles.filtertxtStyle}>Property Name</Text>
                  <View style={{ marginTop: 5 }}>
                    <Dropdown
                      style={[styles.dropdown]}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      placeholder="Search by Name"
                      data={applicantFilterList}
                      maxHeight={300}
                      labelField="label"
                      valueField="value"
                      value={property}
                      onChange={item => {
                        setProperty(item.value);
                      }}
                    />
                  </View>
                </View>
                <View style={{ marginTop: 15 }}>
                  <Text style={[styles.filtertxtStyle]}>Applicant Name</Text>
                  <View style={{ marginTop: 5 }}>
                    <TextInput
                      style={styles.formControlNew}
                      onChangeText={value => {
                        setResidentFilter({
                          ...residentFilter,
                          applicantName: value,
                        });
                      }}
                      value={residentFilter.applicantName}
                      placeholder="Enter applicant name"
                      placeholderTextColor="#707070"
                    />
                  </View>
                </View>
                <View style={{ marginTop: 15 }}>
                  <Text style={[styles.filtertxtStyle]}>Phone</Text>
                  <View style={{ marginTop: 5 }}>
                    <TextInput
                      style={styles.formControlNew}
                      onChangeText={value => {
                        setResidentFilter({
                          ...residentFilter,
                          applicantPhone: value,
                        });
                      }}
                      value={residentFilter.addCompany}
                      placeholder="Enter applicant phone number"
                      placeholderTextColor="#707070"
                    />
                  </View>
                </View>
                <View style={{ marginTop: '5%' }}>
                  <Text style={styles.filtertxtStyle}>From</Text>
                  <View style={{ marginTop: 5 }}>
                    <TouchableOpacity
                      onPress={onStartDateClick}
                      style={styles.formControlNew}>
                      {!startDateSelected ? (
                        <Text
                          style={{
                            color: '#707070',
                            paddingTop: 12,
                            fontSize: 15,
                          }}>
                          mm/dd/yyyy
                        </Text>
                      ) : (
                        <Text
                          style={{
                            color: '#707070',
                            paddingTop: 12,
                            fontSize: 15,
                          }}>
                          {startDateSelected ? startDateSelected?.toDateString('en-US') : ""}
                        </Text>
                      )}
                    </TouchableOpacity>
                  </View>
                  {startDate && (
                    <DateTimePicker
                      value={startDateSelected ? startDateSelected : new Date()}
                      mode={'date'}
                      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                      onChange={onStartDateSelected}
                    />
                  )}
                </View>
                <View style={{ marginTop: '5%' }}>
                  <Text style={styles.filtertxtStyle}>To</Text>
                  <View style={{ marginTop: 5 }}>
                    <TouchableOpacity
                      onPress={onEndDateClick}
                      style={styles.formControlNew}>
                      {!endDateSelected ? (
                        <Text
                          style={{
                            color: '#707070',
                            paddingTop: 12,
                            fontSize: 15,
                          }}>
                          mm/dd/yyyy
                        </Text>
                      ) : (
                        <Text
                          style={{
                            color: '#707070',
                            paddingTop: 12,
                            fontSize: 15,
                          }}>
                          {endDateSelected ? endDateSelected?.toDateString('en-US') : ""}
                        </Text>
                      )}
                    </TouchableOpacity>
                  </View>
                  {endDate && (
                    <DateTimePicker
                      value={endDateSelected ? endDateSelected : new Date()}
                      mode={'date'}
                      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                      onChange={onEndDateSelected}
                    />
                  )}
                </View>
                <View style={{ marginTop: '5%' }}>
                  <Text style={styles.filtertxtStyle}>Status</Text>
                  <View style={{ marginTop: 5 }}>
                    <Dropdown
                      style={[styles.dropdown]}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      placeholder="Select One"
                      data={data}
                      maxHeight={300}
                      labelField="label"
                      valueField="value"
                      value={value}
                      onChange={item => {
                        setValue(item.value);
                      }}
                    />
                  </View>
                </View>
                <View style={{ marginTop: '5%' }}>
                  <Text style={styles.filtertxtStyle}>Source</Text>
                  <View style={{ marginTop: 5 }}>
                    <Dropdown
                      style={[styles.dropdown]}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      placeholder="Select One"
                      data={source}
                      maxHeight={200}
                      labelField="label"
                      valueField="value"
                      value={value1}
                      onChange={item => {
                        setValue1(item.value);
                      }}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
            <View
              style={[
                styles.mt10,
                {
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginTop: '10%',
                  paddingBottom: Platform.OS === "ios" ? 30 : 0,
                  marginHorizontal: '4%',
                },
              ]}>
              <TouchableOpacity onPress={searchApplicant}
                style={[styles.filterBtnContainer, { marginRight: 10 }]}>
                <Text style={[styles.mainTitle, { color: '#fff', fontSize: 16 }]}>
                  Search
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={clearFilter} style={[styles.filterBtnContainer]}>
                <Text style={[styles.mainTitle, { color: '#fff', fontSize: 16 }]}>
                  Clear
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Loading isLoading={isLoading} />
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
  filtertxtStyle: {
    fontSize: 17,
    color: '#000',
    fontFamily: 'Montserrat-Bold',
  },
  filterBtnContainer: {
    paddingHorizontal: 15,
    paddingBottom: 5,
    paddingTop: 5,
    borderRadius: 5,
    backgroundColor: '#0d568f',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  txtStyle: {
    fontSize: 17,
    color: '#000',
    fontFamily: 'Montserrat-Bold',
  },
  filterBtnContainer: {
    paddingHorizontal: 15,
    paddingBottom: 5,
    paddingTop: 5,
    borderRadius: 5,
    backgroundColor: '#0d568f',
  },
  mainBoxOuter: {
    flex: 1,
  },
  mainTitle: {
    fontSize: 18,
    color: '#ffffff',
    fontFamily: 'Montserrat-SemiBold',
  },
  fixInfoDiv: {
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 8 },
    shadowOpacity: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 6,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: -20,
  },

  textBlue: {
    color: '#0d568f',
  },

  formControl: {
    color: '#221e1f',
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#f4f4f4',
    fontFamily: 'Montserrat-Regular',
  },
  mediumTitle: {
    fontSize: 13,
    color: '#000',
    fontFamily: 'Montserrat-Bold',
  },
  spaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mt10: {
    marginTop: 10,
  },
  py7: {
    paddingBottom: 7,
    paddingTop: 7,
  },
  pb10: {
    paddingBottom: 10,
  },
  pt8: {
    paddingTop: 8,
  },

  // proprtyCardItem: {
  //   marginTop: 24,
  //   backgroundColor: '#ffffff',
  //   borderRadius: 8,
  //   shadowColor: 'rgba(0,0,0,0.5)',
  //   shadowOffset: { width: 5, height: 5 },
  //   shadowOpacity: 0.2,
  //   shadowRadius: 8,
  //   elevation: 8,
  // },
  proprtyCardRight: {
    flex: 1,
    paddingRight: 25,
    paddingLeft: 25,
  },
  prptyFtrIcon: {
    paddingRight: 3,
    fontSize: 12.5,
  },


  proprtyCardItem: {
    marginTop: 24,
    backgroundColor: '#f4f7ff87',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#c3c9cc',
  },
  proprtyCardCol: {
    marginHorizontal: -12,
    position: 'relative',
  },
  proprtyCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  proprtyCardRight: {
    flex: 1,
    paddingRight: 25,
    paddingLeft: 25,
  },
  prptyFtrIcon: {
    paddingRight: 3,
    fontSize: 12.5,
  },
  cmpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    alignItems: 'center',
    borderColor: '#c3c9cc',
  },
  greyText: {
    fontSize: 14,
    color: '#777777',
  },
});

export default ResidentApplication;
