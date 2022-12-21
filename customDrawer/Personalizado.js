import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons';
import {DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer'

 function Personalizado(props) {
 return (
   <DrawerContentScrollView {...props}>
          <View style={{width: '100%', height: 80, alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
              
            <View>
                <Icon name="home" size={25} color={'white'}/>
                
            </View>




          </View>

          <DrawerItemList {...props}/>
   </DrawerContentScrollView>
  );
}

export default Personalizado