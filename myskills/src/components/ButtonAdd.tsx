import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet
} from 'react-native'

interface buttonPress extends TouchableOpacityProps{
  title: string;
}

export function ButtonAdd({title, ...rest }: buttonPress){
  return(
    <>
        <TouchableOpacity 
        style={styles.button}
        activeOpacity={.7} 
         {...rest}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    </>
  )
}
const styles = StyleSheet.create({

 button:{
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 15
  },
  buttonText:{
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold'
  },

});