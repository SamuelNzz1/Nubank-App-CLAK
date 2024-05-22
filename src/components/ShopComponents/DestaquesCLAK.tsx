import React from "react";
import { ScrollView, Text, View } from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";

import { dataOptions } from "../../data/optionsInves";

import { dataOptionsSeguros } from "../../data/optionsSeguros";
import { CardButton } from "./CardButtonCLAK";
import { anuncios } from "../../data/anuncios";
export const Destaques :  React.FC = () => {
  return (
  <>  
  <View
        style = {{width: "100%", height: "50%", gap: 30, paddingHorizontal: 20 }}
        >
        <Text
          style = {{fontSize: RF(22), fontWeight: "bold", color: "black"}}
        >
          Destaques
        </Text>
        <ScrollView
        contentContainerStyle = {{ alignItems: "center", gap: 20, paddingHorizontal: 10}}
        horizontal = {true}
        showsHorizontalScrollIndicator = {false}
        >
          {anuncios.map ((item, index) => {
              return (
                <CardButton
                  key={index}
                  imageCap={item.imageCap}
                  imageLogo={item.imageLogo}
                  titulo={item.titulo}
                  color={item.color}
                />
              )
          })}
        </ScrollView>
      </View>
  </>
)
}