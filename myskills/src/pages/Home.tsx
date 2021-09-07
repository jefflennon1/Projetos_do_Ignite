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

interface SkillData{
  id: string;
  name: string;
}

export  function Home(){
const [newSkill, setNewSkill] = useState('');
const [mySkills, setMySkills] = useState<SkillData[]>([]);
const [greeting, setGreeting] = useState('');

function handleAddNewSkill(){
    const data ={
      id: String(new Date().getTime()),
      name: newSkill
    }
    setMySkills( oldState => [...oldState, data]);
}
function handleRemoveSkill(id : string){
    setMySkills( oldstate => oldstate.filter(
       skill => id != skill.id
    ))
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
},  )

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

       <ButtonAdd  
        onPress={handleAddNewSkill} 
        title="Add"
        />

        <Text style={[styles.title, {marginVertical: 50}]}>
          My Skillss
        </Text>
      <FlatList
        data={mySkills}
        keyExtractor={item=> item.id}
        renderItem={({item})=>(
          <FlashCards
             skill={item.name}
             onPress={()=> handleRemoveSkill(item.id)}
          />
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