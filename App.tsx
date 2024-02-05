import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Wellcome from './Screen/Wellcome'
import LoginScreen from './Screen/LoginScreen'
import Register from './Screen/Register'
import HomeScreen from './Screen/HomeScreen'
HomeScreen
LoginScreen
Register
export default function App() {
  return (
    <View style={styles.container}>
    <HomeScreen/>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container:{flex:1,
  }
})