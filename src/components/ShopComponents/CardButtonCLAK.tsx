import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { imageMapping } from "../../data/anuncios";
import { RFValue as RF } from "react-native-responsive-fontsize";
type CardProps = {
  titulo: string,
  imageCap: any,
  imageLogo: any,
  color: string
  
}
export const CardButton : React.FC <CardProps> = ({titulo, imageCap, imageLogo, color}) => {
  const imageBackground = imageMapping[imageCap];
  const imageLogoBack = imageMapping[imageLogo]; 
  return (
    <TouchableOpacity
      style = {styles.cardAnuncio}
    >
      <View
        style = {{height: "60%", width: "100%", borderTopLeftRadius: 15, borderTopRightRadius: 15}}
      >
            <Image
              source={imageBackground}
              style = {{width: "100%", height: "100%", borderTopLeftRadius: 15, borderTopRightRadius: 15}}
              resizeMode="cover"
            />

            <Image
              source={imageLogoBack}
              style = {{
                width: 50, height: 50, borderRadius: 5, position: "absolute", bottom: -20, left: 10, zIndex:3
                ,
                shadowColor: '#000', // Cor da sombra
                shadowOffset: {
                    width: 0, // Ajuste a largura do deslocamento conforme necessário
                    height: 2, // Ajuste a altura do deslocamento conforme necessário
                },
                shadowOpacity: 0.25, // Opacidade da sombra
                shadowRadius: 3, // Raio da sombra
              
              }}
              resizeMode="cover"

            />

            <View
              style = {{width: 110, height: 40, backgroundColor: "white", position: "absolute", bottom: -20, right: 10, zIndex: 3, alignItems: "center", justifyContent: "center", borderRadius: 100}}
            >
                <Text
                  style = {{color: "#810AD0", fontWeight: "bold", fontSize: RF(15)}}
                >
                    15% OFF
                </Text>
            </View>

      </View>
      <View
        style = {{height: "40%", width: "100%", borderBottomLeftRadius: 15, paddingTop: 30, borderBottomRightRadius: 15, backgroundColor: color, zIndex: -2, paddingHorizontal: 20}}
      >
        <Text style = {{color: "grey", fontSize: RF(15), fontWeight: "bold"}}>
              NOVIDADE NO NUBANK
        </Text>
        <Text style = {{color: "white", fontSize: RF(18), fontWeight: "bold"}}>
              {titulo}
        </Text>

      </View>
  
    </TouchableOpacity>
)
}

const styles  = StyleSheet.create({
  cardAnuncio: {
    width: 270,
    height: "80%",
    borderRadius: 15

    
    
  }


})