import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, Button, View } from 'react-native'
import { useState } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'

function Message(props) {
  return (
    <Text style={styles.container}>
      <Button title="★" onPress={() => props.clickMessage(props.name)} />
      {props.name} !
    </Text>
  )
}
const feedvackArray = [
  { id: 1, name: 'Excellent' },
  { id: 2, name: 'Good' },
  { id: 3, name: 'Bad' }
]

export default function Feedback() {
  const darkTheme = useContext(ThemeContext)
  const themeStyles = {
    backgroundColor: darkTheme ? '#00f' : '#ccc',
    color: darkTheme ? '#ccc' : '#333',
    padding: '2rem',
    margin: '2rem',
    justifyContent: 'center'
  }

  const [chosen, setChosen] = useState('')
  const updateNameOfChosen = (newName) => {
    setChosen(newName)
  }
  return (
    <View style={styles.container}>
      <View style={themeStyles}>
        <Text>
          {chosen === '' ? 'Rating' : 'Thank You! ' + chosen + '\n'}
          {feedvackArray.map((can) => (
            <Message
              key={can.id}
              name={can.name}
              clickMessage={updateNameOfChosen}
            />
          ))}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
    justifyContent: 'center',
    flexDirection: 'row'
  }
})
