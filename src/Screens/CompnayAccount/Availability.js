import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from 'react-native-check-box';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

const data = [
  {label: '9:00 AM', value: '1'},
  {label: '8:00 PM', value: '2'},
  {label: '3:00 PM', value: '3'},
  {label: '2:30 PM', value: '4'},
];
const Availability = () => {
  const [value, setValue] = useState(null);
  const [weekDay, setWeekDay] = useState([]);
  const [Week, setWeek] = useState([
    {
      key: 0,
      start: null,
      end: null,
    },
  ]);
  const [checkbox, setCheckbox] = useState({
    Sun: true,
    Mon: true,
    Tue: true,
    Wed: true,
    Thu: true,
    Fri: true,
    Sat: true,
  });

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
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
          style={{
            marginTop: '5%',
            flexDirection: 'row',
            marginHorizontal: '4%',
          }}>
          <CheckBox
            style={{marginTop: 2}}
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
          style={{
            flexDirection: 'row',
            marginHorizontal: '4%',
            marginTop: '5%',
          }}>
          <View style={{flexDirection: 'row'}}>
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
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
            />
          </View>
          <View style={{marginLeft: '3%'}}>
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
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
            />
          </View>
          <TouchableOpacity>
            <AntDesign
              name={'plussquareo'}
              color={'gray'}
              size={35}
              style={{marginLeft: 15}}
            />
              {/* <AntDesign
              name={'minussquareo'}
              color={'gray'}
              size={35}
              style={{marginLeft: 15}}
            /> */}
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: '4%',
          }}>
          <CheckBox
            style={{marginTop: 2}}
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
          style={{
            flexDirection: 'row',
            marginHorizontal: '4%',
            marginTop: '5%',
          }}>
          <View style={{flexDirection: 'row'}}>
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
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
            />
          </View>
          <View style={{marginLeft: '3%'}}>
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
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
            />
          </View>
          <TouchableOpacity>
            <AntDesign
              name={'plussquareo'}
              color={'gray'}
              size={35}
              style={{marginLeft: 15}}
            />
            {/* <AntDesign
              name={'minussquareo'}
              color={'gray'}
              size={35}
              style={{marginLeft: 15}}
            /> */}
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: '4%',
          }}>
          <CheckBox
            style={{marginTop: 2}}
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
          style={{
            flexDirection: 'row',
            marginHorizontal: '4%',
            marginTop: '5%',
          }}>
          <View style={{flexDirection: 'row'}}>
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
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
            />
          </View>
          <View style={{marginLeft: '3%'}}>
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
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
            />
          </View>
          <TouchableOpacity>
            <AntDesign
              name={'plussquareo'}
              color={'gray'}
              size={35}
              style={{marginLeft: 15}}
            />
            {/* <AntDesign
              name={'minussquareo'}
              color={'gray'}
              size={35}
              style={{marginLeft: 15}}
            /> */}
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: '4%',
          }}>
          <CheckBox
            style={{marginTop: 2}}
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
          style={{
            flexDirection: 'row',
            marginHorizontal: '4%',
            marginTop: '5%',
          }}>
          <View style={{flexDirection: 'row'}}>
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
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
            />
          </View>
          <View style={{marginLeft: '3%'}}>
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
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
            />
          </View>
          <TouchableOpacity>
            <AntDesign
              name={'plussquareo'}
              color={'gray'}
              size={35}
              style={{marginLeft: 15}}
            />
            {/* <AntDesign
              name={'minussquareo'}
              color={'gray'}
              size={35}
              style={{marginLeft: 15}}
            /> */}
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: '4%',
          }}>
          <CheckBox
            style={{marginTop: 2}}
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
          style={{
            flexDirection: 'row',
            marginHorizontal: '4%',
            marginTop: '5%',
          }}>
          <View style={{flexDirection: 'row'}}>
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
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
            />
          </View>
          <View style={{marginLeft: '3%'}}>
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
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
            />
          </View>
          <TouchableOpacity>
            <AntDesign
              name={'plussquareo'}
              color={'gray'}
              size={35}
              style={{marginLeft: 15}}
            />
            {/* <AntDesign
              name={'minussquareo'}
              color={'gray'}
              size={35}
              style={{marginLeft: 15}}
            /> */}
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: '4%',
          }}>
          <CheckBox
            style={{marginTop: 2}}
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
          style={{
            flexDirection: 'row',
            marginHorizontal: '4%',
            marginTop: '5%',
          }}>
          <View style={{flexDirection: 'row'}}>
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
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
            />
          </View>
          <View style={{marginLeft: '3%'}}>
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
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
            />
          </View>
          <TouchableOpacity>
            <AntDesign
              name={'plussquareo'}
              color={'gray'}
              size={35}
              style={{marginLeft: 15}}
            />
            {/* <AntDesign
              name={'minussquareo'}
              color={'gray'}
              size={35}
              style={{marginLeft: 15}}
            /> */}
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: '4%',
          }}>
          <CheckBox
            style={{marginTop: 2}}
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
          style={{
            flexDirection: 'row',
            marginHorizontal: '4%',
            marginTop: '5%',
          }}>
          <View style={{flexDirection: 'row'}}>
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
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
            />
          </View>
          <View style={{marginLeft: '3%'}}>
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
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
            />
          </View>
          <TouchableOpacity>
            <AntDesign
              name={'plussquareo'}
              color={'gray'}
              size={35}
              style={{marginLeft: 15}}
            />
            {/* <AntDesign
              name={'minussquareo'}
              color={'gray'}
              size={35}
              style={{marginLeft: 15}}
            /> */}
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{marginTop: 25,marginHorizontal:'4%',paddingBottom:'5%'}}>
        <TouchableOpacity>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#0e558d', '#084677']}
            style={[styles.btnDefault]}>
            <Text style={styles.TextStyle}>Submit</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Availability;

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
    width: 150,
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
});
