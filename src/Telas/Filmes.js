import React,{useEffect,useState} from 'react';
import { View,Text,FlatList, ActivityIndicator,StyleSheet,Image, TouchableOpacity,Modal} from 'react-native';

import Api from '../List/services/Api';
import FilmesExibidos from './FilmesExibidos';

export default function Filmes() {
  
    const [reqFilmes,setReqFilmes] = useState([]);
    const [indicador,setIndicador] = useState(true);
   

    useEffect(() => {
      async function carregarFilmes(){
        const response = await Api.get('r-api/?api=filmes')
        console.log(response.data)
        setReqFilmes(response.data)
        setIndicador(false)
      }
     
       carregarFilmes()
    },[])
 
 
    if(indicador){
        return(
        <View style={Estilos.conteinerIndicador}>
          <ActivityIndicator size={35} color={'red'}/>
        </View>
    )
 } else {
  return (
    <View style={Estilos.conteinerGeral}>

          <View style={Estilos.conteinerImg}>
          <Image source={{uri:'https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png'}} style={{width: 100,height: 25}}/>

        </View>
        <FlatList 
        data={reqFilmes}
        keyExtractor={item => item.id}
        renderItem={({item}) => <FilmesExibidos data={item}/>
        
        }/>
      
     </View>
  
  
  )
 }

}
const Estilos = StyleSheet.create({
 
  conteinerIndicador:{
   flex:1,alignItems:'center',
   justifyContent: 'center',
   backgroundColor: '#121212',
  },
  conteinerGeral:{
   flex:1,
   backgroundColor:'#121212',
  },
  TextoPrincipal:{
   fontSize: 15,color: 'white',
  }, 
  conteinerImg:{
    width: '90%',
    alignItems: 'center',
    paddingTop: 20,
    marginTop: 10,
    paddingBottom: 20,
    paddingLeft: 35,
    elevation: 8,
  }

})

