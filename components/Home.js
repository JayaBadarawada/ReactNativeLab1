import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { useState } from 'react'
import { ThemeContext } from '../App'
import { useContext } from 'react'
import IntroRecipe from './IntroRecipe'

export default function Home() {
  const [name, setName] = useState('')
  const darkTheme = useContext(ThemeContext)
  const themeStyles = {
    backgroundColor: darkTheme ? '#00f' : '#ccc',
    color: darkTheme ? '#ccc' : '#333',
    padding: '2rem',
    margin: '2rem',
    justifyContent: 'center',
    alignItems: 'center'
  }

  return (
    <View style={themeStyles}>
      <Text>Enter your name:</Text>
      <TextInput
        style={styles.inputContainer}
        placeholder="Name"
        onChangeText={(val) => setName(val)}
      />
      <Text>welcome {name}</Text>
      <IntroRecipe />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: '#777',
    borderWidth: 4,
    padding: 8,
    margin: 10,
    width: 100
  }
})
