import * as React from 'react';
import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';



export default function App() {

  const [ binNumber, setBiNumber ] = useState(0)
  const [ decNumber, setDecNumber ] = useState(0)

  async function convertDecToBin(){

      console.log("convertendo")
      setBiNumber(parseInt( decNumber ).toString(2))
      console.log(binNumber)
  
  }
  
  return (
    <View style={styles.container}>
      <View style={{position: 'absolute', top: 50, textAlign: 'center', alignItems: 'center'}}>
        <Text style={styles.title}>Conversor {"\n"}Decimal para Binário</Text>
      </View>
      <Text style={{alignSelf: 'flex-start', left: 31, color: '#F5FCFF'}}>Coloque o número decimal para calcular:</Text>
      <TextInput style={styles.textInput}
        value={decNumber}
        keyboardType={"numeric"}
        onChangeText={value => {setDecNumber(value)}}
      ></TextInput>
      <Text style={{alignSelf: 'flex-start', left: 31, color: '#F5FCFF'}}>Resultado em Binário:</Text>
      <TextInput style={styles.textInput} editable={false} value={binNumber}></TextInput>
      <TouchableOpacity style={styles.button} onPress={() => convertDecToBin()} >
        <Text style={{color: "white", fontFamily: "Roboto", }}>Converter</Text>
      </TouchableOpacity>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  textInput: {
    borderRadius: 10,
    margin: 5,
    width: 300, 
    height: 35,
    backgroundColor: "#c4c4c4",
    textAlign: 'center',
    color: "black",
    fontFamily: "Roboto",
    fontSize: 20,

  }, 
  button: {
    margin: 10,
    borderRadius: 20,
    backgroundColor: 'orange',
    width: 150, 
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    fontSize: 24,
    color: "orange",
    fontFamily: "Roboto",
  },
});