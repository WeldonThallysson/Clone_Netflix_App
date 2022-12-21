import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Personalizado from "./customDrawer/Personalizado";
import Home from "./src/List/Home";
import Sobre from "./src/Telas/Sobre";

const Drawer = createDrawerNavigator()

export default function DrawerNav(){
       return(
          <Drawer.Navigator 
          
        
          screenOptions={{ headerShown: false, drawerStyle:{
            backgroundColor: '#121212',
            
          },
          drawerActiveBackgroundColor: 'transparent',
          drawerActiveTintColor: 'red',
          drawerInactiveTintColor: 'white',
         
           
          
          }}  >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Sobre" component={Sobre} />

          </Drawer.Navigator>


       )
}

