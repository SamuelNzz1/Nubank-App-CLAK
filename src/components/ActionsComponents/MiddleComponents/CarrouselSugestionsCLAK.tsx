import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Sugestions } from "./SugestionCLAK";
type SugestionsProps = {


}
export const CarrouselSugestions : React.FC<SugestionsProps> = () => {
  return (
    <View
            style = {{
            height: 90,
           
            }}
        >
        <ScrollView
        contentContainerStyle = {styles.carrousel}
        horizontal = {true}
        showsHorizontalScrollIndicator = {false}
     >
    <Sugestions />
    <Sugestions />
    

    </ScrollView>
   </View>
 
)

  }

  const styles = StyleSheet.create({
      carrousel: {
          height: 90,
          gap: 20,
      }
  })