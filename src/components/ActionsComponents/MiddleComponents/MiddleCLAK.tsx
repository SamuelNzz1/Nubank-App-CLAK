import React from "react";
import { StyleSheet, View } from "react-native";
import {ButtonSeeAcount} from "./ButtonSeeAcountCLAK";
import { CarrouselOptions } from "./CarrouselOptionsPayCLAK";
import { Cartao } from "./CartaoCLAK";
import { CarrouselSugestions } from "./CarrouselSugestionsCLAK";
import { CartaoCredito } from "./CartaoCreditoCLAK";
type propsMiddleActions = {
  money: number ,
  navigation: any
}
export const MiddleActions : React.FC<propsMiddleActions> = ({money, navigation}) => {

    return (
    
    <View
      style = {styles.containerMiddle}
    >
      <ButtonSeeAcount
        money={money}
      />
      <CarrouselOptions 
        navigation={navigation}
      />
      <Cartao 
        navigation={navigation}
      />
      <CarrouselSugestions 
      />
      <CartaoCredito />


    </View>
    
  )
}

const styles =StyleSheet.create({
  containerMiddle: {
      height: "75%", 
      paddingHorizontal: 20,
      gap: 40,
     

    
  }
})