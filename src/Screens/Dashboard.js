import React, { useState } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Modal,
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const screenWidth = (Dimensions.get("window").width) - 20;

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
];

const data6 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June',],
  legend: ['Rainy Days', 'Sunny Days', 'Cloudy Days'],
  data: [
    [20, 30, 40],
    [10, 20, 30],
    [30, 10, 50],
    [15, 25, 45],
    [40, 20, 30],
    [25, 35, 15],
  ],
  barColors: ['#dfe4ea', '#ced6e0', '#a4b0be'],
};
const data1 = {
  labels: ["Jan", "Feb", 'March', "April", "May",],
  legend: ["Pending", "Approved", "Denied"],
  data: [
    [60, 60, 60],
    [30, 30, 60],
    [10, 35, 76],
    [30, 30, 60],
    [10, 35, 76],
    [60, 60, 60],
  ],
  barColors: ["#ffd982", "#82c8a8", "#e68784"]
};

const data2 = {
  labels: ["Feb"],
  legend: ["Air Condition"],
  data: [
    [60],
  ],
  barColors: ["#80aed2"]
};
const data3 = {
  labels: ["Jan", "Feb", 'March', "April", "May"],
  legend: ["Pending", "Closed", "Cancelled", "Follow Up"],
  data: [
    [60, 60, 60, 55],
    [30, 30, 60, 80],
    [10, 35, 76, 55],
    [30, 30, 60, 30],
    [10, 35, 76, 40],
  ],
  barColors: ["#ffb47f", "#80aed2", "#eb8482", "#8cc686"]
};
const data4 = {
  labels: ["Jan", "Feb", 'March', "April", "May"],
  legend: ["Collected", "Pending"],
  data: [
    [60, 60],
    [30, 30]
  ],
  barColors: ["#b9819f", "#e0b690"]
};
const Dashboard = props => {
  const [value, setValue] = useState(null);
  const [startDate, setStartDate] = useState(false);
  const [endDate, setEndDate] = useState(false);
  const [startDateSelected, setStartDateSelected] = useState(new Date());
  const [endDateSelected, setEndDateSelected] = useState(new Date());
  const [visible, setVisible] = useState(false);

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
  const searchCompany = async () => {
    // setCompanyData([]);
    // if (companyFilter.ownerName || companyFilter.city || value) {
    //   setLimit(100);
    //   let data = {
    //     filter: true,
    //     filterCity: companyFilter.city,
    //     filterCompanyName: value,
    //     filterOwnerName: companyFilter.ownerName,
    //     role: "admin"
    //   }
    //   // alert(JSON.stringify(data))
    //   getCompany(1, 100, data, "filter");
    //   setVisibleFillter(!visibleFillter)
    // }
  }

  const clearFilter = async () => {
    // setCompanyFilter({
    //   ownerName: '',
    //   city: ''
    // });
    // setValue(null);
    // setVisibleFillter(!visibleFillter);
    // setLimit(10);
    // getCompany(1, 10);
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView contentContainerStyle={styles.outerContainer}>
        <View style={styles.mainBoxOuter}>
          <View
            style={{
              marginTop: '3%',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginHorizontal: 4,
            }}>
            <Text style={[styles.txtStyle]}>Dashboard</Text>
            <TouchableOpacity
              style={styles.filterBtnContainer}
              onPress={() => setVisible(true)}>
              <Text style={[styles.mainTitle, { color: '#fff', fontSize: 16 }]}>
                Filters
              </Text>
            </TouchableOpacity>
          </View>
          {/* <ScrollView horizontal style={{ borderWidth: 1, borderColor: "#000", }}>
            <StackedBarChart
              data={data6}
              width={700}
              height={300}
              chartConfig={{
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#fff',
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              }}
            />
          </ScrollView> */}
          <View style={{ paddingHorizontal: 10, paddingTop: 20 }}>
            <Text style={styles.filtertxtStyle}>Applications</Text>
            <ScrollView horizontal style={{
              borderWidth: 2, borderColor: "#e9e9ee", padding: 5, borderRadius: 10,
              // shadowOpacity: 0.1,
              // shadowRadius: 3.84,
              // elevation: 5,
            }}>
              <StackedBarChart
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                  // shadowOpacity: 0.25,
                  // shadowRadius: 3.84,
                  // elevation: 5,
                }}
                // horizontal={false}
                // horizontalLabelRotation={-90}
                data={data1}
                // withHorizontalLabels={false}
                // withVerticalLabels={false}
                // width={1130}
                width={data1.data.length === 3 ? screenWidth : screenWidth + data1.data.length * 40}
                height={220}
                // yAxisLabel="$"
                chartConfig={{
                  backgroundColor: "#fff",
                  backgroundGradientFrom: "#fff",
                  backgroundGradientTo: "#fff",
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(000, 000, 000, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(000, 000, 000, ${opacity})`,
                  style: {
                    borderRadius: 16
                  },
                }}
                bezier
              />
            </ScrollView>
          </View>
          <View style={{ paddingHorizontal: 10, paddingTop: 20 }}>
            <Text style={styles.filtertxtStyle}>Maintenance Request</Text>
            <ScrollView horizontal style={{
              borderWidth: 2, borderColor: "#e9e9ee", padding: 5, borderRadius: 10,
            }}>
              <StackedBarChart
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
                data={data2}
                width={data2.data.length === 3 ? screenWidth : screenWidth + data2.data.length * 40}
                height={220}
                // yAxisLabel="$"
                chartConfig={{
                  backgroundColor: "#fff",
                  backgroundGradientFrom: "#fff",
                  backgroundGradientTo: "#fff",
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(000, 000, 000, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(000, 000, 000, ${opacity})`,
                  style: {
                    borderRadius: 16
                  },
                }}
              />
            </ScrollView>
          </View>
          <View style={{ paddingHorizontal: 10, paddingTop: 20 }}>
            <Text style={styles.filtertxtStyle}>Leads</Text>
            <ScrollView horizontal style={{
              borderWidth: 2, borderColor: "#e9e9ee", padding: 5, borderRadius: 10,
            }}>
              <StackedBarChart
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
                data={data3}
                width={data3.data.length === 3 ? screenWidth : screenWidth + data3.data.length * 5}
                height={220}
                // yAxisLabel="$"
                chartConfig={{
                  backgroundColor: "#fff",
                  backgroundGradientFrom: "#fff",
                  backgroundGradientTo: "#fff",
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(000, 000, 000, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(000, 000, 000, ${opacity})`,
                  style: {
                    borderRadius: 16
                  },
                }}
              />
            </ScrollView>
          </View>
          <View style={{ paddingHorizontal: 10, paddingTop: 20, paddingBottom: 30 }}>
            <Text style={styles.filtertxtStyle}>Rent</Text>
            <ScrollView horizontal style={{
              borderWidth: 2, borderColor: "#e9e9ee", padding: 5, borderRadius: 5,
            }}>
              <StackedBarChart
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
                data={data4}
                width={data4.data.length === 3 ? screenWidth : screenWidth + data4.data.length * 5}
                height={220}
                // yAxisLabel="$"
                chartConfig={{
                  backgroundColor: "#fff",
                  backgroundGradientFrom: "#fff",
                  backgroundGradientTo: "#fff",
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(000, 000, 000, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(000, 000, 000, ${opacity})`,
                  style: {
                    borderRadius: 16
                  },
                }}
              />
            </ScrollView>
          </View>
          {/* <TouchableOpacity style={[styles.filterBtnContainer,{width:'30%',}]}>
                <Text style={[styles.mainTitle, {color: '#fff', fontSize: 16}]}>
                  Clear
                </Text>
              </TouchableOpacity> */}
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
            marginTop: 40,
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
            <View style={{ marginBottom: '5%' }}>
              <View style={{ marginTop: 15, marginHorizontal: '4%' }}>
                <View>
                  <Text style={styles.filtertxtStyle}>Company Name</Text>
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
                          {startDateSelected.toDateString('en-US')}
                        </Text>
                      )}
                    </TouchableOpacity>
                  </View>
                  {startDate && (
                    <DateTimePicker
                      value={startDateSelected}
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
                          {endDateSelected.toDateString('en-US')}
                        </Text>
                      )}
                    </TouchableOpacity>
                  </View>
                  {endDate && (
                    <DateTimePicker
                      value={endDateSelected}
                      mode={'date'}
                      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                      onChange={onEndDateSelected}
                    />
                  )}
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
    paddingVertical: 5,
    fontSize: 16,
    color: '#000',
    fontFamily: 'Montserrat-Bold',
  },
  filterBtnContainer: {
    paddingHorizontal: 15,
    paddingBottom: 6,
    paddingTop: 6,
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
  txtStyle: {
    fontSize: 17,
    color: '#000',
    fontFamily: 'Montserrat-Bold',
  },
  outerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    position: 'relative',
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
    paddingVertical: 0,
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
    fontFamily: 'Montserrat-Regular',
  },
  formTitleDiv: {
    marginBottom: 16,
    position: 'relative',
    zIndex: 1,
  },
  formTitleText: {
    fontSize: 20,
    color: '#333333',
    fontFamily: 'Montserrat-Bold',
  },
  frmTtlBrdr: {
    backgroundColor: '#0e558d',
    position: 'absolute',
    width: 96,
    height: 5,
    left: 50,
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
  formGroupNew: {
    paddingHorizontal: 6,
    position: 'relative',
    paddingTop: 14,
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
  inputIcon: {
    position: 'absolute',
    right: 20,
    top: 25,
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
  tabsMenuList: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    marginBottom: 24,
    marginLeft: -16,
    marginRight: -16,
    marginTop: -12,
  },
  tabsMenu: {
    marginHorizontal: 6,
  },
  tabBtn: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  tabActiveBtn: {
    borderBottomWidth: 3,
    borderBottomColor: '#0e558d',
  },
  tabText: {
    fontSize: 16,
    color: '#333333',
    fontFamily: 'Montserrat-Regular',
  },
  tabActiveText: {
    color: '#0e558d',
    fontFamily: 'Montserrat-SemiBold',
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
  addBtnText: {
    fontSize: 32,
    color: '#ffffff',
    fontFamily: 'Montserrat-SemiBold',
  },

  navigationContainer: {
    flex: 1,
    minHeight: '100%',
  },
  navigationMainContainer: {},
  sidebarTopCol: {},
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
});

export default Dashboard;
