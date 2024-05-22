import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { Help } from "../views/stack/HelpCLAK";
import { Actions } from "../views/tab/ActionsCLAK";
const Stack : any= createNativeStackNavigator();

export default function StackRoutesActions(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <>
                <Stack.Screen name="ActionsMain" component={Actions} />
                <Stack.Screen name="ActionsHelp" component={Help} />
                
            </>
        </Stack.Navigator>
        )
}