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
  TextInput,
  DrawerLayoutAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BasicInfo from './BasicInfo'
import ChangePassword from './ChangePassword'
const EditProfile = (props) => {
  const [current, setCurrent] = React.useState(1);

  const handleClick = () => {
    // props.history.push("/dashboard");
  }


  const drawer = React.useRef(null);

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
            <Text style={styles.headerTitle}>Edit Profile</Text>
          </LinearGradient>
        </View> */}
      <ScrollView contentContainerStyle={styles.outerContainer}>
        <View style={styles.mainBoxOuter}>
          <View style={[styles.profileCoverDiv]}>
            <ImageBackground style={styles.profileCoverImg} source={require('../assets/img/profileBg.jpg')} >
            </ImageBackground>
            <View style={styles.overlay}></View>
          </View>
          <View style={[styles.mainBody, styles.profileBody]}>
            <View style={styles.centerBoxNo}>
              <View style={styles.proCol}>
                <View style={styles.proColMediaOuter}>
                  <View style={styles.proColMedia}>
                    <Image source={require('../assets/img/user.jpg')} style={[styles.userImage]} />
                    <View style={styles.proUploadBtn}>
                      <Image source={require('../assets/img/camIcon.png')} style={[styles.camIcon]} />
                    </View>
                  </View>
                </View>
                <Text style={styles.userName}>John Deo</Text>
              </View>
              <View style={styles.tabsProOuter}>
                <View style={styles.tabsProMenuList}>
                  <View style={styles.tabsProMenu}>
                    <TouchableOpacity style={[styles.tabProBtnDiv]} onPress={() => setCurrent(1)} >
                      <LinearGradient
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                        colors={['#0e558d', '#084677']}
                        style={[styles.tabProBtn]}>
                        <Text style={[styles.tabProText, styles.tabProActiveText]}>Basic Info</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.tabsProMenu}>
                    <TouchableOpacity style={styles.tabProBtnDiv} onPress={() => setCurrent(0)} >
                      <LinearGradient
                        start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                        colors={['#ffffff', '#ffffff']}
                        style={[styles.tabProBtn]}>
                        <Text style={[styles.tabProText]}>Change Password</Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.tabProsContentDiv}>
                  {(current === 1) ? (<BasicInfo history={props.history} />) : (<ChangePassword history={props.history} />)}
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* </DrawerLayoutAndroid> */}
    </View >
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
    backgroundColor: '#ffffff',
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
  profileCoverDiv: {
    position: 'relative',
    height: 150,
  },
  profileCoverImg: {
    backgroundSize: "cover",
    alignItems: 'center',
    resizeMode: 'cover',
    paddingVertical: 40,
    paddingHorizontal: 24,
    position: 'relative',
    minHeight: 150,
    height: 150,
    minWidth: '100%',
    zIndex: 1
  },
  overlay: {
    backgroundColor: '#000000',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    opacity: 0.6,
    zIndex: 1
  },
  profileBody: {
    backgroundColor: '#ffffff',
    position: 'relative',
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 2,
  },
  proCol: {
    alignItems: 'center',
    marginTop: -70,
  },
  proColMediaOuter: {
    //alignItems: 'center',
  },
  proColMedia: {
    position: 'relative',
    borderRadius: 117,
    borderWidth: 1,
    borderColor: '#ffffff',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#ffffff',
  },
  proUploadBtn: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: '#9a0000',
    width: 30,
    height: 30,
    borderRadius: 35,
    paddingVertical: 6,
    borderWidth: 2,
    borderColor: '#ffffff',
    alignItems: 'center',
  },
  camIcon: {
    //width: 16,
    //height: 11,
  },
  userName: {
    fontSize: 16,
    color: "#434450",
    fontFamily: 'Montserrat-SemiBold',
  },
  tabsProMenuList: {
    flexDirection: 'row',
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 8,
    shadowOpacity: 1,
    elevation: 6,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 50,
    marginBottom: 24,
    marginTop: 24,
  },
  tabsProMenu: {
    marginHorizontal: 6,
  },
  tabProBtnDiv: {

  },
  tabProBtn: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 50,
  },
  tabProActiveBtn: {

  },
  tabProText: {
    fontSize: 14,
    color: '#333333',
    fontFamily: 'Montserrat-SemiBold',
  },
  tabProActiveText: {
    color: '#ffffff',
    fontFamily: 'Montserrat-SemiBold',
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

export default EditProfile