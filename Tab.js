import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerNav from './Drawer';
import Filmes from './src/Telas/Filmes';
import Series from './src/Telas/Series';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator()

export default function TabBarra() {
 return (
    
     <Tab.Navigator screenOptions={{headerShown:false}}>
         <Tab.Screen name="DrawerNav" component={DrawerNav} options={{
          tabBarStyle: {backgroundColor: '#121212'},
          tabBarIcon: ({color,size }) => {
          return <Icon name="home" size={size} color={color}/>
         
        } ,
        title: 'Home'
        
      } 
      
      
         }/>

         <Tab.Screen name="Series" component={Series} options={{
          tabBarStyle: {backgroundColor: '#121212'},
                  
          tabBarIcon: ({color,size }) => {
          return <Icon name="laptop" size={size} color={color}/>
         
        }
        
      } 
      
      
         }/>
           <Tab.Screen name="Filmes" component={Filmes} options={{
          tabBarStyle: {backgroundColor: '#121212'},
                  
          tabBarIcon: ({color,size }) => {
          return <Icon name="desktop" size={size} color={color}/>
         
        }
        
      } 
      
      
         }/>


   </Tab.Navigator>
   
  );
}