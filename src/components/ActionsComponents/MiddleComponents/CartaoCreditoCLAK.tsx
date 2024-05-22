import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { RFValue as RF } from "react-native-responsive-fontsize"
import { arrowGo } from "../../../svgs/GenericsIcons/arrows"
import { SvgXml } from "react-native-svg"
export const CartaoCredito: React.FC = () => {
  return (
    <TouchableOpacity
    style = {styles.buttonStyles}
  >
    <Text
      style = {{color: "black", fontWeight: "bold", fontSize: RF(18) }}
    >
        Cartão de crédito
    </Text>
    <Text
       style = {{color: "grey", fontWeight: "bold", fontSize: RF(15) }}
    >
      Fatura atual
    </Text>
    <Text
       style = {{color: "black", fontWeight: "bold", fontSize: RF(20) }}
    >
      R$ 250,00
    </Text>
    <Text
       style = {{color: "grey", fontWeight: "bold", fontSize: RF(13) }}
    >
      Limite disponível de R$ 12.502,00
    </Text>
    <SvgXml 
      xml = {arrowGo}
      style = {{position: "absolute", right: 10, top: 10}}
    /> 
  </TouchableOpacity>
) 
}

const styles = StyleSheet.create({
  buttonStyles: {
    width: "100%",
    height: "15%",
    gap: 8,
    marginTop: 20
  }
})