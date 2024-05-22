import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
type ButtonProps = {
  typeIcon: string, 
  titulo: string
}
export const AvaliaButton :  React.FC<ButtonProps> = ({typeIcon, titulo}) => {
  return (
  <TouchableOpacity
    style = {{height: 110, width: 80, gap: 10, alignItems: "center"}}
  >
    <View
      style = {styles.ButtonStyle} 
    >
        {typeIcon == "Ionicons" ? 
            <Ionicons name="warning-outline" size={35} color="#810AD0" />
            :  typeIcon == "AntDesign" ?
            <AntDesign name="hearto" size={35} color="#810AD0" />
            :  typeIcon == "Entypo" && titulo == "Ruim"  ?
            <Entypo name="emoji-sad" size={35} color="#810AD0" />
            : 
            <Entypo name="emoji-happy" size={35} color="#810AD0" />
        }
    </View>
    <Text
      style = {{color: "#810AD0", fontWeight: "bold", fontSize: RF(15)}}
    >
      {titulo}
    </Text>
  </TouchableOpacity>
  )

}

const styles = StyleSheet.create({
  ButtonStyle: {
    width: 80, 
    height: 80,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "grey",
    borderWidth: 1,

  }

})