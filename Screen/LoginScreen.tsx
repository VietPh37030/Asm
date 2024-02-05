import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';

export default function LoginScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleFocus = () => {
    // Logic xử lý khi TextInput được focus
    console.log('TextInput is focused');
  };

  return (
    <View style={styles.containers}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          marginTop: 81,
          marginVertical: 117,
        }}>
        <Image source={require('./Acces/coffe.png')} style={styles.ImgAvt} />
        <Text style={styles.textOne}>Welcome to Lungo !!</Text>
        <Text style={styles.textTwo}>Login to Continue</Text>
        <View style={{marginTop: 20}}>
          <TextInput
            style={styles.inputType}
            placeholder="Email Address"
            placeholderTextColor="gray"
            onFocus={handleFocus}
            autoFocus={true} // Set autoFocus thành true để tự động focus khi component được render
          />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Password"
              secureTextEntry={!passwordVisible}
              autoCapitalize="none"
              placeholderTextColor="gray"
            />

            <TouchableOpacity
              style={styles.eyeIconContainer}
              onPress={togglePasswordVisibility}>
              <Image
                source={require('./Acces/hide.png')}
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
            
          </View>
          <Text style={styles.passError}>Password is not true. Try Again!</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.buttonLogin}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Poppins',
              fontWeight: '700',
              lineHeight: 26,
              letterSpacing: 0.5,
              color: '#FFFFFF',
            }}>
            Sign In
          </Text>
        </Pressable>
        <Pressable style={styles.buttonLogin1}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('./Acces/google.png')}
              style={{
                width: 24,
                height: 24,
                resizeMode: 'contain',
                marginRight: 10,
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'Poppins',
                fontWeight: '700',
                lineHeight: 26,
                letterSpacing: 0.5,
                color: '#000',
              }}>
              Sign in with Google
            </Text>
          </View>
        </Pressable>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Text style={styles.TextF1}>Don't have account? Click</Text>
          <Text style={styles.TextF2}>Register</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 6}}>
          <Text style={styles.TextF1}>Forget Password? Click</Text>
          <Text style={styles.TextF2}>Reset</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: '#0C0F14',
  },
  ImgAvt: {
    width: 142,
    height: 142,
  },
  textOne: {
    color: '#fff',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.5,
  },
  textTwo: {
    color: '#828282',
    fontSize: 12,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.5,
  },
  inputType: {
    height: 48,
    width: 350,
    borderColor: '#252A32',
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 16,
    paddingHorizontal: 16,
    marginLeft: 10,
    marginRight: 10,
    color: 'gray',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    width: 360,
    justifyContent: 'space-between',
    marginTop:-20,
  },
  passwordInput: {
    flex: 1,
    height: 48,
    borderColor: '#FB7181',
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 16,
    paddingHorizontal: 16,
    marginLeft: 10,
    color: 'gray',
  },
  eyeIconContainer: {
    position: 'absolute',
    right: 20,
    top: 16,
    padding: 10,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
  footer: {flex: 1, marginTop: 50, alignItems: 'center'},
  buttonLogin: {
    width: 348,
    height: 57,
    backgroundColor: '#D17842',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLogin1: {
    width: 348,
    height: 57,
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextF1: {
    color: '#828282',
    fontSize: 12,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.5,
  },
  TextF2: {
    color: '#D17842',
    fontSize: 12,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.5,
    marginLeft: 5,
  },
  passError:{
    color:'#FB7181',
    fontSize: 12,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.5,
    marginTop:-20,
    marginBottom:30,
    marginLeft:13,
  },
});
