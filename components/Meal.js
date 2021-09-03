import React from 'react'
import { StyleSheet, Text, View, Linking, Button } from 'react-native'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'

export default function Meal() {
  const [recipe, setRecipe] = useState({})
  const darkTheme = useContext(ThemeContext)
  const themeStyles = {
    backgroundColor: darkTheme ? '#00f' : '#ccc',
    color: darkTheme ? '#ccc' : '#333',
    padding: '2rem',
    margin: '2rem',
    textAlign: 'center'
  }
  const newRecipe = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((json) => {
        setRecipe(json.meals[0])
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((json) => {
        setRecipe(json.meals[0])
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])
  return (
    <View style={themeStyles}>
      <Text>{recipe.strMeal}</Text>
      <Text>{recipe.strCategory}</Text>
      <Text>{recipe.strArea}</Text>
      <Text>{recipe.strInstructions}</Text>
      <View style={styles.buttonFeatures}>
        <Button color="#777" title="New Recipe" onPress={newRecipe} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonFeatures: {
    width: '100%',
    margin: 10,
    alignItems: 'center'
  }
})
