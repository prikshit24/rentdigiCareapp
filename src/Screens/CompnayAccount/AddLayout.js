import React, { useState } from 'react';
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

import jwtdecode from 'jwt-decode';
import api from '../../Constants/API';
import PostMethode from '../../Constants/PostMethode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from "@react-navigation/native";

const AddLayout = props => {

  const [postData] = PostMethode();
  const [message, setMessage] = useState('');
  const [token, setToken] = useState(null);
  const [jwtData, setJwtData] = useState(false);


  const [addLayout, setAddLayout] = useState('');

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
        } catch (error) { }
      });
    }, [props.route])
  );

  const handleAdd = async () => {
    if (addLayout == '') {
      setMessage('Layout Name is required!')
      return;
    }
    let data = {
      layoutName: addLayout,
      layoutOf: jwtData.id
    };
    postData(`${api.ADD_LAYOUT}`, data, token).then((res) => {
      // alert(JSON.stringify(res.data))
      if (res.data.status == 201) {
        setMessage('');
        setAddLayout('');
        props.navigation.navigate('propertylayout');
      }
    })
      .catch(async (err) => {
        alert(JSON.stringify(err))
      });
  };

  const handleClick = () => {
    props.navigation.navigate('propertylayout');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <StatusBar translucent backgroundColor="transparent" />
      <View>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#0e558d', '#084677']}
          style={styles.mainHeader}>
          <View style={styles.backMenuDiv}>
            <TouchableOpacity style={styles.backBtnDiv} onPress={handleClick}>
              <Ionicons name={'chevron-back-sharp'} color={'#fff'} size={30} />
            </TouchableOpacity>
          </View>
          <Text style={styles.headerTitle}>Add Layout</Text>
        </LinearGradient>
      </View>
      <ScrollView contentContainerStyle={styles.outerContainer}>
        <View style={styles.mainBoxOuter}>
          <View>
            <View style={styles.mainBody}>
              <View>
                <View>
                  <View style={{ marginTop: 2 }}>
                    <Text style={[styles.txtInputStyle]}>Layout Name*</Text>
                    <View style={{ marginTop: 10 }}>
                      <TextInput
                        style={styles.formControlNew}
                        onChangeText={addLayout => setAddLayout(addLayout)}
                        value={addLayout}
                        placeholder="Enter Layout Name"
                        placeholderTextColor="#707070"
                      />
                      {message && <Text style={styles.errorMsg}>{message}</Text>}
                    </View>
                  </View>
                  <View style={{ marginTop: 25 }}>
                    <TouchableOpacity onPress={handleAdd}>
                      <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={['#0e558d', '#084677']}
                        style={[styles.btnDefault]}>
                        <Text style={styles.TextStyle}>Save</Text>
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
  errorMsg: {
    color: '#ff0000'
  }
});

export default AddLayout;
