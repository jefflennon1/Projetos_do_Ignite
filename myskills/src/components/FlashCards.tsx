import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet
} from 'react-native';

interface flashCards extends TouchableOpacityProps{
   skill: string;
}

export function FlashCards({skill, ...rest} : flashCards){
  return(
    <>  
      <TouchableOpacity 
        style={styles.buttonSkill}
        {...rest}
        >
            <Text style={styles.textSkill}>
            {skill}
            </Text>
      </TouchableOpacity>
    </>
  )
}


const styles = StyleSheet.create({
buttonSkill:{
  backgroundColor: '#1F1E25',
  padding: 10,
  alignItems: 'center',
  borderRadius: 50,
  marginVertical: 5
},
textSkill:{
  color: '#ffff',
  fontSize: 20,
  fontWeight: 'bold'
}
});