import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { dataOptions } from "../../../data/dataOptions";
import { Options } from "./OptionsCarrouselClAK";
type propsCarrousel = {
    navigation: any

}
export const CarrouselOptions: React.FC<propsCarrousel> = ({navigation}) =>{

    return(
        <View
            style = {{
            height: 115,
            }}
        >
        <ScrollView
        contentContainerStyle = {styles.carrousel}
        horizontal = {true}
        showsHorizontalScrollIndicator = {false}
     >
            {dataOptions.map((option, index) => {
                return (
                    <>
                        <Options 
                            key = {index}
                            titulo={option.function}
                            svg={option.svg}
                            navigation = {navigation}
                        />
                    </>
                )

            })}
    
    </ScrollView>
    </View>
    
    )
}

const styles = StyleSheet.create({
  carrousel:{
    height: 115,

    gap: 20,
    
    
    
    
   
    
},
})