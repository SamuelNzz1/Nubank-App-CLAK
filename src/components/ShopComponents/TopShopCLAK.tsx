import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { visualize, add, profile, about } from "../../svgs/optionsTopIcons/topOptionsIcons";
import { userProfile } from "../../data/userProfile";
import { RFValue as RF } from "react-native-responsive-fontsize";
type TopProps ={
    navigation : any
}
export const TopShop : React.FC<TopProps> = ({navigation}) => {
  return (
  <View
    style = {styles.topView}
  >
    
      <TouchableOpacity>
        <SvgXml xml={profile} />
      </TouchableOpacity>
      <View
        style = {{flexDirection : "row", gap:30, }}
      > 
          <TouchableOpacity>
        <SvgXml xml={visualize} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("ShopHelp")}
      >
        <SvgXml xml={about} />
      </TouchableOpacity>
      <TouchableOpacity>
        <SvgXml xml={add} />
      </TouchableOpacity>

      </View>
    
    
  </View>
  )
}

const styles = StyleSheet.create({
  topView: {
      width: "100%",
      height: "15%",
      backgroundColor: "#810AD0",
      alignItems: "flex-end",
      justifyContent: "space-between",
      paddingBottom: 20,
      paddingHorizontal: 20,
      flexDirection: "row"

  },
  toptop: {
    width: "100%",
    height: "50%",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 20
   
  },
  topbottom: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
    paddingHorizontal: 20
  
  }
})