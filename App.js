import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import React, {useState} from 'react'
import smiling from './app_assets/smiling.jpg'
import time from './app_assets/time.jpg'
import goal from './app_assets/goal.jpg'


export default function App() {

  

  const [colorChange, setColorChange] = useState('')
  const [word, setWord] = useState('')

  const wordsAndImage = [


    {
      word: `don't be sad, be happy`,
      // image: {smiling}
      color: '#FFDBA4'
    },
    {
      word: `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs`,
      // image: {time}
      color: '#F5E8C7'
    },
    {
      word: `If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron`,
      // image: './app_assets/goal.jpg'
      color: '#C4DFAA'
    }

  ]

  const changeText = () => {
    const len = wordsAndImage.length
    let randomValue = wordsAndImage[Math.floor(Math.random() * len)].word
    let randomColor = wordsAndImage[Math.floor(Math.random() * len)].color
    setWord(randomValue)
    setColorChange(randomColor)
  }

  return (
    <View style={[styles.container, {backgroundColor: colorChange}]}>
      <View style={styles.header}>
        <Text style={{marginBottom: 20, fontSize: 25}}>Hello, find your quotes here!</Text>    
      </View>
      <View style={styles.content}>
        <Text style={styles.randomWord}>{word}</Text>
      </View>
      <Button onPress={changeText} title="Find new Quotes!" />
       
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    height: 150,
    width: 290,
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'red',
    padding: 8,
    marginBottom: 10,
  },
  randomWord: {
    fontSize: 20,
  },
  // image: {
  //   width: '100%',
  //   height: '100%',
    
  // }


});
