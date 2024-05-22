import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { SvgXml } from "react-native-svg";
type PropsOptions = {
    titulo: string,
    svg: any,
    navigation: any  
}
export const Options: React.FC<PropsOptions> = ({titulo, svg, navigation}) => {
    return (
    
    <TouchableOpacity style = {styles.caixaOption}>
        <View style = {styles.optionsPrincip}>
            <SvgXml xml={svg}/>
        </View>
        <Text style={styles.textOptions}>
            {titulo}
        </Text>
    </TouchableOpacity>
    
    )

}
const styles = StyleSheet.create({
  caixaOption: {
    alignItems:"center",
    justifyContent:"center",
    gap: 15,
    height: "100%",
    width: 80
 },
 optionsPrincip:{
     alignItems:"center",
     justifyContent:"center",
     backgroundColor: "#F0F1F5",
     borderRadius: 120,
     height: "70%",
     width: "100%"
 },
 textOptions: {
     fontSize: 14
 },

})