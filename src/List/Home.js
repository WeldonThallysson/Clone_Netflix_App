import React,{useLayoutEffect,useState} from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Image,FlatList,ScrollView} from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
//importação dos Dados 
import Populares from './services/Populares';
import SeriesLançamentos from './services/SeriesLancamentos';
import FilmesPrincipais from './services/FilmesPrincipais'
//importação dos Componentes Modularizados
import SeriesLancamento from './SeriesLancamento';
import PopularesNetflix from './PopularesNetflix';
import Filmesprincipais from './Filmesprincipais';



export default function Home() {
  const [imagem,setImagem] = useState('');
  const navigation = useNavigation()
  const route = useRoute()



   
    
  useLayoutEffect(() => {
    navigation.setOptions({
        title: route.params?.nome === '' ? 'DrawerNav'  : route.params?.nome
    
    })
     },[navigation])

 return (
  <ScrollView style={Estilos.conteinerGeral}>
  <View style={Estilos.containerSubGeral}>
  <View style={Estilos.conteinerImg}> 
   <Image source={{uri:'https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png'}} style={Estilos.Img}/>

    <View style={Estilos.Icone}>
     <TouchableOpacity onPress={() => navigation.openDrawer()}>
       <Icon name='th-list' size={28} color={'white'}/>
     </TouchableOpacity>
    </View>
  </View>  
  <View style={Estilos.conteinerBtn}>

    <View style={Estilos.ConteinerTexto}>
     <Text style={Estilos.texto}>Populares na netflix</Text>
    </View> 
    <FlatList
      data={FilmesPrincipais}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <Filmesprincipais data={item}/>}
    />
    <View style={Estilos.ConteinerTexto}>
      <Text style={Estilos.texto}>Filmes Principais</Text>
    </View> 
    <FlatList
      data={Populares}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <PopularesNetflix data={item}/>}
    />
    <View style={Estilos.ConteinerTexto}>
     <Text style={Estilos.texto}>Series Lançamentos</Text>
    </View> 
   <FlatList
      data={SeriesLançamentos}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <SeriesLancamento data={item}/>}
    />
   
 </View>  
  
 </View>

    </ScrollView>
  );
}


const Estilos = StyleSheet.create({
  
   conteinerGeral:{
    flex:1,
    backgroundColor: '#001011',
   },
   containerSubGeral:{
    margin:10
   },

   conteinerBtn:{
   marginTop: 50
   },
  
   conteinerImg:{
    flexDirection:'row', alignItems:'center',justifyContent:"flex-start",margin: 10,
   },
   Img:{
    width: 110, height: 28
   },
   Icone:{
     marginLeft: '58%',

   },
   textoBtn:{
    textAlign: 'center',padding: 6,fontSize: 15,fontWeight: 'bold', color: '#92140C'
   },
   ConteinerTexto:{
  
    marginTop: '2%',
    margin:12
   },
   texto:{
    fontSize:15,
    fontFamily: 'arial',
    color: 'white',
    fontWeight: 'bold'
 
   }


})