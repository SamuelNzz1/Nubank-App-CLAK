import React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { RFValue as RF } from "react-native-responsive-fontsize"
import { arrowGo } from "../../../svgs/GenericsIcons/arrows"
import { SvgXml } from "react-native-svg"
type ButtonsSee = {
  money: number
}
export const ButtonSeeAcount :  React.FC <ButtonsSee> = ( {money} ) =>{
    return (
    <TouchableOpacity
      style = {styles.buttonStyles}
    >
      <Text
        style = {{color: "black", fontWeight: "bold", fontSize: RF(18) }}
      >
          Conta
      </Text>
      <Text
         style = {{color: "black", fontWeight: "bold", fontSize: RF(15) }}
      >
        R$ {money}
      </Text>
      <SvgXml 
        xml = {arrowGo}
        style = {{position: "absolute", right: 10, top: 25}}
      /> 
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  buttonStyles: {
    width: "100%",
    height: "15%",
    gap: 20,
    marginTop: 20
  }
})