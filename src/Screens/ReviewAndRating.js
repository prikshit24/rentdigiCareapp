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
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const ReviewAndRating = (props) => {
  const [experience, onChangeText] = React.useState("");
  const handleClick = () => {
    // props.history.push("/dashboard");
    props.navigation.navigate('company')
  }
  const handleClick1 = () => {
    // props.history.push("/reviewandrating");
    props.navigation.navigate('reviewandrating')
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <ScrollView contentContainerStyle={styles.outerContainer}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.mainBoxOuter}>
          <View style={styles.mainHeaderOuter}>
            <LinearGradient
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
              colors={['#0e558d', '#084677']}
              style={styles.mainHeader}>
              <View style={styles.backMenuDiv}>
                <TouchableOpacity style={styles.backBtnDiv} onPress={handleClick}>
                  <Image source={require('../assets/img/backArrow1.png')} style={[styles.arrowBtn, styles.arrowBtnLight]} />
                </TouchableOpacity>
              </View>
              <Text style={styles.headerTitle}>Review & Rating</Text>
            </LinearGradient>
          </View>
          <View style={styles.mainBody}>
            <View style={styles.centerBoxNo}>
              <View style={styles.ratingTitle}>
                <Text style={[styles.subTitle, styles.blackText, styles.textSemiBold]}>Kindly Rate & Review Your Experience</Text>
                <View style={styles.hdngCirclePatt}></View>
              </View>
              <View style={styles.ratingIcons}>
                <TouchableOpacity style={styles.rateReviewIconDiv}>
                  <Image source={require('../assets/img/rateIcon.png')} style={[styles.rateReviewIcon]} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.rateReviewIconDiv}>
                  <Image source={require('../assets/img/rateIcon.png')} style={[styles.rateReviewIcon]} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.rateReviewIconDiv}>
                  <Image source={require('../assets/img/rateIcon.png')} style={[styles.rateReviewIcon]} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.rateReviewIconDiv}>
                  <Image source={require('../assets/img/rateIcon.png')} style={[styles.rateReviewIcon]} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.rateReviewIconDiv}>
                  <Image source={require('../assets/img/rateIcon.png')} style={[styles.rateReviewIcon]} />
                </TouchableOpacity>
              </View>
              <View style={styles.ratingForm}>
                <View style={styles.formGroupDiv}>
                  <View style={[styles.formGroupNew, styles.formGroupSimple]}>
                    <Text style={[styles.formLabelNew, styles.noAbsolute, styles.textSemiBold]}>Let Us Know Your Experience</Text>
                    <View style={styles.textAreaContainer}>
                      <TextInput
                        style={styles.textArea}
                        value={experience}
                        onChangeText={onChangeText}
                        placeholder=""
                        placeholderTextColor="#fbfbfb"
                        underlineColorAndroid="transparent"
                        numberOfLines={8}
                        multiline={true}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.formGroup}>
                  <TouchableOpacity style={styles.btnGradientDiv} onPress={handleClick1}>
                    <LinearGradient
                      start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                      colors={['#0e558d', '#084677']}
                      style={[styles.btnDefault, styles.btnFull]}>
                      <Text style={styles.TextStyle}>Submit Rating</Text>
                    </LinearGradient>
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
  outerContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    //alignItems: 'center',
    backgroundColor: '#ffffff',
    position: "relative",
    //minHeight: '100%',
    fontFamily: 'Montserrat-Regular'
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
  textSemiBold: {
    fontFamily: 'Montserrat-SemiBold',
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
  ratingTitle: {
    position: 'relative',
  },
  hdngCirclePatt: {
    backgroundColor: '#fdf1e3',
    position: 'absolute',
    width: 40,
    height: 40,
    borderRadius: 40,
    zIndex: -1,
    top: 10,
  },
  ratingIcons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 55,
  },
  rateReviewIconDiv: {
    marginHorizontal: 6,
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
    marginBottom: 8,
  },
  textAreaContainer: {
    borderColor: '#b2b2b2',
    borderWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 4,
    minWidth: '100%',
    borderRadius: 40,
    fontFamily: 'Montserrat-Regular',
  },
  textArea: {
    height: 90,
    alignItems: 'flex-start',
    justifyContent: "flex-start",
    color: '#434450',
    fontFamily: 'Montserrat-Regular',
  }
});

export default ReviewAndRating