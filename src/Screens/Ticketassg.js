import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import ModalDropdown from 'react-native-modal-dropdown';
// import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker'
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';

const data = [
  { label: 'Danish Sharma', value: '1' },
  { label: 'John', value: '2' },
  { label: 'Rock', value: '3' },
  { label: 'Avatar', value: '4' },
  { label: 'Deepak Taneja', value: '5' },
  { label: 'Yash Kumar', value: '6' },
  { label: 'Pankaj Joshi', value: '7' },
  { label: 'Jasmine', value: '8' },
];

const data1 = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const data2 = [
  { label: '01', value: '1' },
  { label: '02', value: '2' },
  { label: '03', value: '3' },
  { label: '04', value: '4' },
  { label: '05', value: '5' },
  { label: '06', value: '6' },
  { label: '07', value: '7' },
  { label: '08', value: '8' },
  { label: '09', value: '9' },
  { label: '10', value: '10' },
  { label: '11', value: '11' },
  { label: '12', value: '12' },
];
const data3 = [
  { label: '00', value: '1' },
  { label: '01', value: '2' },
  { label: '02', value: '3' },
  { label: '03', value: '4' },
  { label: '04', value: '5' },
  { label: '05', value: '6' },
  { label: '06', value: '7' },
  { label: '07', value: '8' },
  { label: '08', value: '9' },
  { label: '09', value: '10' },
  { label: '10', value: '11' },
  { label: '11', value: '12' },
  { label: '12', value: '13' },
  { label: '13', value: '14' },
  { label: '14', value: '15' },
  { label: '15', value: '16' },
  { label: '16', value: '17' },
  { label: '17', value: '18' },
  { label: '18', value: '19' },
  { label: '19', value: '20' },
  { label: '20', value: '21' },
  { label: '21', value: '22' },
  { label: '22', value: '23' },
  { label: '23', value: '24' },
  { label: '24', value: '25' },
  { label: '25', value: '26' },
  { label: '26', value: '27' },
  { label: '27', value: '28' },
  { label: '28', value: '29' },
  { label: '29', value: '30' },
  { label: '30', value: '31' },
  { label: '31', value: '32' },
  { label: '32', value: '33' },
  { label: '33', value: '34' },
  { label: '34', value: '35' },
  { label: '35', value: '36' },
  { label: '36', value: '37' },
  { label: '37', value: '38' },
  { label: '38', value: '39' },
  { label: '39', value: '40' },
  { label: '40', value: '41' },
  { label: '41', value: '42' },
  { label: '42', value: '43' },
  { label: '43', value: '44' },
  { label: '44', value: '45' },
  { label: '45', value: '46' },
  { label: '46', value: '47' },
  { label: '47', value: '48' },
  { label: '48', value: '49' },
  { label: '49', value: '50' },
  { label: '50', value: '51' },
  { label: '51', value: '52' },
  { label: '52', value: '53' },
  { label: '53', value: '54' },
  { label: '54', value: '55' },
  { label: '55', value: '56' },
  { label: '56', value: '57' },
  { label: '57', value: '58' },
  { label: '58', value: '59' },
  { label: '59', value: '60' },
];
const Ticketassg = (props) => {
  const [Duration, onChangeText] = React.useState("");
  const [Firstname, onChangeText1] = React.useState("");
  const [Secondname, onChangeText2] = React.useState("");
  const [cardName, onChangeText3] = React.useState("");
  const [cell, onChangeText4] = React.useState("");
  const [Email, onChangeText5] = React.useState("");
  const [description, onChangeText8] = React.useState("");
  const [checkbox, setCheckbox] = React.useState(false);
  const [checkbox1, setCheckbox1] = React.useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
  }

  // const [selectedTeam, setSelectedTeam] = useState({})
  const [selectedItems, onSelectedItemsChange] = useState([])
  function onChange() {
    return (val) => setSelectedTeam(val)
  }
  const handleClick = () => {
    // props.history.push("/propertyManager");
    props.navigation.navigate('propertyManager');
  }
  const [date, setdate] = useState("");

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [value1, setValue1] = useState(null);
  const [isFocus1, setIsFocus1] = useState(false);

  const [value2, setValue2] = useState(null);
  const [isFocus2, setIsFocus2] = useState(false);

  const [value3, setValue3] = useState(null);
  const [isFocus3, setIsFocus3] = useState(false);

  const [selected, setSelected] = useState([]);

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <ScrollView contentContainerStyle={styles.outerContainer}>
        <View style={styles.mainBoxOuter}>
          <View style={styles.fixInfoDiv}>
            <View style={styles.mainBody}>
              <View style={styles.centerBoxNo}>
                <View style={styles.formOuter}>
                  <View style={styles.formGroupDiv}>
                    <View style={styles.formGroupNew}>
                      <Text style={styles.formLabelNew}>Assign Manager</Text>
                      <View style={styles.selectDrop}>
                        <MultiSelect
                          style={styles.dropdown}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          iconStyle={styles.iconStyle}
                          search
                          data={data}
                          labelField="label"
                          valueField="value"
                          placeholder="Select item"
                          searchPlaceholder="Search..."
                          value={selected}
                          onChange={item => {
                            setSelected(item);
                          }}
                          selectedStyle={styles.selectedStyle}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.formGroupDiv}>
                    <View style={styles.formGroupNew}>
                      <Text style={styles.formLabelNew}>Priority</Text>
                      <View style={styles.selectDrop}>
                        <Dropdown
                          style={[styles.dropdown, isFocus && { borderColor: '#0e558d' }]}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          data={data1}
                          dropdownPosition='bottom'
                          search
                          maxHeight={200}
                          labelField="label"
                          valueField="value"
                          placeholder={!isFocus ? 'Select item' : '...'}
                          searchPlaceholder="Search..."
                          value={value}
                          onFocus={() => setIsFocus(true)}
                          onBlur={() => setIsFocus(false)}
                          onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                          }}
                        />
                      </View>
                    </View>
                  </View>

                  <View style={styles.formGroupDiv}>
                    <View style={styles.formGroupNew}>
                      <Text style={styles.formLabelNew}>Duration Hours</Text>
                      <View style={styles.selectDrop}>
                        <Dropdown
                          style={[styles.dropdown, isFocus && { borderColor: '#0e558d' }]}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          data={data2}
                          dropdownPosition='bottom'
                          search
                          maxHeight={200}
                          labelField="label"
                          valueField="value"
                          placeholder={!isFocus ? 'Select item' : '...'}
                          searchPlaceholder="Search..."
                          value={value}
                          onFocus={() => setIsFocus1(true)}
                          onBlur={() => setIsFocus1(false)}
                          onChange={item => {
                            setValue1(item.value);
                            setIsFocus1(false);
                          }}
                        />
                      </View>
                    </View>
                    <View style={styles.formGroupNew}>
                      <Text style={styles.formLabelNew}>Duration Minutes</Text>
                      <View style={styles.selectDrop}>
                        <Dropdown
                          style={[styles.dropdown, isFocus && { borderColor: '#0e558d' }]}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          data={data3}
                          dropdownPosition='bottom'
                          search
                          maxHeight={200}
                          labelField="label"
                          valueField="value"
                          placeholder={!isFocus ? 'Select item' : '...'}
                          searchPlaceholder="Search..."
                          value={value}
                          onFocus={() => setIsFocus2(true)}
                          onBlur={() => setIsFocus2(false)}
                          onChange={item => {
                            setValue2(item.value);
                            setIsFocus2(false);
                          }}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={styles.formGroupDiv}>
                    <View style={[styles.formGroupNew, styles.formGroupNew,]}>
                      <Text style={styles.formLabelNew}>Date</Text>
                      <DatePicker
                        style={[styles.datePickerInput]}
                        date={date}
                        mode="date"
                        placeholder="Date"
                        placeholderTextColor="#7A869A"
                        format="dddd, DD MMMM YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        androidMode="default"
                        customStyles={{
                          dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0,
                            display: 'none',
                          },
                          dateInput: {
                            marginLeft: 0,
                            width: '100%',
                            height: 50,
                            paddingTop: 18,
                            paddingBottom: 12,
                            paddingHorizontal: 20,
                            borderRadius: 8,
                            borderColor: '#b2b2b2',
                            alignItems: 'flex-start',
                          },
                          placeholderText: {
                            fontSize: 14,
                            color: '#434450',
                            fontFamily: 'Montserrat-Regular',
                          },
                          dateText: {
                            fontSize: 14,
                            color: '#434450',
                            fontFamily: 'Montserrat-Regular',
                          },
                        }}
                        onDateChange={(date) => setdate(date)}
                      />
                    </View>
                  </View>

                  <View style={styles.formGroupDiv}>
                    <View style={styles.formGroupNew}>
                      <Text style={styles.formLabelNew}>Notes</Text>
                      <TextInput
                        style={styles.textArea}
                        value={description}
                        onChangeText={onChangeText8}
                        placeholder=""
                        placeholderTextColor="#fbfbfb"
                        underlineColorAndroid="transparent"
                        numberOfLines={8}
                        multiline={true}
                      />
                    </View>
                  </View>
                  <View style={styles.formBtn}>
                    <TouchableOpacity style={styles.btnGradientDiv} onPress={handleClick}>
                      <LinearGradient
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    //alignItems: 'center',
    backgroundColor: '#ffffff',
    position: "relative",
    minHeight: '100%',
    fontFamily: 'Montserrat-Regular',
  },
  blackText: {
    color: "#000000",
  },
  greyText: {
    fontSize: 16,
    color: "#777777",
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
    color: "#ffffff",
    fontFamily: 'Montserrat-Regular',
  },
  headerTitle: {
    fontSize: 18,
    color: "#ffffff",
    fontFamily: 'Montserrat-Bold'
  },
  mainBody: {
    paddingVertical: 5,
    paddingHorizontal: 16,
    flex: 1,
  },
  mainTitle: {
    fontSize: 18,
    color: "#ffffff",
    fontFamily: 'Montserrat-SemiBold'
  },
  subTitle: {
    fontSize: 16,
    color: "#ffffff",
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
  mr10: {
    marginRight: 20,
  },
  sucessIcon: {
    width: 200,
    height: 220,
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
  btnFull: {
    minWidth: '100%',
  },
  TextStyle: {
    fontSize: 16,
    color: "#ffffff",
    fontFamily: 'Montserrat-SemiBold',
  },
  textRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  whtTextColor: {
    fontSize: 14,
    color: "#ffffff",
    fontFamily: 'Montserrat-Regular'
  },
  whtTextBoldColor: {
    fontSize: 14,
    color: "#ffffff",
    fontFamily: 'Montserrat-Bold'
  },
  loginLink: {
    marginLeft: 6,
  },
  whtLink: {
    fontSize: 14,
    color: "#ffffff",
    fontFamily: 'Montserrat-SemiBold'
  },
  customTabs: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    marginBottom: 16,
  },
  customTabCol: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
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
    color: "#ffffff",
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
    justifyContent: "center",
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
    justifyContent: "center",
  },
  formGroupSimple: {
    alignItems: 'flex-start',
    paddingTop: 0,
  },
  formLabelNew: {
    fontSize: 14,
    color: "#aaaaaa",
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
    color: "#434450",
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
    justifyContent: "center",
    alignItems: 'center',
  },
  innerFlex: {
    flex: 1,
    justifyContent: "center",
  },
  amtTextLabel: {
    fontSize: 16,
    color: "#000000",
    fontFamily: 'Montserrat-SemiBold',
  },
  amtText: {
    fontSize: 16,
    color: "#990000",
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
    justifyContent: "flex-start",
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
    color: "#222",
    fontFamily: 'Montserrat-Regular',
    marginTop: 12,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle2: {
    fontSize: 18,
    color: "#222",
    fontFamily: 'Montserrat-Bold',
    marginBottom: 12,
  },
  formGroupSimple: {
    alignItems: 'flex-start',
    paddingTop: 0,
  },
  checkBoxDiv: {
    flexDirection: 'row',
    paddingRight: 5,
    marginTop: 15,
    alignItems: 'center',
    flex: 0.5,
  },
  checkBoxTitle: {
    fontSize: 13,
    fontFamily: 'Montserrat-SemiBold',
    alignItems: 'center',
    marginLeft: 4,
  },
  checkBoxColor: {
    borderWidth: 4,
    padding: 40,
    borderColor: 'red',
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
    color: "#222",
    fontFamily: 'Montserrat-Regular',
    marginTop: 12,
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
    color: "#222",
    fontFamily: 'Montserrat-Regular',
    marginTop: 12,
  },
  searchBar: {
    backgroundColor: '#FFF',
  },
  datePickerInput: {
    width: '100%',
    alignItems: 'center',
  },

  selectDrop: {
    width: '100%',
    position: 'relative',
  },
  containerStyle: {
    margin: 0,
  },
  dropdown: {
    height: 50,
    borderColor: '#b2b2b2',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 20,
    margin: 0,
    position: 'relative',
  },
  selectLabel: {
    left: 18,
    top: -8,
  },
  placeholderStyle: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
  selectedTextStyle: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },

});

export default Ticketassg