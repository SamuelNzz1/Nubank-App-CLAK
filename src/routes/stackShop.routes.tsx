import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { Help } from "../views/stack/HelpCLAK";
import { Shop } from "../views/tab/ShopCLAK";
const Stack : any= createNativeStackNavigator();

export default function StackRoutesShop(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <>
                <Stack.Screen name="ShopMain" component={Shop} />
                <Stack.Screen name="ShopHelp" component={Help} />
                
            </>
        </Stack.Navigator>
        )
}