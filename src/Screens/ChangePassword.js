import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const ChangePassword = (props) => {
  const [currentpassword, onChangeText] = React.useState("");
  const [newpassword, onChangeText1] = React.useState("");
  const [confirmpassword, onChangeText2] = React.useState("");
  const handleClick = () => {
    // props.history.push("/shipmentdetails");
    props.navigation.navigate('shipmentdetails')
  }

  return (
    <View style={styles.profileFormOuter}>
      <View style={styles.profileForm}>
        <View style={styles.formGroup}>
          <Text style={styles.formLabelDark}>Current Password</Text>
          <View style={styles.formGroupIcon}>
            <TextInput
              style={styles.formControlDark}
              onChangeText={onChangeText}
              value={currentpassword}
              placeholder=""
              placeholderTextColor="#fbfbfb"
            />
            <Image source={require('../assets/img/showRedIcon.png')} style={styles.showHideIcon} />
          </View>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabelDark}>New Password</Text>
          <View style={styles.formGroupIcon}>
            <TextInput
              style={styles.formControlDark}
              onChangeText={onChangeText1}
              secureTextEntry={true}
              value={newpassword}
              placeholder=""
              placeholderTextColor="#fbfbfb"
            />
            <Image source={require('../assets/img/showRedIcon.png')} style={styles.showHideIcon} />
          </View>
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.formLabelDark}>Confirm Password</Text>
          <View style={styles.formGroupIcon}>
            <TextInput
              style={styles.formControlDark}
              onChangeText={onChangeText2}
              secureTextEntry={true}
              value={confirmpassword}
              placeholder=""
              placeholderTextColor="#fbfbfb"
            />
            <Image source={require('../assets/img/showRedIcon.png')} style={styles.showHideIcon} />
          </View>
        </View>
        <View style={styles.formGroup}>
          <TouchableOpacity style={styles.btnGradientDiv}>
            <LinearGradient
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
              colors={['#0e558d', '#084677']}
              style={[styles.btnDefault, styles.btnFull]}>
              <Text style={styles.TextStyle}>Submit</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  )

}

const styles = StyleSheet.create({
  formGroup: {
    marginBottom: 16,
    minWidth: '100%',
  },
  formLabelDark: {
    fontSize: 16,
    color: "#aaaaaa",
    fontFamily: 'Montserrat-Regular'
  },
  formControlDark: {
    color: '#434450',
    height: 40,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    paddingBottom: 12,
    paddingHorizontal: 0,
    borderRadius: 0,
    backgroundColor: 'transparent',
    fontFamily: 'Montserrat-Regular',
    minWidth: '100%',
  },
  formGroupIcon: {
    position: 'relative',
  },
  formControlIcon: {
    paddingRight: 36,
  },
  showHideIcon: {
    position: 'absolute',
    right: 8,
    top: 10,
    width: 24,
    height: 15,
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
  TextStyle: {
    fontSize: 16,
    color: "#ffffff",
    fontFamily: 'Montserrat-SemiBold',
  },
});

export default ChangePassword;