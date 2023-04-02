
import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import jwtdecode from 'jwt-decode';
import api from '../Constants/API';
import PostMethode from '../Constants/PostMethode';
import GetMethode from '../Constants/GetMethode';
import DeleteMethode from "../Constants/DeleteMethode";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from "@react-navigation/native";
import Loading from "./Loading/index";
import PopUp from "./Popup/index";

const Company = props => {
  const [postData] = PostMethode();
  const [getData] = GetMethode();
  const [deleteData] = DeleteMethode();
  const [isLoading, setLoading] = useState(false);
  const [isPopUp, setPopUp] = useState(false);
  const [message, setMessage] = useState('');
  const [token, setToken] = useState(null);

  const [visibleFillter, setVisibleFillter] = useState(false);
  const [value, setValue] = useState(null);
  const [companyFilter, setCompanyFilter] = useState({
    ownerName: '',
    city: ''
  })
  const [companyData, setCompanyData] = useState([]);
  const [companyFilterList, setCompanyFilterList] = useState([]);
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [totalCount, setTotalCount] = useState(12)
  const [isDataReady, setIsDataReady] = useState(false);
  const [jwtData, setJwtData] = useState(false);
  const [deleteObj, setDeleteObj] = useState();

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
          setJwtData(decode);
          setToken(data.jwt);
          setCompanyData([]);
          // setPage(1);
          // setLimit(10);
          getCompanyList(data.jwt);
          getCompany(page, limit);
        } catch (error) { }
      });
    }, [props.route])
  );

  const getCompanyList = async (jwt) => {
    getData(`${api.GET_COMPANY_FILTER}`, "", jwt).then((res) => {
      // alert(JSON.stringify(res.data.companies));
      let data = res.data.companies;
      let companyData = [];
      data.map((e) => companyData.push({ label: e.name, value: e.name }))
      setCompanyFilterList(companyData)
    })
      .catch(async (err) => {
        alert(JSON.stringify(err))
      });
  };

  const searchCompany = async () => {
    setCompanyData([]);
    if (companyFilter.ownerName || companyFilter.city || value) {
      setLimit(100);
      let data = {
        filter: true,
        filterCity: companyFilter.city,
        filterCompanyName: value,
        filterOwnerName: companyFilter.ownerName,
        role: "admin"
      }
      // alert(JSON.stringify(data))
      getCompany(1, 100, data, "filter");
      setVisibleFillter(!visibleFillter)
    }
  }

  const clearFilter = async () => {
    setCompanyFilter({
      ownerName: '',
      city: ''
    });
    setValue(null);
    setVisibleFillter(!visibleFillter);
    setLimit(10);
    getCompany(1, 10);
  }

  const getCompany = async (page, limit, data, filter) => {
    let filterDate = {};
    if (filter == "filter") {
      filterDate = data
    }
    // alert(`${api.GET_COMPANY}?page=${page}&limit=${limit}`)
    // alert(JSON.stringify(filterDate))
    setLoading(true)
    postData(`${api.GET_COMPANY}?page=${page}&limit=${limit}`, filterDate, "").then((res) => {
      // alert(JSON.stringify(res.data.results))
      if (res.data.status == 200) {
        // setCompanyData(res.data.results.companies)
        setCompanyData((prev) => ([...prev, ...res.data.results.companies]));
        setIsDataReady(true);
        setLoading(false);
      }
    })
      .catch(async (err) => {
        setLoading(false)
        // if (err.statusCode == 401) {
        //   await AsyncStorage.removeItem("userData");
        //   props.navigation.navigate('Login');
        // } else {
        alert(JSON.stringify(err))
        // }
      });
  };


  const addCardClick = () => {
    props.navigation.navigate('companyAdd');
  };
  const CompanyDetail = (data) => {
    // props.history.push("/companyDetail");
    props.navigation.navigate('companyDetail', data);
  };

  const deleteCompany = (companyID, index) => {
    let rowKey = index;
    const newData = [...companyData];
    // const prevIndex = commentList.findIndex(item => item.index === rowKey);
    newData.splice(rowKey, 1);
    setCompanyData(newData);
    let adminId = jwtData.id;
    deleteData(`${api.DELETE_COMPANY}?companyID=${companyID}&adminID=${adminId}`, "", token).then((res) => {
      // alert(JSON.stringify(res.data))
      if (res.data.status == 200) {
        // alert(JSON.stringify(res.data))
        // getCompany(1, 10);
      }
    })
      .catch(async (err) => {
        setLoading(false)
        alert(JSON.stringify(err))
        // }
      });
  }

  const confirmDelete = (companyID, index) => {
    let getData = {
      companyID: companyID,
      index: index
    }
    setDeleteObj(getData);
    // Set the message state with the message received from the child component
    setMessage("Are you sure you want to delete this company ?");
    setPopUp(true)
  };

  const handleDelete = (data) => {
    // alert(JSON.stringify(data))
    // Set the message state with the message received from the child component
    deleteCompany(data.companyID, data.index);
    setMessage("");
    setPopUp(false);
  };

  const handleHide = () => {
    setPopUp(false)
  }
  const handleLoadMore = () => {
    if (isDataReady) {
      let pageN = Math.ceil(totalCount / 10);
      let nextPage = page + 1
      setPage(nextPage);
      if (nextPage <= pageN) {
        getCompany(nextPage, 10);
      }
    }
  }
  const renderItemData = ({ item, index }) => (
    <View key={index}>
      <TouchableOpacity
        style={styles.proprtyCardItem}
        backgroundColor={'#ffffff'}
        onPress={() => CompanyDetail(item)}>
        <View style={styles.proprtyCardCol}>
          <View style={styles.proprtyCardRow}>
            <View style={[styles.proprtyCardRight]}>
              <View
                style={styles.cmpRow}>
                <Text style={[styles.mediumTitle, styles.pt8, styles.textBlue, { fontSize: 15 },]}> # {index + 1} </Text>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity onPress={() => confirmDelete(item._id, index)}>
                    <AntDesign name={'delete'} color={'#0d568f'} size={20} />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={[styles.mediumTitle, styles.pt8, styles.textBlue,]}>Company Name </Text>
              <Text style={[styles.py7, { color: '#707070' }]}>
                {item.name}
              </Text>
              <Text style={[styles.mediumTitle, styles.pt8, styles.textBlue,]}>Owner Name </Text>
              <Text style={[styles.py7, { color: '#707070', display: 'flex', flexDirection: 'row', alignItems: 'center' }]}>
                <EvilIcons name={'user'} color={'#0d568f'} size={25} /> {item.ownerName} </Text>
            </View>
          </View>
          <View style={styles.space28}></View>
        </View>
      </TouchableOpacity>
    </View>
  );
  const handleFilter = () => {
    setVisibleFillter(!visibleFillter);
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <StatusBar translucent backgroundColor="transparent" />
      {/* <ScrollView contentContainerStyle={styles.outerContainer}> */}
      <View style={styles.mainBoxOuter}>
        <View style={styles.fixInfoDiv}>
          <View
            style={[
              styles.mt10,
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: '10%',
              },
            ]}>
            <Text style={[styles.mainTitle, styles.greyText]}> Companies(7) </Text>
            <TouchableOpacity
              style={styles.filterBtnContainer}
              onPress={() => handleFilter()}>
              <Text style={[styles.mainTitle, { color: '#fff', fontSize: 16 }]}> Filters </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.prpertyList]}>
            <FlatList
              showsVerticalScrollIndicator={false}
              // snapToAlignment="start"
              // decelerationRate={"fast"}
              data={companyData}
              onEndReached={() => handleLoadMore()}
              onEndReachedThreshold={0.5}
              contentContainerStyle={{ paddingBottom: 150 }}
              renderItem={(item, index) => renderItemData(item, index)}
              style={{ height: '100%' }}
            />
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
      {/* <View style={{
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 22,
      }}> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={visibleFillter}
        // onRequestClose={() => setVisibleFillter(!visibleFillter)}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setVisibleFillter(!visibleFillter);
        }}
      >
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
                <TouchableOpacity onPress={() => setVisibleFillter(!visibleFillter)}>
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
            <View style={{ marginBottom: '5%' }}>
              <View style={{ marginTop: 15, marginHorizontal: '4%' }}>
                <View>
                  <Text style={styles.filtertxtStyle}>Company Name</Text>
                  <View style={{ marginTop: 10 }}>
                    <Dropdown
                      style={[styles.dropdown]}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      placeholder="Select One"
                      data={companyFilterList}
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
                <View style={{ marginTop: 15 }}>
                  <Text style={[styles.filtertxtStyle]}>Owner Name</Text>
                  <View style={{ marginTop: 10 }}>
                    <TextInput
                      style={styles.formControlNew}
                      onChangeText={value => {
                        setCompanyFilter({
                          ...companyFilter,
                          ownerName: value,
                        });
                      }}
                      value={companyFilter.ownerName}
                      placeholder="Enter Owner Name"
                      placeholderTextColor="#707070"
                    />
                  </View>
                </View>
                <View style={{ marginTop: 15 }}>
                  <Text style={[styles.filtertxtStyle]}>City</Text>
                  <View style={{ marginTop: 10 }}>
                    <TextInput
                      style={styles.formControlNew}
                      onChangeText={value => {
                        setCompanyFilter({
                          ...companyFilter,
                          city: value,
                        });
                      }}
                      value={companyFilter.city}
                      placeholder="Enter Owner City"
                      placeholderTextColor="#707070"
                    />
                  </View>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.mt10,
                {
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  marginTop: '10%',
                  marginHorizontal: '4%',
                },
              ]}>
              <TouchableOpacity style={[styles.filterBtnContainer, { marginRight: 10 }]} onPress={searchCompany}>
                <Text style={[styles.mainTitle, { color: '#fff', fontSize: 16 }]}>
                  Search
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.filterBtnContainer]} onPress={clearFilter}>
                <Text style={[styles.mainTitle, { color: '#fff', fontSize: 16 }]}>
                  Clear
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={[styles.addBtnDiv]} onPress={addCardClick}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#0e558d', '#084677']}
          style={[styles.addBtnBig, { justifyContent: 'center' }]}>
          <Text style={[styles.addBtnTextBig]}>+</Text>
        </LinearGradient>
      </TouchableOpacity>

      <Loading isLoading={isLoading} />
      {isPopUp ? <PopUp handleDelete={handleDelete} handleHide={handleHide} message={message} data={deleteObj} /> : null}
    </View >
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

  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
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
  pb10: {
    paddingBottom: 10,
  },
  pt8: {
    paddingTop: 8,
  },
  lstGrdCol: {
    flexDirection: 'row',
  },
  listIcon: {
    backgroundColor: '#f4f4f4',
    marginLeft: 10,
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
  proprtyDefault: {
    backgroundColor: '#000000',
    position: 'absolute',
    right: 0,
    top: 10,
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 20,
    zIndex: 1,
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
  prptyImg: {
    width: 130,
    height: 150,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  prptyFtrIcon1: {
    paddingRight: 3,
  },
  prptyFtrIcon: {
    paddingRight: 3,
    fontSize: 12.5,
  },
  prptyPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  prptyPriceSm: {
    fontSize: 15,
  },
  mgRt: {
    marginRight: 10,
  },
  addBtnDiv: {
    position: 'absolute',
    borderRadius: 50,
    right: 20,
    bottom: 20,
  },
  addBtn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    textAlign: 'center',
    lineHeight: 50,
    alignItems: 'center',
  },
  addBtnBig: {
    width: 55,
    height: 55,
    lineHeight: 55,
    borderRadius: 55,
    paddingVertical: 0,
    textAlign: 'center',
    alignItems: 'center',
  },
  addBtnText: {
    fontSize: 32,
    color: '#ffffff',
    fontFamily: 'Montserrat-SemiBold',
  },
  addBtnTextBig: {
    fontSize: 36,
    color: '#ffffff',
    fontFamily: 'Montserrat-SemiBold',
  },
  cardActionDiv: {
    position: 'absolute',
    right: 27,
    top: 32,
  },
  deleteIcon: {
    width: 20,
    height: 23,
  },
  cmpRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    alignItems: 'center',
    borderColor: '#c3c9cc',
  }
});

export default Company;
