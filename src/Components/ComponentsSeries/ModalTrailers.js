import React,{useState} from 'react';
import { View,StyleSheet,Text,Image,Linking,TouchableOpacity } from 'react-native';
import Video from 'react-native-video'
import AbaEmAlta from '../../List/services/AbaEmAlta';

export default function ModalTrailers(props) {
   

 return (
    <View style={Estilos.Conteiner}>
      <View>

        <TouchableOpacity onPress={props.fechar} style={Estilos.btnVoltar}>
            <Text style={Estilos.TxtBtn}>Fechar</Text>
        </TouchableOpacity>

        <Video source={{uri:props.trailer}} autoplay={true} controls={true} style={Estilos.Imge}/>

    
        </View>
    </View>
  );
}

const Estilos = StyleSheet.create({

     Conteiner:{
        flex: 1,
        width: '90%',
        height: '80%',
        marginTop: '35%',
        margin: 20,
        backgroundColor: '#121212',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
     },
     btnVoltar:{
        backgroundColor: '#E52243',
        padding:10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5, 
    },
    btnSaibaMais:{
      width: '50%',
      backgroundColor: '#E52243',
      padding:10,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5, 
  },
    TxtBtn:{
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    descricao:{
        color:'#FFF',
        fontSize: 12,
        marginBottom: 8,
        marginLeft: 10      
      },
      Imge:{width: 322,height:180,borderBottomRightRadius: 10,borderBottomLeftRadius: 10,
      },
      textoDescricao:{
        fontSize: 18,fontWeight: 'bold', color: 'white',textAlign: 'justify'
      },
      Conteinertexto:{
        alignItems: 'center',
        marginTop: '10%',
        margin: 10

      }
      

})