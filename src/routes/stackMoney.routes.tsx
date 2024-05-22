import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { Help } from "../views/stack/HelpCLAK";
import { Money } from "../views/tab/MoneyCLAK";
const Stack : any= createNativeStackNavigator();

export default function StackRoutesMoney(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <>
                <Stack.Screen name="MoneyMain" component={Money} />
                <Stack.Screen name="MoneyHelp" component={Help} />
                
            </>
        </Stack.Navigator>
        )
}