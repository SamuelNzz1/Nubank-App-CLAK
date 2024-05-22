import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SvgXml } from "react-native-svg";
import { RFValue as RF } from "react-native-responsive-fontsize";
import StackRoutesActions from "./stackActions.routes";
import StackRoutesMoney from "./stackMoney.routes";
import StackRoutesShop from "./stackShop.routes";
import { Shop, Transfer, Money, ShopSelected, TransferSelected, MoneySelected } from "../svgs/Routes/RoutesIcons";
import { Dimensions, View } from "react-native";

const Tab : any = createBottomTabNavigator();
export default function Tabs() {
    const { width } = Dimensions.get("window");
    const tabBarWidth = width * 0.5;
    const marginLeft = (width - tabBarWidth) / 2;
    return (
        <Tab.Navigator
        style = {{}}
        screenOptions={{
          headerShown: false, 
          tabBarStyle: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            height: 60, // Ajuste a altura conforme necessário
            width: '50%', // Ajuste a largura conforme necessário
            borderTopColor: 'transparent',
            borderRadius: 100,
            marginBottom: 20,
            borderColor: 'grey',
            elevation: 0, // Remove a sombra em Android
            alignSelf: "center",
            position: "absolute",
            marginLeft: marginLeft,
            shadowColor: '#000', // Cor da sombra
    shadowOffset: {
        width: 0, // Ajuste a largura do deslocamento conforme necessário
        height: 2, // Ajuste a altura do deslocamento conforme necessário
    },
    shadowOpacity: 0.25, // Opacidade da sombra
    shadowRadius: 3, // Raio da sombra
        

            
          }, 
        }}> 
          <Tab.Screen 
                name="Actions" 
                component={StackRoutesActions}
                options={({ route }: any) => ({
                  tabBarShowLabel: false,

                  tabBarIcon: ({ focused } : any) => (
                    <View
                      style = { {borderRadius: focused ?  100 : 0, padding: focused ?  10 : 0, backgroundColor: focused ?  "#C084E8" : "white" } }
                    >
                    <SvgXml xml={focused ? TransferSelected : Transfer} />
                    </View>
                    ),
                    tabBarLabelStyle: {
                      fontSize: RF(13), // Tamanho do texto
                      position: "absolute",
                      bottom: 5,
                      color:  "white",
                      
                      
                    
                    },
            })}
            />

            <Tab.Screen 
                name="Money" 
                component={StackRoutesMoney}
                options={({ route }: any) => ({
                  tabBarShowLabel: false,
                    
                  tabBarIcon: ({ focused } : any) => (
                    <View
                      style = { {borderRadius: focused ?  100 : 0, padding: focused ?  10 : 0, backgroundColor: focused ?  "#C084E8" : "white" } }
                    >
                    <SvgXml xml={focused ? MoneySelected : Money} />
                    </View>
                    ),
                    tabBarLabelStyle: {
                      fontSize: RF(13), // Tamanho do texto
                      position: "absolute",
                      bottom: 5,
                      color:  "white"
                    
                    },
            })}
            />

            <Tab.Screen 
                name="Shop" 
                component={StackRoutesShop}
                options={({ route }: any) => ({
                  tabBarShowLabel: false,
                    
                  tabBarIcon: ({ focused } : any) => (
                   
                    <View
                      style = { {borderRadius: focused ?  100 : 0, padding: focused ?  10 : 0, backgroundColor: focused ?  "#C084E8" : "white" } }
                    >
                      <SvgXml xml={focused ? ShopSelected : Shop} />
                    </View>                    
                    ),
                    tabBarLabelStyle: {
                      fontSize: RF(13), // Tamanho do texto
                      position: "absolute",
                      bottom: 5,
                      color:  "white"
                    
                    },
            })}
            />      
              
        
        
        </Tab.Navigator>
      );
    

}