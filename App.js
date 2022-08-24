import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableHighlight, Alert } from 'react-native';
import React, {useState} from 'react'
import * as Clipboard from 'expo-clipboard';



export default function App() {

  

  const [colorChange, setColorChange] = useState('')
  const [word, setWord] = useState('')
  const [showWord, setShowWord] = useState()
  const [copiedText, setCopiedText] = useState('')

  const copyToClipboard = async() => {
    await Clipboard.setStringAsync(word)
    Alert.alert('text copied')
  }

  const fetchCopiedText = async() => {
    const text = await Clipboard.getStringAsync()
    setCopiedText(text)
  }


  const wordsAndImage = [


    {
      word: `don't be sad, be happy`,
      color: '#FFDBA4'
    },
    {
      word: `Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs`,
      
      color: '#F5E8C7'
    },
    {
      word: `If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron`,
      
      color: '#C4DFAA'
    }

  ]

  const renderText = () => {
    const len = wordsAndImage.length
    const randomNumber = Math.floor(Math.random() * len)
    let randomValue = wordsAndImage[randomNumber].word
    let randomColor = wordsAndImage[randomNumber].color
    setWord(randomValue)
    setColorChange(randomColor)
    setShowWord('words will be here')
  }


  return (
    <View style={[styles.container, {backgroundColor: colorChange}]}>
      <View style={styles.header}>
        <Text style={{fontSize: 25}}>Hello, find your quotes here!</Text>    
      </View>
      <View style={styles.content}>
        <Text style={styles.randomWord}>{(showWord == 'words will be here') ? word : 'quotes will be shown here'}</Text>
      </View>
      <View style = {{flexDirection: 'row', justifyContent: 'flex-start', width: '80%', alignItems: 'center' }}>
         <TouchableHighlight onPress={renderText}
          activeOpacity={0.5}
          underlayColor="#3876d9" style={[styles.touchable, {marginRight: 10, backgroundColor: '#4287f5', borderWidth: 2,}]}>
           <Text style={{color: 'white'}}>Find Quotes</Text>
         </TouchableHighlight>
         <TouchableHighlight onPress={copyToClipboard}
         
          activeOpacity={0.5}
          underlayColor="#3876d9" style={styles.touchable}><Text>Copy Text</Text></TouchableHighlight>
      </View>
       
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
    width: '80%',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    marginVertical: 15,
  },
  randomWord: {
    fontSize: 20,
    textAlign: 'center',
  },
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#4287f5',
    padding:10,
  }
});
