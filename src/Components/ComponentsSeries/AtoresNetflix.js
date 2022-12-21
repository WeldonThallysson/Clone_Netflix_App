import React,{useState} from 'react';
import { View,Text,Image,StyleSheet,TouchableOpacity,Modal,ScrollView} from 'react-native';
import ModalInformacoes from '../ComponentsSeries/ModalInformacoes'

export default function AtoresNetflix({data}) {
 
   const [ativam,setAtivam] = useState(false)

   function carregarModal(){
    setAtivam(true)
   }

 return (
   <ScrollView>
     <View>
      <View style={Estilos.ContainerBtn}>
        <TouchableOpacity onPress={() => carregarModal()} style={Estilos.Btn}>
        <Image source={{uri: data.img}} style={{width: 65, height:60, padding: 10,borderRadius: 30, borderWidth: 1,
      borderColor: '#5D2E46'}}/> 
      
        </TouchableOpacity>
      </View>
      <View style={Estilos.ConteinerNome}> 
       <Text style={Estilos.Texto}>{data.nome}</Text>
      </View>
       
       <Modal transparent={true} visible={ativam}>
        <ModalInformacoes informacoes={data} fechar={() => setAtivam(false)}/>
      </Modal>
      </View>
   </ScrollView>
  );
}


const Estilos = StyleSheet.create({
     ContainerBtn:{
      padding: 5,
     
    

     },
     Btn:{
     
     },
     ConteinerNome:{
      
     },
     Texto:{
      textAlign: 'center',
      fontSize:10,
      paddingLeft: 15,
      fontWeight: 'bold',
      width: 60,
      color: 'white'
     }
})