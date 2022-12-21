import React from 'react';
import { View, TouchableOpacity,Text,StyleSheet,Image} from 'react-native';

export default function ModalArt({filmes,voltar}) {
 return (
   <View style={Estilos.conteiner}>

    <View style={Estilos.ModalConteiner}>
    <TouchableOpacity style={Estilos.btnVoltar} onPress={voltar}>
        <Text style={Estilos.TxtBtn}>Voltar</Text>
    </TouchableOpacity>
    <Image source={{uri: filmes.foto}} style={{width: 306, height: 150}}/>
    <Text style={Estilos.tituloPrincipal}>{filmes.nome}</Text>
    <Text style={Estilos.sinopse}>Sinopse: {filmes.sinopse}</Text>
    <Text style={Estilos.descricao}>{filmes.descricao}</Text>
    </View>

   </View>
  );
}

const Estilos =  StyleSheet.create({
    conteiner:{
        marginLeft:10,
        marginRight:10,
        flex:1,
        alignItems: 'center',
        justifyContent:'flex-end'
    },
    ModalConteiner:{
        width: '90%',
        height: '80%',
        backgroundColor: '#121212',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    TxtBtn:{
        fontSize: 15,
        color: 'white'
    },
    btnVoltar:{
        backgroundColor: '#E52243',
        padding:10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5, 
    },
    tituloPrincipal:{
        textAlign:'center',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
        color: 'white'
    },
    sinopse:{
      color:'#FFF',
      fontSize: 15,
      marginBottom: 8,
      marginLeft: 10      
    },

    descricao:{
        color: '#FFF',
        marginLeft: 10,
        marginRight: 10,
    }

})