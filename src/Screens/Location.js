import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Location = (props) => {
  const [address, onChangeText] = React.useState("");
  const [city, onChangeText1] = React.useState("");
  const [state, onChangeText2] = React.useState("");
  const [zip, onChangeText3] = React.useState("");
  const [current, setCurrent] = React.useState(1);
  const handleClick = () => {
    props.history.push("/dashboard");
  }
  const locationClick = () => {
    // props.history.push("/location");
    props.navigation.navigate('location')
  }
  const detailsClick = () => {
    // props.history.push("/details");
    props.navigation.navigate('details')
  }
  const paymentClick = () => {
    // props.history.push("/payment");
    props.navigation.navigate('payment')
  }
  const previewClick = () => {
    // props.history.push("/preview");
    props.navigation.navigate('preview')
  }


  const drawer = React.useRef(null);
  const [drawerPosition, setDrawerPosition] = React.useState("left");

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      {/* <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}
        > */}
      <StatusBar translucent backgroundColor="transparent" />
      {/* <View style={styles.mainHeaderOuter}>
          <LinearGradient
            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
            colors={['#0e558d', '#084677']}
            style={styles.mainHeader}>
            <View style={styles.backMenuDiv}>
              <TouchableOpacity style={styles.backBtnDiv} onPress={() => drawer.current.openDrawer()}>
                <Image source={require('../assets/img/menuIcon.png')} style={[styles.arrowBtn, styles.sideMenuIcon]} />
              </TouchableOpacity>
            </View>
            <Text style={styles.headerTitle}>Add Shipment</Text>
          </LinearGradient>
        </View> */}
      <ScrollView contentContainerStyle={styles.outerContainer}>
        <View style={styles.mainBoxOuter}>
          <View style={[styles.mainBody]}>
            <View style={[styles.centerBoxNo, styles.btnFixContainer]}>
              <View style={styles.customTabsDiv}>
                <View style={styles.customTabsLine}></View>
                <View style={styles.customTabs}>
                  <TouchableOpacity style={styles.customTabCol} onPress={locationClick}>
                    <Text style={[styles.customTabCount, styles.customTabCountFill]}>1</Text>
                    <Text style={[styles.customTabText]}>Location</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.customTabCol} onPress={detailsClick}>
                    <Text style={[styles.customTabCount]}>2</Text>
                    <Text style={[styles.customTabText]}>Details</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.customTabCol} onPress={paymentClick}>
                    <Text style={[styles.customTabCount]}>3</Text>
                    <Text style={[styles.customTabText]}>Payment</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.customTabCol} onPress={previewClick}>
                    <Text style={[styles.customTabCount]}>4</Text>
                    <Text style={[styles.customTabText]}>Preview</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.formTitleDiv}>
                <Text style={styles.formTitleText}>Pickup Location</Text>
                <View style={styles.frmTtlBrdr}></View>
              </View>
              <View style={styles.formOuter}>
                <View style={styles.formGroupDiv}>
                  <View style={styles.formGroupNew}>
                    <Text style={styles.formLabelNew}>Address</Text>
                    <TextInput
                      style={styles.formControlNew}
                      value={address}
                      onChangeText={onChangeText}
                      placeholder=""
                      placeholderTextColor="#fbfbfb"
                    />
                    <Image source={require('../assets/img/locIcon.png')} style={[styles.inputIcon]} />
                  </View>
                </View>
                <View style={styles.formGroupDiv}>
                  <View style={styles.formGroupNew}>
                    <Text style={styles.formLabelNew}>City</Text>
                    <TextInput
                      style={styles.formControlNew}
                      value={city}
                      onChangeText={onChangeText1}
                      placeholder=""
                      placeholderTextColor="#fbfbfb"
                    />
                  </View>
                  <View style={styles.formGroupNew}>
                    <Text style={styles.formLabelNew}>State</Text>
                    <TextInput
                      style={styles.formControlNew}
                      value={state}
                      onChangeText={onChangeText2}
                      placeholder=""
                      placeholderTextColor="#fbfbfb"
                    />
                  </View>
                  <View style={styles.formGroupNew}>
                    <Text style={styles.formLabelNew}>Zipcode</Text>
                    <TextInput
                      style={styles.formControlNew}
                      value={zip}
                      onChangeText={onChangeText3}
                      placeholder=""
                      placeholderTextColor="#fbfbfb"
                    />
                  </View>
                </View>
              </View>
              <View style={styles.formTitleDiv}>
                <Text style={styles.formTitleText}>Drop Off Location</Text>
                <View style={styles.frmTtlBrdr}></View>
              </View>
              <View style={styles.formOuter}>
                <View style={styles.formGroupDiv}>
                  <View style={styles.formGroupNew}>
                    <Text style={styles.formLabelNew}>Address</Text>
                    <TextInput
                      style={styles.formControlNew}
                      value={address}
                      onChangeText={onChangeText}
                      placeholder=""
                      placeholderTextColor="#fbfbfb"
                    />
                    <Image source={require('../assets/img/locIcon.png')} style={[styles.inputIcon]} />
                  </View>
                </View>
                <View style={styles.formGroupDiv}>
                  <View style={styles.formGroupNew}>
                    <Text style={styles.formLabelNew}>City</Text>
                    <TextInput
                      style={styles.formControlNew}
                      value={city}
                      onChangeText={onChangeText1}
                      placeholder=""
                      placeholderTextColor="#fbfbfb"
                    />
                  </View>
                  <View style={styles.formGroupNew}>
                    <Text style={styles.formLabelNew}>State</Text>
                    <TextInput
                      style={styles.formControlNew}
                      value={state}
                      onChangeText={onChangeText2}
                      placeholder=""
                      placeholderTextColor="#fbfbfb"
                    />
                  </View>
                  <View style={styles.formGroupNew}>
                    <Text style={styles.formLabelNew}>Zipcode</Text>
                    <TextInput
                      style={styles.formControlNew}
                      value={zip}
                      onChangeText={onChangeText3}
                      placeholder=""
                      placeholderTextColor="#fbfbfb"
                    />
                  </View>
                </View>
                <View style={styles.formGroupDiv}>
                  <View style={[styles.formGroupNew, styles.formGroupSimple]}>
                    <Text style={[styles.formLabelNew, styles.noAbsolute]}>Distance & Time</Text>
                  </View>
                </View>
                <View style={[styles.disFormDataDiv]}>
                  <View style={[styles.disFormData]}>
                    <Image source={require('../assets/img/milesIcon.png')} style={[styles.disIcon]} />
                    <Text style={[styles.disText]}>10 Km</Text>
                  </View>
                  <View style={[styles.disFormData]}>
                    <Image source={require('../assets/img/timeIcon.png')} style={[styles.disIcon]} />
                    <Text style={[styles.disText]}>30 Minutes</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.fixBtnDiv}>
        <View style={styles.innerFlex}>
          <TouchableOpacity style={styles.btnGradientDiv} onPress={detailsClick}>
            <LinearGradient
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
              colors={['#0e558d', '#084677']}
              style={[styles.btnDefault, styles.btnFull]}>
              <Text style={styles.TextStyle}>Next</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
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
    position: 'relative',
  },
  btnFixContainer: {
    paddingBottom: 60,
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
  customTabsDiv: {
    position: 'relative',
  },
  customTabsLine: {
    backgroundColor: '#f2f2f2',
    position: 'absolute',
    width: '86%',
    height: 3,
    left: '7%',
    top: 20,
    right: '7%',
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
    color: "#434450",
    fontFamily: 'Montserrat-Regular',
  },
  fixBtnDiv: {
    backgroundColor: '#ffffff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
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

  navigationContainer: {
    flex: 1,
    minHeight: '100%',
  },
  navigationMainContainer: {
  },
  sidebarTopCol: {

  },
  sidebarProOuter: {
    position: 'relative',
    paddingHorizontal: 18,
    paddingTop: 40,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: 'center',
  },
  sidebarProPatt: {
    position: 'absolute',
    backgroundSize: "cover",
    alignItems: 'center',
    resizeMode: 'cover',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
    opacity: .34,
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
    justifyContent: "space-between",
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sidebarLinkLeft: {
    flexDirection: 'row',
    justifyContent: "space-between",
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

export default Location