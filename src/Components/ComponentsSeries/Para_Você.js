import React from 'react';
import { View,Image,Text,TouchableOpacity,StyleSheet} from 'react-native';

export default function Para_Voce(props) {
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
    width:120,height:200, margin: 5
   }
})