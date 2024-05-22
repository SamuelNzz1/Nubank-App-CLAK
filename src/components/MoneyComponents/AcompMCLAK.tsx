import React from "react";
import { Text, View } from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { OptionsButtonsInves } from "./OptionButtonInvesCLAK";
import { dataOptions } from "../../data/optionsInves";
export const Acomp : React.FC = () => { 
  return (
      <View
        style = {{width: "100%", height: "45%", gap: 30}}
        >
        <Text
          style = {{fontSize: RF(22), fontWeight: "bold", color: "black"}}
        >
          Acompanhe seu dinheiro
        </Text>
        <View
        style = {{flex: 1,  alignItems: "center", gap: 20}}
        >
            {dataOptions.map ((item, index) => {
              return (
                <OptionsButtonsInves
                  key = {index}
                  money = {item.money}
                  svg = {item.svg}
                  text = {item.function}  
                />
              )
            } )}
        </View>
      </View>
  )

}