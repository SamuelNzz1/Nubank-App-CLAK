import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { SvgXml } from "react-native-svg";
import { arrowGo } from "../../svgs/GenericsIcons/arrows";
type ButtonProps ={
    titulo: string,
    subtitulo: string,
}
export const ButtonHelps : React.FC<ButtonProps> =({titulo, subtitulo}) =>{
        return (
       <TouchableOpacity
            style = {{width: "100%", height: "30%", backgroundColor: " white", borderBottomWidth: 1, borderColor: "grey",  }}
       >    
        <Text
            style = {{color: " black", fontWeight: "bold", fontSize: RF(18)}}
        >
                {titulo}
        </Text>
        <Text
            style = {{color: "grey", fontSize: RF(14)}}
        >
                {subtitulo}
        </Text>
        <SvgXml
            xml = {arrowGo}
            style = {{position: "absolute", right: 10, top: 30}}
        /> 

       </TouchableOpacity>
    )
}