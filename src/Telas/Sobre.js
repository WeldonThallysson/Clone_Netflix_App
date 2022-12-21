import React from 'react';
import { View, Text,StyleSheet,Image, TextInput, Linking,StatusBar} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



 // Essa tela eu vou terminar mostrando para vocês aqui agora

export default function Sobre() {

   async function Link(){
      await Linking.openURL('https://github.com/WeldonThallysson?tab=repositories ')
   }
 return (
   <View style={Estilos.conteinerGeral}>
     
        <StatusBar backgroundColor={'black'}/>
     <View style={Estilos.ConteinerImg}>
      <Image source={require('../imgs/img.png')} style={{width: 400,
      height: 200}}/>
      </View>   


      <View style={Estilos.conteinerTexto}>
       <Text style={Estilos.TextoPrincipal}>O App foi feito com o intuito de apresentar como um projeto de meu portifólio e também com o objetivo de exibir filmes, como uma replica do App netflix (Original),usando requisições Http e ao mesmo tempo consumindo dados estáticos, e para ver o código, ele está aberto no git hub totalmente acessivel ! </Text>
      
       <Text style={[Estilos.TextoBtn,{fontSize:12}]}>Esse Projeto é apenas uma Replica do App Netflix, não é Oficial !</Text>
         
        <View style={Estilos.conteinerBtn}>
          <TouchableOpacity style={Estilos.btn}onPress={() => {Link()}}>
            <Text style={Estilos.TextoBtn}>Acessar Git hub</Text>
          </TouchableOpacity>
        </View>
        </View>
   </View>
  );
}

const Estilos = StyleSheet.create({
   conteinerGeral:{
   flex:1,alignItems: 'center',
   backgroundColor: 'black'
   },
   ConteinerImg:{
    

   },
   BackgroundImage:{
      width: 200,
      height: 200
   },
   conteinerTexto:{
      marginTop: '15%',
      margin: 10,
   },
   TextoPrincipal:{

    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'justify',
    margin:2,
    fontStyle:'italic',
    color: 'white'
    
   },
   conteinerBtn:{
    marginTop: '20%',
    alignItems: 'center',

   },
   btn: {
      width: 150,
      height: 40,
      backgroundColor: 'red'
   } ,
   TextoBtn:{
    padding: 8,
    textAlign: 'center',
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold'
   } 
})