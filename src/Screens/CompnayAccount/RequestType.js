import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const requestTypeData = [
  {
    title: 'Appliance',
  },
  {
    title: 'Air Condition',
  },
];

const RequestType = props => {
  
  const editProperty = () => {
    props.navigation.navigate('editRequestType');
  };

  const addCardClick = () => {
    props.navigation.navigate('addRequestType');
  };

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <StatusBar translucent backgroundColor="transparent" />
      <ScrollView contentContainerStyle={styles.outerContainer}>
        <View style={styles.mainBoxOuter}>
          <View style={styles.fixInfoDiv}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: '10%',
              }}>
              <Text style={[styles.mainTitle, styles.greyText]}>Total(2)</Text>
            </View>
            <View>
              <FlatList
                data={requestTypeData}
                renderItem={({item, index}) => {
                  return (
                    <View
                      key={index}
                      style={styles.proprtyCardItem}
                      backgroundColor={'#f4f7ff87'}>
                      <View style={styles.proprtyCardCol}>
                        <View style={styles.proprtyCardRow}>
                          <View style={[styles.proprtyCardRight]}>
                            <View
                              style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                borderBottomWidth: 1,
                                alignItems: 'center',
                                borderColor: '#c3c9cc',
                              }}>
                              <Text
                                style={[
                                  styles.mediumTitle,
                                  styles.pt8,
                                  styles.textBlue,
                                  {fontSize: 15},
                                ]}>
                                # {index + 1}
                              </Text>
                              <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity
                                  style={{marginRight: 8}}
                                  onPress={editProperty}>
                                  <Feather
                                    name={'edit-2'}
                                    color={'#0d568f'}
                                    size={20}
                                  />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                  <AntDesign
                                    name={'delete'}
                                    color={'#0d568f'}
                                    size={20}
                                  />
                                </TouchableOpacity>
                              </View>
                            </View>
                            <Text
                              style={[
                                styles.mediumTitle,
                                styles.pt8,
                                styles.textBlue,
                              ]}>
                              Title
                            </Text>
                            <Text style={[styles.py7, {color: '#707070'}]}>
                              {item.title}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={[styles.addBtnDiv]} onPress={addCardClick}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#0e558d', '#084677']}
          style={[styles.addBtnBig, {justifyContent: 'center'}]}>
          <Text style={[styles.addBtnTextBig]}>+</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default RequestType;

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    position: 'relative',
    fontFamily: 'Montserrat-Regular',
  },
  greyText: {
    fontSize: 16,
    color: '#777777',
  },
  mainBoxOuter: {
    flex: 1,
  },
  mainTitle: {
    fontSize: 18,
    color: '#ffffff',
    fontFamily: 'Montserrat-SemiBold',
  },
  fixInfoDiv: {
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset: {width: 1, height: 8},
    shadowOpacity: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 6,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: -20,
  },
  textBlue: {
    color: '#0d568f',
  },
  mediumTitle: {
    fontSize: 13,
    color: '#000',
    fontFamily: 'Montserrat-Bold',
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
  proprtyCardItem: {
    marginTop: 24,
    backgroundColor: '#eaf8ff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#c3c9cc',
  },
  proprtyCardCol: {
    marginHorizontal: -12,
    position: 'relative',
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
  addBtnDiv: {
    position: 'absolute',
    borderRadius: 50,
    right: 20,
    bottom: 20,
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
});
