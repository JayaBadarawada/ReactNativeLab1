import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import { useContext } from 'react'
import { ThemeContext } from '../App'

export default function ImageCom() {
  const darkTheme = useContext(ThemeContext)
  const themeStyles = {
    backgroundColor: darkTheme ? '#00f' : '#fff',
    color: darkTheme ? '#fff' : '#00F',
    justifyContent: 'center',
    alignItems: 'center',
    Padding: '4rem',
    marginTop: 20
  }
  return (
    <View style={themeStyles}>
      <Image
        style={{ height: 100, width: 100 }}
        source={require('../assets/logo.png')}
      />
      <Text style={styles.bold}>Min Recipe</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  bold: { fontWeight: 'bold', fontSize: 30 }
})
