import React,{useState} from 'react';
import { View,Image,Text,TouchableOpacity,StyleSheet,Modal} from 'react-native';
import ModalTrailers from './ModalTrailers';


export default function Em_Alta(props) {
 
  const [m,setM] = useState(false)

  function abrirModal(){
      setM(true)
  }

  return (
   <View>
      <TouchableOpacity onPress={() => {abrirModal()}}>
        <Image source={{uri: props.data.img}} style={Estilos.banners}/>
      </TouchableOpacity>

      <Modal transparent={true} visible={m} >
          <ModalTrailers trailer={props.data.trailers} fechar={() => {setM(false)}} />
      </Modal>
  </View>

  );
}

const Estilos = StyleSheet.create({
   banners:{
    width:120,height:200, margin: 5
   }
})