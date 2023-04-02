import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import jwtDecode from 'jwt-decode';
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
  Modal,
  FlatList,
  Platform
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import api from '../Constants/API';
import PostMethode from '../Constants/PostMethode';
import Loading from './Loading';
import GetMethode from '../Constants/GetMethode';

const data = [
  { label: 'Active', value: 'Active' },
  { label: 'Inactive', value: 'Inactive' },
];
const PropertyManager = (props) => {
  const [postData] = PostMethode();
  const [getData] = GetMethode();
  const [visible, setVisible] = useState(false);
  const [propertyManagerFilter, setPropertyManagerFilter] = useState({
    managerName: '',
    email: '',
    ID: '',
    phone: '',
    status: ''
  });
  const [filter, setFilter] = useState("")
  const [filterData, setFilterData] = useState()
  const [token, setToken] = useState(null);
  const [jwtData, setJwtData] = useState(false);
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [totalCount, setTotalCount] = useState(0)
  const [propertyManagerData, setPropertyManagerData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isDataReady, setIsDataReady] = useState(false);
  const [ropertyManagerFilterList, setPropertyManagerFilterList] = useState([])
  const ManagerDtl = (data) => {
    props.navigation.navigate('propertyManagerDtl', data);
  };

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(async () => {
        try {
          var value = await AsyncStorage.getItem("userData");
          let data = JSON.parse(value);
          if (!data || !data.jwt) {
            props.navigation.navigate("Login");
          }
          let decode = jwtDecode(data.jwt);
          setJwtData(decode);
          setToken(data.jwt);
          setPropertyManagerData([]);
          setPage(1);
          setLimit(10);
          getPropertyManagerList();
          getPropertyManager(page, limit);
        } catch (error) { }
      });
    }, [props.route])
  );

  const getPropertyManagerList = async () => {
    getData(`${api.GET_PROPERTY_Manager_Filter}?role=admin`, "").then((res) => {

      let data = res.data.properties;
      console.log('data', data);
      let options = [];
      data.map((e) => options.push({ label: e.Name, value: e.Name }))
      setPropertyManagerFilterList(options)
    })
      .catch(async (err) => {
        alert(JSON.stringify(err))
      });
  };

  const searchPropertyManager = async () => {
    setPage(1);
    setPropertyManagerData([]);
    if (propertyManagerFilter.ID || propertyManagerFilter.email || propertyManagerFilter.managerName || propertyManagerFilter.phone || propertyManagerFilter.status) {
      let data = {
        ID: propertyManagerFilter.ID,
        email: propertyManagerFilter.email,
        firstname: propertyManagerFilter.managerName,
        phone: propertyManagerFilter.phone,
        status: propertyManagerFilter.status
      }
      getPropertyManager(1, 10, data, "filter");
      setFilter("filter")
      setFilterData(data)
      setVisible(!visible)
    }
  }

  const onClearFilter = () => {
    setPropertyManagerFilter('');
    setVisible(false);
    setLimit(10);
    setPage(1);
    setFilterData('')
    getPropertyManager(1, 10, "")
  }

  const getPropertyManager = async (page, limit, data, filter) => {
    let fData = {
      role: "admin"
    }
    if (filter) {
      fData = {
        filter: data,
        role: "admin"
      }
    }
    setLoading(true)
    postData(`${api.GET_PROPERTY_Manager}?page=${page}&limit=${limit}`, fData, token).then((res) => {
      console.log('SAdmin Property Manager Data', res);
      // alert(JSON.stringify(res.data.results))
      if (res.data.status == 200) {
        // setCompanyData(res.data.results.companies)
        setPropertyManagerData((prev) => ([...prev, ...res.data.results.managers]));
        setIsDataReady(true);
        setTotalCount(res.data.totalManagers);
        setLoading(false)
      }
    }).catch(async (err) => {
      setLoading(false)
      // if (err.statusCode == 401) {
      //   await AsyncStorage.removeItem("userData");
      //   props.navigation.navigate('Login');
      // } else {
      // alert(JSON.stringify(err))
      // }
    });
  };

  const handleLoadMore = () => {
    let pageN = Math.ceil(totalCount / 10);
    let nextPage = page + 1
    setPage(nextPage);
    if (nextPage <= pageN) {
      getPropertyManager(nextPage, 10, filterData, filter);
    }
  }

  const renderItemData = ({ item, index }) => (
    <View key={index}>
      <TouchableOpacity
        style={styles.proprtyCardItem}
        backgroundColor={'#ffffff'}
        onPress={() => { ManagerDtl(item) }}>
        <View style={styles.proprtyCardCol}>
          <View style={styles.proprtyCardRow}>
            <View style={[styles.proprtyCardRight]}>
              <View style={styles.cmpRow}>
                <Text style={[styles.mediumTitle, styles.pt8, styles.textBlue, { fontSize: 15 },]}> # {index + 1}</Text>
              </View>
              <Text style={[styles.mediumTitle, styles.pt8, styles.textBlue,]}>Manager </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <EvilIcons name={'user'} color={'#0d568f'} size={25} />
                <Text style={[{ color: '#707070', display: 'flex', flexDirection: 'row', alignItems: 'center' }]}>
                  {item.firstname} {item.lastname}
                </Text>
              </View>
              <Text style={[styles.mediumTitle, styles.pt8, styles.textBlue,]}>Email </Text>
              <Text style={[{ color: '#707070' }]}>
                {item.email}
              </Text>
              <Text style={[styles.mediumTitle, styles.pt8, styles.textBlue,]}>Mobile </Text>
              <Text style={[{ color: '#707070' }]}>
                {item.mobile}
              </Text>
            </View>
          </View>
          <View style={styles.space28}></View>
        </View>
      </TouchableOpacity >
    </View >
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView contentContainerStyle={styles.outerContainer}>
        <View style={styles.mainBoxOuter}>
          <View style={styles.fixInfoDiv}>
            <View style={{ marginTop: '6%', justifyContent: 'space-between', flexDirection: 'row' }}>
              <Text style={[styles.mainTitle, styles.greyText]}>Total {`(${totalCount})`}</Text>
              <TouchableOpacity
                style={styles.filterBtnContainer}
                onPress={() => setVisible(true)}>
                <Text style={[styles.mainTitle, { color: '#fff', fontSize: 16 }]}>
                  Filters
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.prpertyList]}>
              <FlatList
                showsVerticalScrollIndicator={false}
                // snapToAlignment="start"
                // decelerationRate={"fast"}
                data={propertyManagerData}
                onEndReached={() => handleLoadMore()}
                onEndReachedThreshold={0.5}
                // contentContainerStyle={{ paddingBottom: 150 }}
                renderItem={(item, index) => renderItemData(item, index)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
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
              <View style={{ marginTop: 15, marginHorizontal: '4%' }}>
                <View>
                  <Text style={styles.filtertxtStyle}>Manager Name</Text>
                  <View style={{ marginTop: 10 }}>
                    <Dropdown
                      style={[styles.dropdown]}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      placeholder="Search by Name"
                      data={ropertyManagerFilterList}
                      maxHeight={300}
                      labelField="label"
                      valueField="value"
                      value={propertyManagerFilter.managerName}
                      onChange={item => {
                        setPropertyManagerFilter({ ...propertyManagerFilter, managerName: item.value });
                      }}
                    />
                  </View>
                </View>
                <View style={{ marginTop: 15 }}>
                  <Text style={[styles.filtertxtStyle]}>Email</Text>
                  <View style={{ marginTop: 10 }}>
                    <TextInput
                      style={styles.formControlNew}
                      onChangeText={value => {
                        setPropertyManagerFilter({
                          ...propertyManagerFilter,
                          email: value,
                        });
                      }}
                      value={propertyManagerFilter.email}
                      placeholder="Enter email address"
                      placeholderTextColor="#707070"
                    />
                  </View>
                </View>
                <View style={{ marginTop: 15 }}>
                  <Text style={[styles.filtertxtStyle]}> ID</Text>
                  <View style={{ marginTop: 10 }}>
                    <TextInput
                      style={styles.formControlNew}
                      onChangeText={value => {
                        setPropertyManagerFilter({
                          ...propertyManagerFilter,
                          ID: value,
                        });
                      }}
                      value={propertyManagerFilter.ID}
                      placeholder="Enter manager ID"
                      placeholderTextColor="#707070"
                    />
                  </View>
                </View>
                <View style={{ marginTop: 15 }}>
                  <Text style={[styles.filtertxtStyle]}>Phone</Text>
                  <View style={{ marginTop: 10 }}>
                    <TextInput
                      style={styles.formControlNew}
                      onChangeText={value => {
                        setPropertyManagerFilter({
                          ...propertyManagerFilter,
                          phone: value,
                        });
                      }}
                      keyboardType='numeric'
                      maxLength={10}
                      value={propertyManagerFilter.phone}
                      placeholder="Enter phone number"
                      placeholderTextColor="#707070"
                    />
                  </View>
                </View>
                <View style={{ marginTop: '5%' }}>
                  <Text style={styles.filtertxtStyle}>Status</Text>
                  <View style={{ marginTop: 10 }}>
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
                      value={propertyManagerFilter.status}
                      onChange={item => {
                        setPropertyManagerFilter({ ...propertyManagerFilter, status: item.value });
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
                  marginHorizontal: '4%',
                  paddingBottom: Platform.OS === "ios" ? 30 : 0,
                },
              ]}>
              <TouchableOpacity onPress={() => searchPropertyManager()}
                style={[styles.filterBtnContainer, { marginRight: 10 }]}>
                <Text style={[styles.mainTitle, { color: '#fff', fontSize: 16 }]}>
                  Search
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => onClearFilter()} style={[styles.filterBtnContainer]}>
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
  outerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#ffffff',
    position: 'relative',
    //minHeight: '100%',
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
  mapImage: {
    width: '100%',
    minHeight: '100%',
    height: 250,
  },
  mapItem: {
    maxWidth: '100%',
  },
  mapBody: {
    backgroundColor: '#ffffff',
    position: 'relative',
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 2,
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
  marginBottom: {
    marginBottom: 8,
  },
  dotIcon: {
    backgroundColor: '#9a0000',
    width: 6,
    height: 6,
    borderRadius: 6,
    marginRight: 6,
  },
  shipTextBig: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Montserrat-Regular',
  },
  shipTextSmall: {
    fontSize: 14,
    color: '#000000',
    fontFamily: 'Montserrat-Regular',
  },
  shipTextBold: {
    fontFamily: 'Montserrat-SemiBold',
  },
  shipTextRed: {
    color: '#9a0000',
  },
  shipTextGrey: {
    color: '#b8b9ba',
  },
  shipTextDark: {
    color: '#33373a',
  },
  formTitleDiv: {
    marginBottom: 16,
    position: 'relative',
    zIndex: 1,
  },

  fixInfoBtnsDiv: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingTop: 25,
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 8 },
    shadowOpacity: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 4,
    marginLeft: -5,
    marginRight: -5,
  },
  srchFilterDiv: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerFlex: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 3,
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
  btnTransparent: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#9a0000',
  },
  TextStyle: {
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
  },
  btmNavFix: {
    minWidth: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnIcon: {
    width: 30,
    height: 30,
    textAlign: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  textBlue: {
    color: '#0d568f',
  },
  textGrey: {
    color: '#676974',
  },

  navigationContainer: {
    flex: 1,
    minHeight: '100%',
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
    width: 90,
    height: 90,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 90,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginRight: 16,
  },
  sidebarProMedia: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    width: 78,
    height: 78,
    borderRadius: 78,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  sidebarProImg: {
    width: 70,
    height: 70,
  },
  sidebarLinkCol: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sidebarLinkLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sidebarLinkIcon: {
    width: 40,
    height: 40,
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginRight: 12,
  },
  sidebarLinkImg: {
    width: 20,
    height: 20,
  },
  sidebarLinkText: {
    fontSize: 16,
    color: '#333333',
    fontFamily: 'Montserrat-SemiBold',
  },
  sidebarLinkArrow: {
    width: 10,
    height: 17,
  },
  formGroup: {
    marginBottom: 0,
    minWidth: '84%',
    position: 'relative',
    marginRight: 10,
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
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#f4f4f4',
    fontFamily: 'Montserrat-Regular',
  },
  formGroupIcon: {
    position: 'relative',
  },
  formControlIcon: {
    paddingLeft: 36,
  },
  showHideIcon: {
    position: 'absolute',
    left: 15,
    top: 15,
    width: 16,
    height: 20,
  },
  filtrButton: {
    padding: 10,
    width: 'auto',
    borderRadius: 7,
  },
  bgOutrBox: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 16,
  },
  srchTitle: {
    marginVertical: 10,
    backgroundColor: '#d2edf8',
    borderRadius: 30,
    textAlign: 'center',
    paddingVertical: 12,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
    paddingHorizontal: 10,
  },

  mainHdng: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  MainTitleDiv: {},
  mainTitleText: {
    fontSize: 19,
    color: '#000',
    fontFamily: 'Montserrat-Bold',
  },
  mediumTitle: {
    fontSize: 13,
    color: '#000',
    fontFamily: 'Montserrat-Bold',
  },
  mainTtlBrdr: {
    backgroundColor: '#0e558d',
    position: 'absolute',
    width: 96,
    height: 5,
    left: 0,
    bottom: 3,
    opacity: 0.24,
    zIndex: -1,
  },
  spaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  uperCase: {
    textTransform: 'uppercase',
  },
  mt10: {
    marginTop: 10,
  },
  py7: {
    paddingBottom: 7,
    paddingTop: 7,
  },
  pt8: {
    paddingTop: 8,
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
  cmpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    alignItems: 'center',
    borderColor: '#c3c9cc',
  }
});

export default PropertyManager;
