import React from 'react';
import { View,StyleSheet,Text,Image,Linking,TouchableOpacity } from 'react-native';

export default function ComponentsSeries(props) {
  async function Link(){
    await Linking.openURL(props.informacoes.conhecer)
  }
 return (
    <View style={Estilos.Conteiner}>
        <TouchableOpacity onPress={props.fechar} style={Estilos.btnVoltar}>
            <Text style={Estilos.TxtBtn}>Fechar</Text>
        </TouchableOpacity>

        <Image source={{uri: props.informacoes.img}} style={Estilos.Imge}/>

        <View style={Estilos.Conteinertexto}>
            <Text style={[Estilos.textoDescricao,{paddingBottom: 5}]}>{props.informacoes.nome}</Text>
            <Text style={[Estilos.textoDescricao,{fontSize: 13,fontWeight: '100'}]}>{props.informacoes.descricao}</Text>
        </View>

        <View style={{alignItems: 'flex-end', marginTop: '5%'}}>
            <TouchableOpacity onPress={() => {Link()}}style={Estilos.btnSaibaMais}>
                <Text style={Estilos.TxtBtn}>Saiba Mais</Text>
            </TouchableOpacity>
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