import React, {useState} from 'react';
import { View, StyleSheet,Image,TouchableOpacity,Modal,Text} from 'react-native';
import ModalArt from './ModalArt';


export default function FilmesExibidos({data}) {

    const [modal,setModal] = useState(false)

 return (
    <View style={{padding:10}}>
      
            <View style={{alignItems:'flex-start',justifyContent: 'flex-start'}}>
            <Text style={{textAlign: 'right',fontWeight:'bold',fontSize: 16,color: 'white',}}>{data.nome}</Text>
          
          <View style={{flex:1, justifyContent:'center',alignItems: 'center',margin:5}}>
           </View>
            <Image source={{uri: data.foto}} style={{width: 345, height: 200,zIndex:2,borderRadius: 7}}/>
          </View>

          <View style={{alignItems: 'flex-end',marginTop: -40,zIndex:9,}}>
            <TouchableOpacity onPress={() => {setModal(true)}} style={{width: 100, backgroundColor: '#09A6FF',opacity:1,padding:3,borderTopLeftRadius: 5,borderBottomRightRadius: 5}}>
              <Text style={{textAlign:'center',fontSize: 18, color: 'white'}}>Leia Mais</Text>
            </TouchableOpacity>
          </View>

        <Modal transparent={true} animationType='slide' visible={modal}>

            <ModalArt filmes={data} voltar={() => setModal(false)}/>

        </Modal>
        </View>
  );
}

const Estilos = StyleSheet.create({
    conteinerIndicador:{
     flex:1,alignItems:'center',
     justifyContent: 'center',
     backgroundColor: 'white'
    },
    conteinerGeral:{
     flex:1,
     backgroundColor:'#121212',
    },
    TextoPrincipal:{
     fontSize: 15,color: 'white',
    }, 
 })