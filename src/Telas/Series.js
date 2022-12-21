import React from 'react';
import { View,Text,StyleSheet,FlatList,Image,ScrollView} from 'react-native';
import AbaSeries from '../List/services/AbaSeries'
import AbaParaVocê from '../List/services/AbaParaVoce'
import AbaEmAlta from "../List/services/AbaEmAlta"
import AbaAtoresNetflix from '../List/services/AbaAtoresNetflix'

import Em_Alta from '../Components/ComponentsSeries/Em_Alta'
import Para_Voce from '../Components/ComponentsSeries/Para_Você'
import SeriesExibidas from '../Components/ComponentsSeries/SeriesExibidas'
import AtoresNetflix from '../Components/ComponentsSeries/AtoresNetflix'



export default function Series() {
 return (
   <ScrollView style={Estilos.conteinerGeral}>
        
       <View style={{margin: 10}}>
        <View style={Estilos.conteinerImg}>
          <Image source={{uri:'https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png'}} style={{width: 100,height: 25}}/>
        </View>

      <View style={Estilos.conteinerSubDescricao}>
        <Text style={Estilos.TextoPrincipal}>Em Alta !</Text>
    </View>

      <FlatList
      data={AbaEmAlta}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <Em_Alta data={item}/>}
    />

      <View style={Estilos.conteinerSubDescricao}>
        <Text style={Estilos.TextoPrincipal}>Para Você</Text>
      </View>
          <FlatList
      data={AbaParaVocê}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <Para_Voce data={item}/>}
    />

    <View style={Estilos.conteinerSubDescricao}>
      <Text style={Estilos.TextoPrincipal}>Lançamentos</Text>
    </View>
      <FlatList
      data={AbaSeries}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <SeriesExibidas data={item}/>}
    />

    <View style={Estilos.conteinerSubDescricao}>
      <Text style={Estilos.TextoPrincipal}>Atores Populares</Text>
    </View>
      <FlatList
      data={AbaAtoresNetflix}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <AtoresNetflix data={item}/>}
    />
        </View>
    </ScrollView>
  );
}

const Estilos = StyleSheet.create({
    conteinerGeral:{
      flex:1,backgroundColor:'#121212'
    },  
    conteinerImg:{
      width: '90%',
      alignItems: 'center',
      paddingTop: 20,
      paddingLeft: 35,
      elevation: 8,
    },
    conteinerSubDescricao:{
   
      marginTop: '2%',
      margin:12

    },

    TextoPrincipal:{
      fontSize: 16,color: 'white',fontWeight: 'bold'
    },
   
})