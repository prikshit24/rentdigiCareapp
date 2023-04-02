import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Linking
} from 'react-native';
import CheckBox from 'react-native-check-box';
import LinearGradient from 'react-native-linear-gradient';
//import ModalDropdown from 'react-native-modal-dropdown';
import { Dropdown, MultiSelect } from 'react-native-element-dropdown';

const data = [
  { label: 'Item 2', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const data1 = [
  { label: 'Item 2', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];
const data2 = [
  { label: 'Item 2', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];
const data3 = [
  { label: 'Item 2', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const data4 = [
  { label: 'Item 2', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];
const TaskEdt = (props) => {
  const [description, onChangeText9] = React.useState("");
  const [typeCode, onChangeText] = React.useState("");
  const [displayName, onChangeText1] = React.useState("");
  const [cardSeq, onChangeText2] = React.useState("");
  const [cardName, onChangeText3] = React.useState("");
  const [cell, onChangeText4] = React.useState("");
  const [cardEmail, onChangeText5] = React.useState("");
  const [escemail, onChangeText8] = React.useState("");
  const [checkbox, setCheckbox] = React.useState(false);
  const [checkbox1, setCheckbox1] = React.useState(false);


  function onMultiChange() {
    return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
  }

  // const [selectedTeam, setSelectedTeam] = useState({})
  const [selectedItems, onSelectedItemsChange] = useState([])
  function onChange() {
    return (val) => setSelectedTeam(val)
  }
  const handleClick = () => {
    // props.history.push("/taskDtl");
    props.navigation.navigate('taskDtl')
  }

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
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.mainHeaderOuter}>
        <LinearGradient
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          colors={['#0e558d', '#084677']}
          style={styles.mainHeader}>
          <View style={styles.backMenuDiv}>
            <TouchableOpacity style={styles.backBtnDiv} onPress={handleClick}>
              <Image source={require('../assets/img/backArrow1.png')} style={[styles.arrowBtn, styles.arrowBtnLight]} />
            </TouchableOpacity>
          </View>
          <Text style={styles.headerTitle}>Task Types Edit</Text>
        </LinearGradient>
      </View>
      <ScrollView contentContainerStyle={styles.outerContainer}>
        <View style={styles.mainBoxOuter}>
          <View style={styles.fixInfoDiv}>
            <View style={styles.mainBody}>
              <View style={styles.centerBoxNo}>
                <View style={styles.centerBox}>
                  {/* <Text style={[styles.mainTitle, styles.blackText]}>Edit Company Details</Text> */}
                  {/* <Text style={[styles.subTitle, styles.greyText]}>Please fill the detail  below if you want to add card</Text> */}
                </View>
                <View style={styles.formOuter}>
                  <View style={styles.formGroupDiv}>
                    <View style={styles.formGroupNew}>
                      <Text style={styles.formLabelNew}>Type Code</Text>
                      <TextInput
                        style={styles.formControlNew}
                        value={typeCode}
                        onChangeText={onChangeText}
                        placeholder=""
                        placeholderTextColor="#fbfbfb"
                      />
                    </View>
                  </View>
                  <View style={styles.formGroupDiv}>
                    <View style={styles.formGroupNew}>
                      <Text style={styles.formLabelNew}>Display Name</Text>
                      <TextInput
                        style={styles.formControlNew}
                        value={displayName}
                        onChangeText={onChangeText1}
                        placeholder=""
                        placeholderTextColor="#fbfbfb"
                      />
                    </View>
                  </View>
                  <View style={styles.formGroupDiv}>
                    <View style={styles.formGroupNew}>
                      <Text style={styles.formLabelNew}>Company</Text>
                      <View style={styles.selectDrop}>
                        <Dropdown
                          style={[styles.dropdown, isFocus && { borderColor: '#0e558d' }]}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          data={data}
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
                      <Text style={styles.formLabelNew}>Sequence</Text>
                      <TextInput
                        style={styles.formControlNew}
                        value={cardSeq}
                        onChangeText={onChangeText2}
                        placeholder=""
                        placeholderTextColor="#fbfbfb"
                      />
                    </View>
                  </View>
                  <View style={styles.formGroupDiv}>
                    <View style={styles.formGroupNew}>
                      <Text style={styles.formLabelNew}>Active</Text>
                      <View style={styles.selectDrop}>
                        <Dropdown
                          style={[styles.dropdown, isFocus1 && { borderColor: '#0e558d' }]}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          data={data1}
                          dropdownPosition='bottom'
                          search
                          maxHeight={200}
                          labelField="label"
                          valueField="value"
                          placeholder={!isFocus1 ? 'Select item' : '...'}
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
                  </View>
                  <View style={styles.formGroupDiv}>
                    <View style={styles.formGroupNew}>
                      <Text style={styles.formLabelNew}>Contact Email</Text>
                      <TextInput
                        style={styles.formControlNew}
                        value={cardEmail}
                        onChangeText={onChangeText5}
                        placeholder=""
                        placeholderTextColor="#fbfbfb"
                      />
                    </View>
                  </View>
                  <View style={styles.formGroupDiv}>
                    <View style={styles.formGroupNew}>
                      <Text style={styles.formLabelNew}>Provider</Text>
                      <View style={styles.selectDrop}>
                        <Dropdown
                          style={[styles.dropdown, isFocus2 && { borderColor: '#0e558d' }]}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          data={data2}
                          dropdownPosition='bottom'
                          search
                          maxHeight={200}
                          labelField="label"
                          valueField="value"
                          placeholder={!isFocus2 ? 'Select item' : '...'}
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
                    <View style={styles.formGroupNew}>
                      <Text style={styles.formLabelNew}>Cell</Text>
                      <TextInput
                        style={styles.formControlNew}
                        value={cell}
                        onChangeText={onChangeText4}
                        placeholder=""
                        placeholderTextColor="#fbfbfb"
                      />
                    </View>
                  </View>
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
                          data={data4}
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
                  {/* <View>
                  <SectionedMultiSelect
                    items={items}
                    IconRenderer={Icon}
                    uniqueKey="id"
                    subKey="children"
                    selectText="Assign Manager"
                    showDropDowns={true}
                    readOnlyHeadings={true}
                    onSelectedItemsChange={(selectedItems )=>{
                      onSelectedItemsChange(selectedItems ) 
                    }}
                    selectedItems={selectedItems}
                  />
                </View> */}
                  <View style={styles.formGroupDiv}>
                    <View style={[styles.formCheckGroupDiv, styles.mr10]}>
                      <View style={[styles.formGroupSimple, styles.checkBoxDiv,]}>
                        <CheckBox checkedCheckBoxColor='#0d568f' uncheckedCheckBoxColor='#cccccc' onClick={() => {
                          setCheckbox(!checkbox)
                        }} isChecked={checkbox} />
                        <Text style={styles.checkBoxTitle}>Web Enable </Text>
                      </View>
                    </View>
                    <View style={[styles.formCheckGroupDiv]}>
                      <View style={[styles.formGroupSimple, styles.checkBoxDiv,]}>
                        <CheckBox checkedCheckBoxColor='#0d568f' uncheckedCheckBoxColor='#cccccc' onClick={() => {
                          setCheckbox1(!checkbox1)
                        }} isChecked={checkbox1} />
                        <Text style={styles.checkBoxTitle}>Cell Notification</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.formGroupDiv}>
                    <View style={styles.formGroupNew}>
                      <Text style={styles.formLabelNew}>Description</Text>
                      <TextInput
                        style={styles.textArea}
                        value={description}
                        onChangeText={onChangeText9}
                        placeholder=""
                        placeholderTextColor="#fbfbfb"
                        underlineColorAndroid="transparent"
                        numberOfLines={8}
                        multiline={true}
                      />
                    </View>
                  </View>
                  <Text style={styles.headerTitle2}>Escalation</Text>
                  <View style={styles.formGroupDiv}>
                    <View style={styles.formGroupNew}>
                      <Text style={styles.formLabelNew}>Period</Text>
                      <View style={styles.selectDrop}>
                        <Dropdown
                          style={[styles.dropdown, isFocus3 && { borderColor: '#0e558d' }]}
                          placeholderStyle={styles.placeholderStyle}
                          selectedTextStyle={styles.selectedTextStyle}
                          inputSearchStyle={styles.inputSearchStyle}
                          data={data3}
                          dropdownPosition='bottom'
                          search
                          maxHeight={200}
                          labelField="label"
                          valueField="value"
                          placeholder={!isFocus3 ? 'Select item' : '...'}
                          searchPlaceholder="Search..."
                          value={value}
                          onFocus={() => setIsFocus3(true)}
                          onBlur={() => setIsFocus3(false)}
                          onChange={item => {
                            setValue3(item.value);
                            setIsFocus3(false);
                          }}
                        />
                      </View>
                    </View>
                  </View>

                  <View style={styles.formGroupDiv}>
                    <View style={styles.formGroupNew}>
                      <Text style={styles.formLabelNew}>Escalation Email</Text>
                      <TextInput
                        style={styles.formControlNew}
                        value={escemail}
                        onChangeText={onChangeText8}
                        placeholder=""
                        placeholderTextColor="#fbfbfb"
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
    paddingVertical: 24,
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

export default TaskEdt