import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";
import { AvaliaButton } from "./AvaliaButtonCLAK";
import { avalia } from "../../data/avaliation";
type MiddleProps = {
  searchText: string 
}
export const MiddleHelp : React.FC<MiddleProps> = ({searchText}) => {
  return (
  <View
    style = {styles.MiddleStyle}
  >
    <Text
        style = { {
          color: "black",
          fontWeight:"bold",
          fontSize: RF(18),
        } } 
    >
        Como você avalia o Me Ajuda? 
    </Text>
    
    <View
      style = {styles.horizontalView}
    >
        {
          avalia.map((item, index) => {
            return (
                <AvaliaButton
                  key ={index}
                  typeIcon = {item.typeIcon}
                  titulo = {item.titulo}
                />
            )
          })

        }
      
    </View>

  </View>
)

}

const styles = StyleSheet.create({
  MiddleStyle : {
    height: "70%",
    width: "100%",
    padding: 20,
    gap: 20
  },
  horizontalView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 120,
    gap: 10
    


  }

})