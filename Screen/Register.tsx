import React, {useState} from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.imgAvt} source={require('./Acces/coffe.png')} />
      <Text style={styles.text1}>Chào mừng bạn đến với Lungo !!</Text>
      <Text style={styles.text2}>Đăng ký để tiếp tục</Text>

      <TextInput
        style={styles.inputText}
        placeholder="Họ và tên"
        placeholderTextColor="gray"
      />
      <TextInput
        style={styles.inputText}
        placeholder="Email"
        placeholderTextColor="gray"
      />
      <TextInput
        style={styles.inputText}
        placeholder="Số điện thoại"
        placeholderTextColor="gray"
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputTextPass}
          placeholder="Mật khẩu"
          placeholderTextColor="gray"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={togglePasswordVisibility}>
          <Text style={styles.icon}>{passwordVisible ? 'Ẩn' : 'Hiển thị'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputTextPass}
          placeholder="Nhập lại mật khẩu"
          placeholderTextColor="gray"
          secureTextEntry={!passwordVisible}
        />
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={togglePasswordVisibility}>
          <Text style={styles.icon}>{passwordVisible ? 'Ẩn' : 'Hiển thị'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.inputRegis}>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Poppins',
            fontWeight: '700',
            lineHeight: 26,
            letterSpacing: 0.5,
            color: '#FFFFFF',
          }}>
          Register
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 5,
        }}>
        <Text style={styles.text3}>You have an account? Click</Text>
          <Text style={styles.text4}>Sign in</Text>
 

      
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C0F14',
    alignItems: 'center',
  },
  imgAvt: {
    width: 142,
    height: 142,
    marginTop: 30,
  },
  text1: {
    color: '#fff',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.5,
  },
  text2: {
    color: '#828282',
    fontSize: 12,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 26,
    letterSpacing: 0.5,
  },

  inputText: {
    height: 48,
    width: 350,
    borderColor: '#252A32',
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 16,
    marginLeft: 10,
    marginRight: 10,
    color: 'gray',
  },
  inputTextPass: {
    height: 48,
    width: 350,
    borderColor: '#252A32',
    borderRadius: 8,
    borderWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 16,
    marginLeft: 10,
    marginRight: 10,
    color: 'gray',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    position: 'absolute',
    right: 16,
  },
  icon: {
    color: 'gray',
  },
  inputRegis: {
    width: 340,
    height: 50,
    backgroundColor: '#D17842',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text3: {
    fontFamily: 'Poppins',
    color: '#828282',
    fontWeight: '700',
    lineHeight: 26,
    fontSize: 12,
    letterSpacing: 0.5,
  },
  text4: {
    fontFamily: 'Poppins',
    color: '#D17842',
    fontWeight: '700',
    lineHeight: 26,
    fontSize: 12,
    letterSpacing: 0.5,
    marginLeft: 3,
  },
});
