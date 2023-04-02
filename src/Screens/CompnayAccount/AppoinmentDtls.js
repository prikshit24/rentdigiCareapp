import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AppoinmentDtls = props => {
  const [addLayout, setAddLayout] = useState('');

  const handleClick = () => {
    // props.navigation.navigate('propertylayout');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <StatusBar translucent backgroundColor="transparent" />
      <View>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#0e558d', '#084677']}
          style={styles.mainHeader}>
          <View style={styles.backMenuDiv}>
            <TouchableOpacity style={styles.backBtnDiv} onPress={handleClick}>
              <Ionicons name={'chevron-back-sharp'} color={'#fff'} size={30} />
            </TouchableOpacity>
          </View>
          <Text style={styles.headerTitle}>Appointment Detail</Text>
        </LinearGradient>
      </View>
      <ScrollView contentContainerStyle={styles.outerContainer}>
        <View style={styles.mainBoxOuter}>
          <View>
            <View style={styles.mainBody}>
              <View>
                <View>
                  <View style={{marginTop: 2}}>
                    <Text style={[styles.txtInputStyle]}>Request From</Text>
                    <View style={{marginTop: 10}}>
                      <Text style={styles.formControlNew}>
                        Pankaj Sharma test
                      </Text>
                    </View>
                  </View>
                  <View style={{marginTop: 2}}>
                    <Text style={[styles.txtInputStyle]}>Reason Type</Text>
                    <View style={{marginTop: 10}}>
                      <Text style={styles.formControlNew}>Document Submit</Text>
                    </View>
                  </View>
                  <View style={{marginTop: 2}}>
                    <Text style={[styles.txtInputStyle]}>Property</Text>
                    <View style={{marginTop: 10}}>
                      <Text style={styles.formControlNew}>Nova Villa demo</Text>
                    </View>
                  </View>
                  <View style={{marginTop: 2}}>
                    <Text style={[styles.txtInputStyle]}>Property Manager</Text>
                    <View style={{marginTop: 10}}>
                      <Text style={styles.formControlNew}>Pankaj Sharma</Text>
                    </View>
                  </View>
                  <View style={{marginTop: 2}}>
                    <Text style={[styles.txtInputStyle]}>Layout Type</Text>
                    <View style={{marginTop: 10}}>
                      <Text style={styles.formControlNew}>2 bed + 2 bath</Text>
                    </View>
                  </View>
                  <View style={{marginTop: 2}}>
                    <Text style={[styles.txtInputStyle]}>Phone</Text>
                    <View style={{marginTop: 10}}>
                      <Text style={styles.formControlNew}>9816922898</Text>
                    </View>
                  </View>
                  <View style={{marginTop: 2}}>
                    <Text style={[styles.txtInputStyle]}>Email</Text>
                    <View style={{marginTop: 10}}>
                      <Text style={styles.formControlNew}>
                        pankajsharmaduple2022@gmail.com
                      </Text>
                    </View>
                  </View>
                  <View style={{marginTop: 2}}>
                    <Text style={[styles.txtInputStyle]}>Comment</Text>
                    <View style={{marginTop: 10}}>
                      <Text style={styles.formControlNew}>Document one</Text>
                    </View>
                  </View>
                  <View style={{marginTop: 2}}>
                    <Text style={[styles.txtInputStyle]}>Appointment Date</Text>
                    <View style={{marginTop: 10}}>
                      <Text style={styles.formControlNew}>2023-02-06</Text>
                    </View>
                  </View>
                  <View style={{marginTop: 2}}>
                    <Text style={[styles.txtInputStyle]}>Slot Time</Text>
                    <View style={{marginTop: 10}}>
                      <Text style={styles.formControlNew}>
                        1:00 PM - 1:30 PM
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity>
                    <Text style={styles.btnStyle}>Close</Text>
                  </TouchableOpacity>
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
  btnStyle: {
    fontSize: 16,
    color: '#707070',
    height: 50,
    borderWidth: 1,
    borderColor: '#707070',
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: 'transparent',
    fontFamily: 'Montserrat-Regular',
    paddingTop: 14,
    backgroundColor: '#e9e9ef',
    marginTop:"5%",
    justifyContent:'flex-end',
    width:'40%',
    textAlign:'center',
    marginLeft:"60%"
  },
  formControlNew: {
    fontSize: 14,
    color: '#707070',
    height: 50,
    borderWidth: 1,
    borderColor: '#707070',
    paddingBottom: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: 'transparent',
    fontFamily: 'Montserrat-Regular',
    minWidth: '100%',
    paddingTop: 14,
    backgroundColor: '#e9e9ef',
  },
  txtInputStyle: {
    fontSize: 17,
    color: '#000',
    fontFamily: 'Montserrat-Bold',
  },
  outerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    position: 'relative',
    minHeight: '100%',
    fontFamily: 'Montserrat-Regular',
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

export default AppoinmentDtls;
