import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import CheckBox from 'react-native-check-box';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

const data = [
  { label: '12:00 AM', value: '12:00 AM' },
  { label: '12:30 AM', value: '12:30 AM' },
  { label: '1:00 AM', value: '1:00 AM' },
  { label: '1:30 AM', value: '1:30 AM' },
  { label: '2:00 AM', value: '2:00 AM' },
  { label: '2:30 AM', value: '2:30 AM' },
  { label: '3:00 AM', value: '3:00 AM' },
  { label: '3:30 AM', value: '3:30 AM' },
  { label: '4:00 AM', value: '4:00 AM' },
  { label: '4:30 AM', value: '4:30 AM' },
  { label: '5:00 AM', value: '5:00 AM' },
  { label: '5:30 AM', value: '5:30 AM' },
  { label: '6:00 AM', value: '6:00 AM' },
  { label: '6:30 AM', value: '6:30 AM' },
  { label: '7:00 AM', value: '7:00 AM' },
  { label: '7:30 AM', value: '7:30 AM' },
  { label: '8:00 AM', value: '8:00 AM' },
  { label: '8:30 AM', value: '8:30 AM' },
  { label: '9:00 AM', value: '9:00 AM' },
  { label: '9:30 AM', value: '9:30 AM' },
  { label: '10:00 AM', value: '10:00 AM' },
  { label: '10:30 AM', value: '10:30 AM' },
  { label: '11:00 AM', value: '11:00 AM' },
  { label: '11:30 AM', value: '11:30 AM' },

  { label: '12:00 PM', value: '12:00 PM' },
  { label: '12:30 PM', value: '12:30 PM' },
  { label: '1:00 PM', value: '1:00 PM' },
  { label: '1:30 PM', value: '1:30 PM' },
  { label: '2:00 PM', value: '2:00 PM' },
  { label: '2:30 PM', value: '2:30 PM' },
  { label: '3:00 PM', value: '3:00 PM' },
  { label: '3:30 PM', value: '3:30 PM' },
  { label: '4:00 PM', value: '4:00 PM' },
  { label: '4:30 PM', value: '4:30 PM' },
  { label: '5:00 PM', value: '5:00 PM' },
  { label: '5:30 PM', value: '5:30 PM' },
  { label: '6:00 PM', value: '6:00 PM' },
  { label: '6:30 PM', value: '6:30 PM' },
  { label: '7:00 PM', value: '7:00 PM' },
  { label: '7:30 PM', value: '7:30 PM' },
  { label: '8:00 PM', value: '8:00 PM' },
  { label: '8:30 PM', value: '8:30 PM' },
  { label: '9:00 PM', value: '9:00 PM' },
  { label: '9:30 PM', value: '9:30 PM' },
  { label: '10:00 PM', value: '10:00 PM' },
  { label: '10:30 PM', value: '10:30 PM' },
  { label: '11:00 PM', value: '11:00 PM' },
  { label: '11:30 PM', value: '11:30 PM' },
];
const CalendarAvailability = () => {

  const [checkbox, setCheckbox] = useState({
    Sun: true,
    Mon: true,
    Tue: true,
    Wed: true,
    Thu: true,
    Fri: true,
    Sat: true,
  });

  const [sun, setSun] = useState({
    start: '', end: ''
  })
  const [mon, setMon] = useState({
    start: '', end: ''
  })
  const [tue, setTue] = useState({
    start: '', end: ''
  })
  const [wed, setWed] = useState({
    start: '', end: ''
  })
  const [thu, setThu] = useState({
    start: '', end: ''
  })
  const [fri, setFri] = useState({
    start: '', end: ''
  })
  const [sat, setSat] = useState({
    start: '', end: ''
  })

  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <ScrollView>
        <View
          style={{
            marginTop: '3%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginHorizontal: '4%',
          }}>
          <Text style={[styles.txtStyle]}>Set your weekly hours</Text>
        </View>
        <View
          style={[styles.checkboxContainer]}>
          <CheckBox
            style={{ marginTop: 2 }}
            checkedCheckBoxColor="#0d568f"
            uncheckedCheckBoxColor="#707070"
            isChecked={checkbox.Sun}
            onClick={() => {
              setCheckbox({
                ...checkbox,
                Sun: !checkbox.Sun,
              });
            }}
          />
          <Text style={[styles.textStyle]}>Sunday</Text>
        </View>
        <View
          style={[styles.dropDownContainer]}>
          {checkbox.Sun ?
            <>
              <View style={{ width: '40%' }}>
                <Dropdown
                  style={[styles.dropdown]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  placeholder="9:00 AM"
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  value={sun.start}
                  onChange={item => {
                    setSun({ ...sun, start: item.value });
                  }}
                />
              </View>
              <View style={{ marginLeft: '3%', width: '40%' }}>
                <Dropdown
                  style={[styles.dropdown]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  placeholder="9:00 AM"
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  value={sun.end}
                  onChange={item => {
                    setSun({ ...sun, end: item.value });
                  }}
                />
              </View>
              <TouchableOpacity>
                <AntDesign
                  name={'plussquareo'}
                  color={'gray'}
                  size={35}
                  style={{ marginLeft: 15 }}
                />
                {/* <AntDesign
                name={'minussquareo'}
                color={'gray'}
                size={35}
                style={{marginLeft: 15}}
              /> */}
              </TouchableOpacity>
            </>
            :
            <Text style={[styles.unAvailText]}>Un Available</Text>
          }
        </View>
        <View
          style={[styles.checkboxContainer]}>
          <CheckBox
            style={{ marginTop: 2 }}
            checkedCheckBoxColor="#0d568f"
            uncheckedCheckBoxColor="#707070"
            isChecked={checkbox.Mon}
            onClick={() => {
              setCheckbox({
                ...checkbox,
                Mon: !checkbox.Mon,
              });
            }}
          />
          <Text style={[styles.textStyle]}>Monday</Text>
        </View>
        <View
          style={[styles.dropDownContainer]}>
          {checkbox.Mon ?
            <>
              <View style={{ width: '40%' }}>
                <Dropdown
                  style={[styles.dropdown]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  placeholder="9:00 AM"
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  value={mon.start}
                  onChange={item => {
                    setMon({ ...mon, start: item.value });
                  }}
                />
              </View>
              <View style={{ marginLeft: '3%', width: '40%' }}>
                <Dropdown
                  style={[styles.dropdown]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  placeholder="9:00 AM"
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  value={mon.end}
                  onChange={item => {
                    setMon({ ...mon, end: item.value });
                  }}
                />
              </View>
              <TouchableOpacity>
                <AntDesign
                  name={'plussquareo'}
                  color={'gray'}
                  size={35}
                  style={{ marginLeft: 15 }}
                />
                {/* <AntDesign
                name={'minussquareo'}
                color={'gray'}
                size={35}
                style={{marginLeft: 15}}
              /> */}
              </TouchableOpacity>
            </> :
            <Text style={[styles.unAvailText]}>Un Available</Text>
          }
        </View>
        <View
          style={[styles.checkboxContainer]}>
          <CheckBox
            style={{ marginTop: 2 }}
            checkedCheckBoxColor="#0d568f"
            isChecked={checkbox.Tue}
            onClick={() => {
              setCheckbox({
                ...checkbox,
                Tue: !checkbox.Tue,
              });
            }}
          />
          <Text style={[styles.textStyle]}>Tuesday</Text>
        </View>
        <View
          style={[styles.dropDownContainer]}>
          {checkbox.Tue ?
            <>
              <View style={{ width: '40%' }}>
                <Dropdown
                  style={[styles.dropdown]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  placeholder="9:00 AM"
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  value={tue.start}
                  onChange={item => {
                    setTue({ ...tue, start: item.value });
                  }}
                />
              </View>
              <View style={{ marginLeft: '3%', width: '40%' }}>
                <Dropdown
                  style={[styles.dropdown]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  placeholder="9:00 AM"
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  value={tue.end}
                  onChange={item => {
                    setTue({ ...tue, end: item.value });
                  }}
                />
              </View>
              <TouchableOpacity>
                <AntDesign
                  name={'plussquareo'}
                  color={'gray'}
                  size={35}
                  style={{ marginLeft: 15 }}
                />
                {/* <AntDesign
                name={'minussquareo'}
                color={'gray'}
                size={35}
                style={{marginLeft: 15}}
              /> */}
              </TouchableOpacity>
            </> :
            <Text style={[styles.unAvailText]}>Un Available</Text>
          }
        </View>
        <View
          style={[styles.checkboxContainer]}>
          <CheckBox
            style={{ marginTop: 2 }}
            checkedCheckBoxColor="#0d568f"
            uncheckedCheckBoxColor="#707070"
            isChecked={checkbox.Wed}
            onClick={() => {
              setCheckbox({
                ...checkbox,
                Wed: !checkbox.Wed,
              });
            }}
          />
          <Text style={[styles.textStyle]}>Wednesday</Text>
        </View>
        <View
          style={[styles.dropDownContainer]}>
          {checkbox.Wed ?
            <>
              <View style={{ width: '40%' }}>
                <Dropdown
                  style={[styles.dropdown]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  placeholder="9:00 AM"
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  value={wed.start}
                  onChange={item => {
                    setWed({ ...wed, start: item.value });
                  }}
                />
              </View>
              <View style={{ marginLeft: '3%', width: '40%' }}>
                <Dropdown
                  style={[styles.dropdown]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  placeholder="9:00 AM"
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  value={wed.end}
                  onChange={item => {
                    setWed({ ...wed, end: item.value });
                  }}
                />
              </View>
              <TouchableOpacity>
                <AntDesign
                  name={'plussquareo'}
                  color={'gray'}
                  size={35}
                  style={{ marginLeft: 15 }}
                />
                {/* <AntDesign
                name={'minussquareo'}
                color={'gray'}
                size={35}
                style={{marginLeft: 15}}
              /> */}
              </TouchableOpacity>
            </> :
            <Text style={[styles.unAvailText]}>Un Available</Text>
          }
        </View>
        <View
          style={[styles.checkboxContainer]}>
          <CheckBox
            style={{ marginTop: 2 }}
            checkedCheckBoxColor="#0d568f"
            uncheckedCheckBoxColor="#707070"
            isChecked={checkbox.Thu}
            onClick={() => {
              setCheckbox({
                ...checkbox,
                Thu: !checkbox.Thu,
              });
            }}
          />
          <Text style={[styles.textStyle]}>Thursday</Text>
        </View>
        <View
          style={[styles.dropDownContainer]}>
          {checkbox.Thu ?
            <>
              <View style={{ width: '40%' }}>
                <Dropdown
                  style={[styles.dropdown]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  placeholder="9:00 AM"
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  value={thu.start}
                  onChange={item => {
                    setThu({ ...thu, start: item.value });
                  }}
                />
              </View>
              <View style={{ marginLeft: '3%', width: '40%' }}>
                <Dropdown
                  style={[styles.dropdown]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  placeholder="9:00 AM"
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  value={thu.end}
                  onChange={item => {
                    setThu({ ...thu, end: item.value });
                  }}
                />
              </View>
              <TouchableOpacity>
                <AntDesign
                  name={'plussquareo'}
                  color={'gray'}
                  size={35}
                  style={{ marginLeft: 15 }}
                />
                {/* <AntDesign
                name={'minussquareo'}
                color={'gray'}
                size={35}
                style={{marginLeft: 15}}
              /> */}
              </TouchableOpacity>
            </> :
            <Text style={[styles.unAvailText]}>Un Available</Text>
          }
        </View>
        <View
          style={[styles.checkboxContainer]}>
          <CheckBox
            style={{ marginTop: 2 }}
            checkedCheckBoxColor="#0d568f"
            uncheckedCheckBoxColor="#707070"
            isChecked={checkbox.Fri}
            onClick={() => {
              setCheckbox({
                ...checkbox,
                Fri: !checkbox.Fri,
              });
            }}
          />
          <Text style={[styles.textStyle]}>Friday</Text>
        </View>
        <View
          style={[styles.dropDownContainer]}>
          {checkbox.Fri ?
            <>
              <View style={{ width: '40%' }}>
                <Dropdown
                  style={[styles.dropdown]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  placeholder="9:00 AM"
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  value={fri.start}
                  onChange={item => {
                    setFri({ ...fri, start: item.value });
                  }}
                />
              </View>
              <View style={{ marginLeft: '3%', width: '40%' }}>
                <Dropdown
                  style={[styles.dropdown]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  placeholder="9:00 AM"
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  value={fri.end}
                  onChange={item => {
                    setFri({ ...fri, end: item.value });
                  }}
                />
              </View>
              <TouchableOpacity>
                <AntDesign
                  name={'plussquareo'}
                  color={'gray'}
                  size={35}
                  style={{ marginLeft: 15 }}
                />
                {/* <AntDesign
                name={'minussquareo'}
                color={'gray'}
                size={35}
                style={{marginLeft: 15}}
              /> */}
              </TouchableOpacity>
            </> :
            <Text style={[styles.unAvailText]}>Un Available</Text>
          }
        </View>
        <View
          style={[styles.checkboxContainer]}>
          <CheckBox
            style={{ marginTop: 2 }}
            checkedCheckBoxColor="#0d568f"
            uncheckedCheckBoxColor="#707070"
            isChecked={checkbox.Sat}
            onClick={() => {
              setCheckbox({
                ...checkbox,
                Sat: !checkbox.Sat,
              });
            }}
          />
          <Text style={[styles.textStyle]}>Saturday</Text>
        </View>
        <View
          style={[styles.dropDownContainer]}>
          {checkbox.Sat ?
            <>
              <View style={{ width: '40%' }}>
                <Dropdown
                  style={[styles.dropdown]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  placeholder="9:00 AM"
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  value={sat.start}
                  onChange={item => {
                    setSat({ ...sat, start: item.value });
                  }}
                />
              </View>
              <View style={{ marginLeft: '3%', width: '40%' }}>
                <Dropdown
                  style={[styles.dropdown]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  placeholder="9:00 AM"
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  value={sat.end}
                  onChange={item => {
                    setSat({ ...sat, end: item.value });
                  }}
                />
              </View>
              <TouchableOpacity>
                <AntDesign
                  name={'plussquareo'}
                  color={'gray'}
                  size={35}
                  style={{ marginLeft: 15 }}
                />
                {/* <AntDesign
                name={'minussquareo'}
                color={'gray'}
                size={35}
                style={{marginLeft: 15}}
              /> */}
              </TouchableOpacity>
            </> :
            <Text style={[styles.unAvailText]}>Un Available</Text>
          }
        </View>
      </ScrollView>
      <View style={{ marginTop: 25, marginHorizontal: '4%', paddingBottom: '5%' }}>
        <TouchableOpacity>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#0e558d', '#084677']}
            style={[styles.btnDefault]}>
            <Text style={styles.TextStyle}>Submit</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CalendarAvailability;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    color: '#000',
    fontFamily: 'Montserrat-Bold',
    marginLeft: 10,
  },
  dropdown: {
    height: 20,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: '100%',
    height: 40,
  },
  txtStyle: {
    fontSize: 17,
    color: '#000',
    fontFamily: 'Montserrat-Bold',
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
  },

  TextStyle: {
    fontSize: 16,
    color: '#ffffff',
    fontFamily: 'Montserrat-SemiBold',
  },

  checkboxContainer: {
    marginTop: '5%',
    flexDirection: 'row',
    marginHorizontal: '4%',
    alignItems: 'center'
  },
  dropDownContainer: {
    flexDirection: 'row',
    marginHorizontal: '4%',
    marginTop: '2%',
  },
  unAvailText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16
  },
  placeholderStyle:{
    color:'#999'
  },
  selectedTextStyle:{
    color:'#000'
  }
});
