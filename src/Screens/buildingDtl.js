import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const BuildingDtl = (props) => {
  const handleClick = () => {
    // props.history.push("/buildingArea");
    props.navigation.navigate('buildingArea')
  }
  const handleClick2 = () => {
    // props.history.push("/buildingEdt");
    props.navigation.navigate('buildingEdt')
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <StatusBar translucent backgroundColor="transparent" />
      <View style={styles.mainHeaderOuter}>
        <LinearGradient
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          colors={['#0e558d', '#084677']}
          style={styles.mainHeader}>
          <View style={styles.backMenuDivv}>
            <TouchableOpacity style={styles.backBtnDiv} onPress={handleClick}>
              <Image source={require('../assets/img/backArrow1.png')} style={[styles.arrowBtn, styles.arrowBtnLight]} />
            </TouchableOpacity>
          </View>
          <Text style={styles.headerTitle}>Building Area Details</Text>
          <TouchableOpacity style={styles.editBtnDiv} onPress={handleClick2}>
            <Image source={require('../assets/img/edit.png')} style={[styles.arrowBtnn]} />
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <ScrollView contentContainerStyle={styles.outerContainer}>
        <View style={styles.mainBoxOuter}>
          <View style={styles.mainBody}>
            <View style={[styles.centerBoxNo, styles.whiteBoxContainer]}>
              <View style={[styles.formGroupDiv, styles.formGroupBorderDiv]}>
                <View style={[styles.formGroupNew, styles.formGroupSimple]}>
                  <Text style={[styles.formLabelNew, styles.noAbsolute]}>Company</Text>
                  <Text style={[styles.customTabText]}>Rentdigi</Text>
                </View>
                <View style={[styles.formGroupNew, styles.formGroupSimple]}>
                  <Text style={[styles.formLabelNew, styles.noAbsolute]}>Area Code</Text>
                  <Text style={[styles.customTabText]}>107813</Text>
                </View>
              </View>
              <View style={[styles.formGroupDiv, styles.formGroupBorderDiv]}>
                <View style={[styles.formGroupNew, styles.formGroupSimple]}>
                  <Text style={[styles.formLabelNew, styles.noAbsolute]}>Display Name</Text>
                  <Text style={[styles.customTabText]}>Australia</Text>
                </View>
                <View style={[styles.formGroupNew, styles.formGroupSimple]}>
                  <Text style={[styles.formLabelNew, styles.noAbsolute]}>Seq. Number</Text>
                  <Text style={[styles.customTabText]}>13-12-2022</Text>
                </View>
              </View>
              <View style={[styles.formGroupDiv, styles.formGroupBorderDiv]}>
                <View style={[styles.formGroupNew, styles.formGroupSimple]}>
                  <Text style={[styles.formLabelNew, styles.noAbsolute]}>Floors</Text>
                  <Text style={[styles.customTabText]}>12</Text>
                </View>
                <View style={[styles.formGroupNew, styles.formGroupSimple]}>
                  <Text style={[styles.formLabelNew, styles.noAbsolute]}>Active</Text>
                  <Text style={[styles.customTabText]}>Yes</Text>
                </View>
              </View>
              <View style={[styles.formGroupDiv,]}>
                <View style={[styles.formGroupNew, styles.formGroupSimple]}>
                  <Text style={[styles.formLabelNew, styles.noAbsolute]}>Description</Text>
                  <Text style={[styles.customTabText]}>It is a long established fact that a reader will be distracted</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* <View style={[styles.fixInfoBtnsDiv]}>
      <View style={styles.innerFlex}>
        <TouchableOpacity style={styles.btmNavFix}>               
              <Image source={require('../assets/img/home.jpg')} style={[styles.btnIcon]} />
              <Text style={[styles.TextStyle, styles.textBlue]}>Home</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.innerFlex}>
        <TouchableOpacity style={styles.btmNavFix}>                  
                <Image source={require('../assets/img/explore.jpg')} style={[styles.btnIcon]} />
                <Text style={[styles.TextStyle, styles.textGrey]}>App</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.innerFlex}>
        <TouchableOpacity style={styles.btmNavFix} onPress={handleClick}>                  
                <Image source={require('../assets/img/chat.jpg')} style={[styles.btnIcon]} />
                <Text style={[styles.TextStyle, styles.textGrey]}>Tickets</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.innerFlex}>
        <TouchableOpacity style={styles.btmNavFix}>                  
                <Image source={require('../assets/img/saved.jpg')} style={[styles.btnIcon]} />
                <Text style={[styles.TextStyle, styles.textGrey]}>Applications</Text>
        </TouchableOpacity>
      </View>
    </View> */}
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
    //minHeight: '100%',
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
    justifyContent: 'space-between',
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
  hdrBtn: {
    borderWidth: 1,
    borderColor: '#ffffff',
    position: 'absolute',
    right: 16,
    top: 34,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 40,
  },
  hdrBtnText: {
    fontSize: 13,
    color: "#ffffff",
    fontFamily: 'Montserrat-SemiBold',
  },
  mainBody: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    flex: 1,
  },
  btnFixContainer: {
    paddingBottom: 60,
  },
  whiteBoxContainer: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 20,
    shadowOpacity: 1,
    elevation: 2,
    borderRadius: 12,
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
    fontFamily: 'Montserrat-Regular',
  },
  formTitleDiv: {
    marginBottom: 16,
    position: 'relative',
    zIndex: 1,
  },
  formTitleFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  formGroupBorderDiv: {
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#eaedee',
    paddingBottom: 12,
    marginBottom: 12,
  },
  formGroupNew: {
    paddingHorizontal: 6,
    position: 'relative',
    paddingTop: 14,
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
    height: 52,
    borderWidth: 1,
    borderColor: '#b2b2b2',
    paddingBottom: 12,
    paddingHorizontal: 20,
    borderRadius: 40,
    backgroundColor: 'transparent',
    fontFamily: 'Montserrat-Regular',
    minWidth: '100%',
  },
  inputIcon: {
    height: 24,
    width: 18,
    position: 'absolute',
    right: 20,
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
    shadowRadius: 8,
    shadowOpacity: 1,
    elevation: 6,
    paddingHorizontal: 16,
    paddingVertical: 16,
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
  redText: {
    color: "#9a0000",
  },
  editBtnDiv: {
    marginRight: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  formLabelDark: {
    fontSize: 16,
    color: "#aaaaaa",
    fontFamily: 'Montserrat-Regular'
  },
  docuCol: {
    backgroundColor: '#ffffff',
    position: 'relative',
    width: 104,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 8,
    shadowOpacity: 1,
    elevation: 6,
    borderRadius: 6,
    padding: 12,
    marginTop: 12,
  },
  editBtnDivv: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 20,
    lineHeight: 20,
    alignItems: 'center',
    paddingVertical: 4,
    right: 4,
    top: 4,
    zIndex: 1,
  },
  editIcon: {
    width: 10,
    height: 10,
  },
  docuMedia: {
    width: 80,
    height: 106,
  },
  fixInfoBtnsDiv: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingTop: 25,
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 8 },
    shadowOpacity: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 4,
    marginLeft: -5,
    marginRight: -5,
  },
  innerFlex: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 3,
  },
  btmNavFix: {
    minWidth: '100%',
    justifyContent: "center",
    alignItems: 'center',
  },
  TextStyle: {
    fontSize: 14,
    color: "#ffffff",
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
  },
  textBlue: {
    color: '#0d568f',
  },
  textGrey: {
    color: '#676974',
  },
});

export default BuildingDtl