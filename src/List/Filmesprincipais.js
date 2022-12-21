import React from 'react';
import { View,Image,Text,TouchableOpacity,StyleSheet} from 'react-native';

export default function FilmesPrincipais(props) {
 return (
   <View>
      <TouchableOpacity style={() => {}}>
       <Image source={{uri: props.data.img}} style={Estilos.banners}/>
      </TouchableOpacity>
  </View>

  );
}

const Estilos = StyleSheet.create({
   banners:{
    width:120,height:180, margin: 5
   }
})