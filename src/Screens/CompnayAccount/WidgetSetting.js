import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Switch,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ColorPicker} from 'react-native-color-picker';

const WidgetSetting = () => {
  const [btnToggle, setBtnToggle] = useState(false);
  const [visible, setVisible] = useState(false);
  const [applicant, setApplicant] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <View
          style={{
            marginTop: '3%',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginHorizontal: '4%',
          }}>
          <Text style={[styles.txtStyle]}>Horizontal Position</Text>
        </View>
        <View style={styles.btnWrapper}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#0d568f',
              width: '43%',
              padding: 10,
              borderRadius: 6,
              backgroundColor: btnToggle ? '#fff' : '#0d568f',
            }}
            onPress={() => setBtnToggle(false)}>
            <Text
              style={{
                textAlign: 'center',
                color: btnToggle ? '#0d568f' : '#fff',
              }}>
              Left
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#0d568f',
              width: '43%',
              padding: 10,
              borderRadius: 6,
              backgroundColor: btnToggle ? '#0d568f' : '#fff',
            }}
            onPress={() => setBtnToggle(true)}>
            <Text
              style={{
                textAlign: 'center',
                color: btnToggle ? '#fff' : '#0d568f',
              }}>
              Right
            </Text>
          </TouchableOpacity>
          <View style={styles.grayBtnContainer}>
            <Text style={{color: '#fff'}}>OR</Text>
          </View>
        </View>
        <View>
          <View
            style={{
              marginTop: 80,
              marginHorizontal: '4%',
            }}>
            <Text style={[styles.txtStyle]}>Buttton Color</Text>
            <TouchableOpacity onPress={() => setVisible(true)}>
              <View
                style={{
                  borderWidth: 1,
                  height: 20,
                  marginTop: 30,
                  width: '40%',
                  borderRadius: 5,
                  borderColor: 'lightgray',
                  position: 'absolute',
                }}>
                <View
                  style={{
                    borderBottomWidth: 2,
                    marginTop: 7,
                    borderColor: '#707070',
                    width: '90%',
                    marginLeft: 4,
                  }}></View>
                <View
                  style={{
                    marginTop: 18,
                    backgroundColor: '#707070',
                    width: '30%',
                    alignItems: 'center',
                    paddingTop: 5,
                    paddingBottom: 5,
                    position: 'relative',
                    height: 40,
                    bottom: 39,
                    left: 103,
                  }}>
                  <FontAwesome
                    name={'pencil'}
                    color={'#fff'}
                    size={20}
                    style={{paddingTop: 4}}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View
            style={{
              marginTop: '20%',
              marginHorizontal: '4%',
              flex: 1,
            }}>
            <Text style={[styles.txtStyle]}>Enable/Disable</Text>
            <Switch
              style={{
                width: 50,
                height: 50,
                marginTop: 4,
                transform: [{scaleX: 1.5}, {scaleY: 1.5}],
              }}
              trackColor={{false: '#707070', true: '#0d568f'}}
              thumbColor={isEnabled ? '#fff' : '#fff'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <View style={{marginTop: 15, marginHorizontal: '4%'}}>
          <Text style={[styles.filtertxtStyle]}>Applicant Button Text</Text>
          <View style={{marginTop: 10}}>
            <TextInput
              style={styles.formControlNew}
              onChangeText={applicant => setApplicant(applicant)}
              value={applicant}
              placeholder="Applicant"
              placeholderTextColor="#707070"
            />
          </View>
        </View>
        <View
          style={[
            styles.mt10,
            {
              flexDirection: 'row',
              marginTop: '5%',
              marginHorizontal: '4%',
            },
          ]}>
          <TouchableOpacity style={[styles.BtnContainer, {marginRight: 10}]}>
            <Text style={[styles.mainTitle, {color: '#fff', fontSize: 16,}]}>
              Save Changes
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.BtnWrapper]}>
            <Text style={[styles.mainTitle, {color: '#fff', fontSize: 16}]}>
              Reset Default
            </Text>
          </TouchableOpacity>
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
                Select  Color
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
            <View style={{flex: 1}}>
              <ColorPicker
                style={{flex: 1}}
                onColorSelected={color => alert(`Color selected: ${color}`)}
                hideSliders
              />
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
              <TouchableOpacity
                style={[styles.filterBtnContainer, {marginRight: 10}]}>
                <Text style={[styles.mainTitle, {color: '#fff', fontSize: 16}]}>
                  Search
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.filterBtnContainer]}>
                <Text style={[styles.mainTitle, {color: '#fff', fontSize: 16}]}>
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

export default WidgetSetting;

const styles = StyleSheet.create({
  txtStyle: {
    fontSize: 17,
    color: '#000',
    fontFamily: 'Montserrat-Bold',
  },
  btnWrapper: {
    marginTop: 20,
    marginHorizontal: '4%',
    paddingBottom: '5%',
    flexDirection: 'row',
    position: 'absolute',
    top: 40,
  },
  btnContainer: {
    borderWidth: 1,
    borderColor: '#0d568f',
    width: '43%',
    padding: 10,
    borderRadius: 6,
  },
  btnText: {
    color: '#0d568f',
    textAlign: 'center',
  },
  grayBtnContainer: {
    position: 'relative',
    borderWidth: 1,
    borderColor: '#707070',
    borderRadius: 30,
    right: 173,
    backgroundColor: '#707070',
    height: 30,
    marginTop: 7,
    paddingHorizontal: 5,
    marginLeft: 1,
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
  filtertxtStyle: {
    fontSize: 17,
    color: '#000',
    fontFamily: 'Montserrat-Bold',
  },
  BtnContainer: {
    paddingHorizontal: 15,
    paddingBottom: 9,
    paddingTop: 9,
    borderRadius: 5,
    backgroundColor: '#0d568f',
  },
  mainTitle: {
    fontSize: 18,
    color: '#ffffff',
    fontFamily: 'Montserrat-SemiBold',
  },
  BtnWrapper: {
    paddingHorizontal: 15,
    paddingBottom: 9,
    paddingTop: 9,
    borderRadius: 5,
    backgroundColor: '#707070',
  },
});
