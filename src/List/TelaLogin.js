import React from 'react';
import { View,Text,StyleSheet,TextInput,TouchableOpacity,Image,StatusBar} from 'react-native';

import { useNavigation } from '@react-navigation/native'; 

export default function TelaLogin() {

  const navigation = useNavigation()
   
  function navegarHome(){
    navigation.navigate('TabBarra', {nome:'thallysson', email: 'thallyssonprogramer14ano@gmail.com'})

  }
 return (
  <View style={Estilos.conteinerGeral}>
   <StatusBar backgroundColor={'#001011'}/>

  <View style={Estilos.conteinerBtn}>
    <Image source={{uri:'https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png'}} style={Estilos.Img}/>
    </View>

  
    
    <TextInput placeholder='Email' placeholderTextColor={'white'} style={Estilos.textInput}/>

    <TextInput placeholder='Senha' placeholderTextColor={'white'} style={Estilos.textInput}/>

    <TouchableOpacity style={Estilos.btn} onPress={() => navegarHome()}>
      <Text style={[Estilos.textoBtn,{color:'#511217',padding: 10}]}>Acessar</Text>
     
    </TouchableOpacity>

    <TouchableOpacity style={Estilos.btn2} onPress={() => navegarHome()}>
      <Text style={Estilos.textoBtn}>Esqueceu sua Senha?</Text>
    </TouchableOpacity>


    </View>
  );
}


const Estilos = StyleSheet.create({
  
   conteinerGeral:{
    flex:1,backgroundColor: '#001011',
   },
   conteinerBtn:{
    alignItems:'center', justifyContent: 'center', marginTop: 100
   },
   textInput:{
    borderColor: 'red',borderBottomWidth: 1,width: 250, marginLeft: 50,marginTop: 40,color:'white'
   },
   btn:{
    width: 180,height: 40 ,backgroundColor: 'red',margin:80
   },
   btn2:{
    width: 180,height: 40 ,marginLeft:80,marginTop: -60
   },
   Img:{
    width: 200, height: 50
   },
   textoBtn:{
    textAlign: 'center',padding: 2,fontSize: 13,fontWeight: 'bold', color: 'white'
   }


})