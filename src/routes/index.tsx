import {NavigationContainer} from "@react-navigation/native";

import Tabs from "./tab.routes";
import { useEffect, useState } from "react";

export default function Routes(){
  
 return(
    <NavigationContainer>
      <>
        <Tabs></Tabs>
       </>
    </NavigationContainer>
 ) 

}