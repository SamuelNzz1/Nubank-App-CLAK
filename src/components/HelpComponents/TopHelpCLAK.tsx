import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { RFValue as RF } from "react-native-responsive-fontsize";

type TopProps = {
  navigation: any,
  handleSearchChange: (text: string) => void,
  searchText: string,
}

export const TopHelp : React.FC<TopProps> = ({navigation, handleSearchChange, searchText}) => {
  return (
  <View
    style = {styles.topStyles}
  >

    <TouchableOpacity
       style = {{position: "absolute", left: 30, top: 30}}
       onPress = {() => navigation.goBack()}
    >
      <AntDesign name="close" size={30} color="#810AD0" 
       
      />
      

    </TouchableOpacity>

    <Text
        style = {{color: "grey", fontWeight : "bold", fontSize: RF(18), position: "absolute", alignSelf: "center", top: 35}}
      >
          ME AJUDA
      </Text>

      <View
        style = {styles.boxInput}
      >
        <TextInput
          style = {{width: "100%", height: "100%", borderRadius: 10, padding: 20, color: "#810AD0"}}
          placeholder="Qual é sua dúvida?"
          placeholderTextColor={"grey"}
          value={searchText}
          onChangeText={handleSearchChange}
        >

        </TextInput>
        <TouchableOpacity
          style = {{position: "absolute", right: 10, alignSelf: "center", padding: 10}}
        >
          <AntDesign name="search1" size={24} color="#810AD0" 

          />
        </TouchableOpacity>

      </View>

  </View>

)

}

const styles = StyleSheet.create({
  topStyles : {
    width: "100%",
    height: "30%",
    justifyContent: "flex-end",
    alignItems: "center"
    

  },
  boxInput: {
    width: "90%",
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "grey",
    flexDirection: "row",
  }

})