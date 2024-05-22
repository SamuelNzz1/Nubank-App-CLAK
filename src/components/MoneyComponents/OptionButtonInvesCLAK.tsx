import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { cartao } from "../../svgs/cartao";
import { SvgXml } from "react-native-svg";
type InvesButton = {
  text: string,
  svg: any,
  money: number
}
export const OptionsButtonsInves: React.FC<InvesButton> = ( {money, svg, text} ) =>{
    return(
      <TouchableOpacity style = {styles.myCard}>
      <SvgXml xml={svg}/>
      <Text style={ styles.textOptions }>
          {text}
      </Text>
      <Text style={ [styles.textOptions, {position: "absolute", right: 10} ]}>
          R$ {money}
      </Text>
  </TouchableOpacity>
    )

}
const styles = StyleSheet.create({
  textOptions: {
    fontSize: RF(15)
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