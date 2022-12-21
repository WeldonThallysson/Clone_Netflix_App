import React from 'react';
import { View,Image,Text,StyleSheet } from 'react-native';

export default function SeriesLancamento(props) {
 return (
   <View>
   
      <Image source={{uri: props.data.img}} style={Estilos.banners}/>
    
  </View>

  );
}

const Estilos = StyleSheet.create({
  banners:{
    width:120,height:200, margin: 5
  }
});