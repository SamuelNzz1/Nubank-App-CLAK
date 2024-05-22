import React from "react";
import { ScrollView, Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { RFValue as RF } from "react-native-responsive-fontsize";

export const Tudo :  React.FC = () => {
  return (
  <>  
  <View
        style = {{width: "100%", height: "50%", gap: 30, paddingHorizontal: 20 }}
        >
        <Text
          style = {{fontSize: RF(22), fontWeight: "bold", color: "black"}}
        >
          Tem de tudo
        </Text>
        <View
        style = {{ alignItems: "center", gap: 20, paddingHorizontal: 10}}    
        >
            <TouchableOpacity style = {styles.myCard}>
                <View
                  style = {{width: "30%", height: "100%", paddingHorizontal: 10, justifyContent: "center"}}
                >
                  <Image source={require("../../../assets/channels4_profile.png")}
                    style = {{width: 50, height: 50, borderRadius: 5 }} resizeMode="cover"

                  />
                </View>
                <View style = {{width: "70%", height: "100%", paddingHorizontal: 10, justifyContent: "center"
                }}>
                
                  <Text style={ styles.textOptions }>
                      Shopee
                  </Text>
                  <Text style={ styles.textOptions2}>
                      Cupom para compras acima de R$40.
                  </Text>
                </View>
            </TouchableOpacity>
        </View>
      </View>
  </>
)
}
const styles = StyleSheet.create({
  textOptions: {
    fontSize: RF(18),
    color: "black",
    fontWeight: "bold"
},
textOptions2: {
  fontSize: RF(15),
  color: "grey",
  width: "100%"
},
myCard: {
    width: "100%",
    height: 100,
    paddingHorizontal: 5,
    borderRadius: 20,
    flexDirection: "row",
    alignItems:"center",
       
    

}
})