import React, { useState } from 'react';
import {
  View, 
  Text, 
  StyleSheet,
  TextInput,
  Platform,
  FlatList
} from 'react-native';
import { ButtonAdd } from '../components/ButtonAdd';
import { FlashCards } from '../components/FlashCards';


export  function Home(){
const [newSkill, setNewSkill] = useState('');
const [mySkills, setMySkills] = useState([]);
const [greeting, setGreeting] = useState('');

function handleAddNewSkill(){
  setMySkills( oldState => [...oldState, newSkill]);
}
useState(()=>{
  const currentHour = new Date().getHours();
  if(currentHour < 12){
    setGreeting('Good mornig!');
  }else if(currentHour > 12 && currentHour < 18){
    setGreeting('Good afternoon!');
  }else{
    setGreeting('Good night!')
  }
}, [greeting])

  return(
    <>
      <View style={styles.container} >
        <Text style={styles.title}>Welcome, Jefferson</Text>
        <Text style={styles.greeting}>
          {greeting}
        </Text>
        <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
        />

       <ButtonAdd  onPress={handleAddNewSkill}/>

        <Text style={[styles.title, {marginVertical: 50}]}>
          My Skillss
        </Text>
      <FlatList
        data={mySkills}
        keyExtractor={item=> item}
        renderItem={({item})=>(
          <FlashCards skill={item}/>
        )}
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
    },
    greeting:{
      color: '#fff'
    }
});