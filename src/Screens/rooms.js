import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  DrawerLayoutAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const Rooms = (props) => {
  const [password, onChangeText2] = React.useState("");

  const addCardClick = () => {
    // props.history.push("/roomsAdd");
    props.navigation.navigate('roomsAdd')
  }
  const RoomsDtl = () => {
    // props.history.push("/roomsDtl");
    props.navigation.navigate('roomsDtl')
  }

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
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          colors={['#0e558d', '#084677']}
          style={styles.mainHeader}>
          <View style={styles.backMenuDiv}>
            <TouchableOpacity style={styles.backBtnDiv} onPress={() => drawer.current.openDrawer()}>
              <Image source={require('../assets/img/menuIcon.png')} style={[styles.arrowBtn, styles.sideMenuIcon]} />
            </TouchableOpacity>
          </View>
          <Text style={styles.headerTitle}>Rooms</Text>
        </LinearGradient>
      </View> */}
      <ScrollView contentContainerStyle={styles.outerContainer}>
        <View style={styles.mainBoxOuter}>
          <View style={styles.fixInfoDiv}>
            {/* <View style={[styles.spaceBetween, styles.marginBottom]}>
                <View style={styles.formGroup}>
                  <View style={styles.formGroupIcon}>
                      <TextInput
                        style={[styles.formControl, styles.formControlIcon]}
                        onChangeText={onChangeText2}
                        secureTextEntry={true}
                        value={password}
                        placeholder=" Search by Name"
                        placeholderTextColor = "#444"
                      />
                  </View>
                </View>
                <View style={styles.spaceBetween}>
                  <LinearGradient
                    start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                    colors={['#0e558d', '#084677']}
                    style={styles.filtrButton}>
                    <Image source={require('../assets/img/filter.png')} style={styles.filtrIcon} />
                  </LinearGradient>   
                </View>
            </View> */}

            <View style={[styles.mainHdng, styles.spaceBetween]}>
              <View style={[styles.columnTwo]}>
                {/* <View style={[styles.MainTitleDiv]}>
                  <Text style={styles.mainTitleText}>Search Results</Text>               
                </View> */}
                <View style={[styles.mainHdngBtm, styles.mt10]} >
                  <Text style={styles.textBlue} >
                    <Text style={[styles.mainTitle, styles.greyText,]}>Rooms</Text> (6)
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.prpertyList]}>
              <TouchableOpacity style={styles.proprtyCardItem} backgroundColor={'#ffffff'} onPress={RoomsDtl}>
                <View style={styles.proprtyCardCol}>
                  <View style={styles.proprtyCardRow}>
                    <View style={[styles.proprtyCardRight]}>
                      <Text style={[styles.mediumTitle, styles.pt8, styles.textBlue,]}>PLUMB</Text>
                      <Text style={[styles.locatnTextBig, styles.py7]}>
                        1071</Text>
                      <View style={[styles.spaceBetween, styles.pb10,]}>
                        <Text style={[styles.prptyFtrIcon]}>
                          213
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity style={[styles.cardActionDiv]}>
                    <Image source={require('../assets/img/deleteIcon2.png')} style={[styles.deleteIcon]} />
                  </TouchableOpacity>
                  <View style={styles.space28}></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.proprtyCardItem} backgroundColor={'#ffffff'} onPress={RoomsDtl}>
                <View style={styles.proprtyCardCol}>
                  <View style={styles.proprtyCardRow}>
                    <View style={[styles.proprtyCardRight]}>
                      <Text style={[styles.mediumTitle, styles.pt8, styles.textBlue,]}>PLUMB</Text>
                      <Text style={[styles.locatnTextBig, styles.py7]}>
                        1071</Text>
                      <View style={[styles.spaceBetween, styles.pb10,]}>
                        <Text style={[styles.prptyFtrIcon]}>
                          213
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity style={[styles.cardActionDiv]}>
                    <Image source={require('../assets/img/deleteIcon2.png')} style={[styles.deleteIcon]} />
                  </TouchableOpacity>
                  <View style={styles.space28}></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.proprtyCardItem} backgroundColor={'#ffffff'} onPress={RoomsDtl}>
                <View style={styles.proprtyCardCol}>
                  <View style={styles.proprtyCardRow}>
                    <View style={[styles.proprtyCardRight]}>
                      <Text style={[styles.mediumTitle, styles.pt8, styles.textBlue,]}>PLUMB</Text>
                      <Text style={[styles.locatnTextBig, styles.py7]}>
                        1071</Text>
                      <View style={[styles.spaceBetween, styles.pb10,]}>
                        <Text style={[styles.prptyFtrIcon]}>
                          213
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity style={[styles.cardActionDiv]}>
                    <Image source={require('../assets/img/deleteIcon2.png')} style={[styles.deleteIcon]} />
                  </TouchableOpacity>
                  <View style={styles.space28}></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.proprtyCardItem} backgroundColor={'#ffffff'} onPress={RoomsDtl}>
                <View style={styles.proprtyCardCol}>
                  <View style={styles.proprtyCardRow}>
                    <View style={[styles.proprtyCardRight]}>
                      <Text style={[styles.mediumTitle, styles.pt8, styles.textBlue,]}>PLUMB</Text>
                      <Text style={[styles.locatnTextBig, styles.py7]}>
                        1071</Text>
                      <View style={[styles.spaceBetween, styles.pb10,]}>
                        <Text style={[styles.prptyFtrIcon]}>
                          213
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity style={[styles.cardActionDiv]}>
                    <Image source={require('../assets/img/deleteIcon2.png')} style={[styles.deleteIcon]} />
                  </TouchableOpacity>
                  <View style={styles.space28}></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.proprtyCardItem} backgroundColor={'#ffffff'} onPress={RoomsDtl}>
                <View style={styles.proprtyCardCol}>
                  <View style={styles.proprtyCardRow}>
                    <View style={[styles.proprtyCardRight]}>
                      <Text style={[styles.mediumTitle, styles.pt8, styles.textBlue,]}>PLUMB</Text>
                      <Text style={[styles.locatnTextBig, styles.py7]}>
                        1071</Text>
                      <View style={[styles.spaceBetween, styles.pb10,]}>
                        <Text style={[styles.prptyFtrIcon]}>
                          213
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity style={[styles.cardActionDiv]}>
                    <Image source={require('../assets/img/deleteIcon2.png')} style={[styles.deleteIcon]} />
                  </TouchableOpacity>
                  <View style={styles.space28}></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.proprtyCardItem} backgroundColor={'#ffffff'} onPress={RoomsDtl}>
                <View style={styles.proprtyCardCol}>
                  <View style={styles.proprtyCardRow}>
                    <View style={[styles.proprtyCardRight]}>
                      <Text style={[styles.mediumTitle, styles.pt8, styles.textBlue,]}>PLUMB</Text>
                      <Text style={[styles.locatnTextBig, styles.py7]}>
                        1071</Text>
                      <View style={[styles.spaceBetween, styles.pb10,]}>
                        <Text style={[styles.prptyFtrIcon]}>
                          213
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity style={[styles.cardActionDiv]}>
                    <Image source={require('../assets/img/deleteIcon2.png')} style={[styles.deleteIcon]} />
                  </TouchableOpacity>
                  <View style={styles.space28}></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.proprtyCardItem} backgroundColor={'#ffffff'} onPress={RoomsDtl}>
                <View style={styles.proprtyCardCol}>
                  <View style={styles.proprtyCardRow}>
                    <View style={[styles.proprtyCardRight]}>
                      <Text style={[styles.mediumTitle, styles.pt8, styles.textBlue,]}>PLUMB</Text>
                      <Text style={[styles.locatnTextBig, styles.py7]}>
                        1071</Text>
                      <View style={[styles.spaceBetween, styles.pb10,]}>
                        <Text style={[styles.prptyFtrIcon]}>
                          213
                        </Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity style={[styles.cardActionDiv]}>
                    <Image source={require('../assets/img/deleteIcon2.png')} style={[styles.deleteIcon]} />
                  </TouchableOpacity>
                  <View style={styles.space28}></View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={[styles.addBtnDiv]} onPress={addCardClick}>
        <LinearGradient
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          colors={['#0e558d', '#084677']}
          style={[styles.addBtnBig]}>
          <Text style={[styles.addBtnTextBig]}>+</Text>
        </LinearGradient>
      </TouchableOpacity>
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
      {/* </DrawerLayoutAndroid> */}
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
  mapImage: {
    width: '100%',
    minHeight: '100%',
    height: 250,
  },
  mapItem: {
    maxWidth: '100%',
  },
  mapBody: {
    backgroundColor: '#ffffff',
    position: 'relative',
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 2,
  },
  fixInfoDiv: {
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset: { width: 1, height: 8 },
    shadowOpacity: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 6,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: -20,
  },
  marginBottom: {
    marginBottom: 8,
  },
  dotIcon: {
    backgroundColor: '#9a0000',
    width: 6,
    height: 6,
    borderRadius: 6,
    marginRight: 6,
  },
  shipTextBig: {
    fontSize: 16,
    color: '#000000',
    fontFamily: 'Montserrat-Regular',
  },
  shipTextSmall: {
    fontSize: 14,
    color: '#000000',
    fontFamily: 'Montserrat-Regular',
  },
  shipTextBold: {
    fontFamily: 'Montserrat-SemiBold',
  },
  shipTextRed: {
    color: "#9a0000",
  },
  shipTextGrey: {
    color: "#b8b9ba",
  },
  shipTextDark: {
    color: "#33373a",
  },
  formTitleDiv: {
    marginBottom: 16,
    position: 'relative',
    zIndex: 1,
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
  srchFilterDiv: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
  },
  innerFlex: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 3,
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
  btnTransparent: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#9a0000',
  },
  TextStyle: {
    fontSize: 14,
    color: "#ffffff",
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
  },
  btmNavFix: {
    minWidth: '100%',
    justifyContent: "center",
    alignItems: 'center',
  },
  btnIcon: {
    width: 30,
    height: 30,
    textAlign: 'center',
    justifyContent: "space-between",
    marginBottom: 5,
  },
  textBlue: {
    color: '#0d568f',
  },
  textGrey: {
    color: '#676974',
  },

  navigationContainer: {
    flex: 1,
    minHeight: '100%',
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
  formGroup: {
    marginBottom: 0,
    minWidth: '84%',
    position: 'relative',
    marginRight: 10,
  },
  formLabel: {
    fontSize: 16,
    color: "#221e1f",
    fontFamily: 'Montserrat-SemiBold',
    paddingBottom: 10,
  },
  formControl: {
    color: '#221e1f',
    height: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#f4f4f4',
    fontFamily: 'Montserrat-Regular',

  },
  formGroupIcon: {
    position: 'relative',
  },
  formControlIcon: {
    paddingLeft: 36,
  },
  showHideIcon: {
    position: 'absolute',
    left: 15,
    top: 15,
    width: 16,
    height: 20,
  },
  filtrButton: {
    padding: 10,
    width: 'auto',
    borderRadius: 7,
  },
  bgOutrBox: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 16,
  },
  srchTitle: {
    marginVertical: 10,
    backgroundColor: '#d2edf8',
    borderRadius: 30,
    textAlign: 'center',
    paddingVertical: 12,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000000',
    paddingHorizontal: 10,
  },

  mainHdng: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 10,
  },
  MainTitleDiv: {
  },
  mainTitleText: {
    fontSize: 19,
    color: '#000',
    fontFamily: 'Montserrat-Bold',
  },
  mediumTitle: {
    fontSize: 13,
    color: '#000',
    fontFamily: 'Montserrat-Bold',
  },
  mainTtlBrdr: {
    backgroundColor: '#0e558d',
    position: 'absolute',
    width: 96,
    height: 5,
    left: 0,
    bottom: 3,
    opacity: 0.24,
    zIndex: -1,
  },
  spaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  uperCase: {
    textTransform: 'uppercase',
  },
  mt10: {
    marginTop: 10,
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
  lstGrdCol: {
    flexDirection: 'row',
  },
  listIcon: {
    backgroundColor: '#f4f4f4',
    marginLeft: 10,
  },

  proprtyCardItem: {
    marginTop: 24,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 8,
  },
  proprtyCardCol: {
    marginHorizontal: -12,
    position: 'relative',
  },
  proprtyDefault: {
    backgroundColor: '#000000',
    position: 'absolute',
    right: 0,
    top: 10,
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
    paddingHorizontal: 20,
    paddingVertical: 4,
    borderRadius: 20,
    zIndex: 1,
  },
  proprtyCardRow: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
  },
  proprtyCardRight: {
    flex: 1,
    paddingRight: 25,
    paddingLeft: 25,
  },
  prptyImg: {
    width: 130,
    height: 150,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  prptyFtrIcon: {
    paddingRight: 3,
    fontSize: 12.5,

  },
  prptyPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  prptyPriceSm: {
    fontSize: 15,
  },
  mgRt: {
    marginRight: 8,
  },
  addBtnDiv: {
    position: 'absolute',
    borderRadius: 50,
    right: 20,
    bottom: 20,
  },
  addBtn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    textAlign: 'center',
    lineHeight: 50,
    alignItems: 'center',
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
  deleteIcon: {
    width: 20,
    height: 23,
  },
  cardActionDiv: {
    position: 'absolute',
    right: 27,
    top: 32,
  },
});

export default Rooms