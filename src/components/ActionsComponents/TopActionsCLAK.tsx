import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import { visualize, add, profile, about } from "../../svgs/optionsTopIcons/topOptionsIcons";
import { userProfile } from "../../data/userProfile";
import { RFValue as RF } from "react-native-responsive-fontsize";
type TopProps ={
    navigation : any
}
export const TopActions : React.FC<TopProps> = ({navigation}) => {
  return (
  <View
    style = {styles.topView}
  >
    <View
      style = {styles.toptop}
    > 
      <TouchableOpacity>
        <SvgXml xml={profile} />
      </TouchableOpacity>
      <View
        style = {{flexDirection : "row", gap:30, position: "absolute", right: 10}}
      > 
          <TouchableOpacity>
        <SvgXml xml={visualize} />
      </TouchableOpacity>
      <TouchableOpacity>
        <SvgXml xml={about} />
      </TouchableOpacity>
      <TouchableOpacity>
        <SvgXml xml={add} />
      </TouchableOpacity>

      </View>
    </View>
    <View
      style = {styles.topbottom}
    >
      <Text 
        style = {{color: "white", fontSize : RF(18), fontWeight: "bold"}}
      >
        Olá, {userProfile.name} 
      </Text>
    </View>
  
  </View>
  )
}

const styles = StyleSheet.create({
  topView: {
      width: "100%",
      height: "25%",
      backgroundColor: "#810AD0",

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