import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";

type SugestionsProps = {

}
export const Sugestions : React.FC<SugestionsProps> = () => {
    return (
    <TouchableOpacity
      style = {styles.sugestionsBox}
    >
      <Text
        style = {{color: "black", fontSize : RF(15),  fontWeight: "bold", width: "100%"}}
      >Você tem até R$ 12.500,00 disponiveis para emprestimo
      </Text>
      
    </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    sugestionsBox: { 
        height: "100%",
        width:  280,
        backgroundColor: "#F0F1F5",
        borderRadius: 10,
        justifyContent: "center",
        gap: 10,
        paddingHorizontal: 20

    }
})