import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import Home from './components/Home'
import ImageCom from './components/ImageCom'
import { useState } from 'react'
import Meal from './components/Meal'
import Feedback from './components/Feedback'
export const ThemeContext = React.createContext()

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ImageCom />
      <Home />
      <Meal />
      <View style={styles.buttonContainer}>
        <Button title="Theme" color="#777" onPress={toggleTheme} />
      </View>
      <Feedback />
    </ThemeContext.Provider>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center'
  }
})
