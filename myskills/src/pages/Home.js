import React from 'react';
import {View, Text} from 'react-native';


export  function Home(){
  return(
    <>
      <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
        <Text>Welcome to  React native</Text>
       <Text > Ignite </Text>
     </View>
  </>
  )
}