import React from 'react';
import {
  View, 
  Text, 
  StyleSheet,
  TextInput,
  Platform
} from 'react-native';


export  function Home(){
  return(
    <>
      <View style={styles.container} >
        <Text style={styles.title}>Welcome to  React native</Text>
        <TextInput
        style={styles.input}
        />
      </View>
  </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal : 20,
    paddingVertical: 70,
    backgroundColor: '#101215'
  },
  title:{
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input:{
    backgroundColor: '#1F1E25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 5,
  }
});