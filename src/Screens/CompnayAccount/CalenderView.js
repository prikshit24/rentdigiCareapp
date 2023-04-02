import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
];

const CalenderView = props => {
  const [value, setValue] = useState(null);
  const [startDate, setStartDate] = useState(false);
  const [endDate, setEndDate] = useState(false);
  const [startDateSelected, setStartDateSelected] = useState(new Date());
  const [endDateSelected, setEndDateSelected] = useState(new Date());

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
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView contentContainerStyle={styles.outerContainer}>
        <View style={styles.mainBoxOuter}>
          <View style={{marginTop: '1%', marginHorizontal: '2%'}}>
            <TouchableOpacity
              style={[
                styles.filterBtnContainer,
                { marginTop: '5%',width:'60%'},
              ]}>
              <Text
                style={[
                  styles.mainTitle,
                  {color: '#fff', fontSize: 16, textAlign: 'center'},
                ]}>
                Copy Calender Link
              </Text>
            </TouchableOpacity>
            <Text style={[styles.filtertxtStyle,{marginTop:6}]}>Start Date</Text>
            <View style={{marginTop: 10}}>
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
          <View style={{marginTop: '4%', marginHorizontal: '2%'}}>
            <Text style={styles.filtertxtStyle}>End Date</Text>
            <View style={{marginTop: 10}}>
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

          <View style={{marginHorizontal: '2%'}}>
            <View style={{marginTop: '4%'}}>
              <Text style={styles.filtertxtStyle}>Select Property:</Text>
              <View style={{marginTop: 10}}>
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
                  value={value}
                  onChange={item => {
                    setValue(item.value);
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{marginHorizontal: '2%'}}>
            <View style={{marginTop: '4%'}}>
              <Text style={styles.filtertxtStyle}>Select Reason Type:</Text>
              <View style={{marginTop: 10}}>
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
                  value={value}
                  onChange={item => {
                    setValue(item.value);
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{marginHorizontal: '2%'}}>
            <View style={{marginTop: '4%'}}>
              <Text style={styles.filtertxtStyle}>Select Manager:</Text>
              <View style={{marginTop: 10}}>
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
                  value={value}
                  onChange={item => {
                    setValue(item.value);
                  }}
                />
              </View>
            </View>
          </View>
        </View>
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
    shadowOffset: {width: 0, height: 8},
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

export default CalenderView;
