import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { cartao } from "../../../svgs/cartao";
import { SvgXml } from "react-native-svg";
type PropsCartao = {
    navigation: any
}
export const Cartao: React.FC<PropsCartao> = () =>{
    return(
      <TouchableOpacity style = {styles.myCard}>
      <SvgXml xml={cartao}/>
      <Text style={ styles.textOptions }>
          Meus Cartões
      </Text>
  </TouchableOpacity>
    )

}
const styles = StyleSheet.create({
  textOptions: {
    fontSize: 14
},
myCard: {
    width: "100%",
    height: 60,
    backgroundColor: "#F0F1F5",
    gap: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    flexDirection: "row",
    alignItems:"center",
       
    

}
})