import React from "react";
import { Text, View } from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { OptionsButtonsInves } from "./OptionButtonInvesCLAK";
import { dataOptions } from "../../data/optionsInves";
import { OptionsButtonsSeguros } from "./OptionsButtonSegurosCLAK";
import { dataOptionsSeguros } from "../../data/optionsSeguros";
export const Seguros : React.FC = () => { 
  return (
      <View
        style = {{width: "100%", height: "30%", gap: 30}}
        >
        <Text
          style = {{fontSize: RF(22), fontWeight: "bold", color: "black"}}
        >
          Acompanhe seu dinheiro
        </Text>
        <View
        style = {{flex: 1,  alignItems: "center", gap: 20}}
        >
            {dataOptionsSeguros.map ((item, index) => {
              return (
                <OptionsButtonsSeguros
                  key = {index}                
                  svg = {item.svg}
                  text = {item.function}  
                />
              )
            } )}
        </View>
      </View>
  )

}