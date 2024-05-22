import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { TopActions } from "../../components/ActionsComponents/TopActionsCLAK";
import {MiddleActions} from "../../components/ActionsComponents/MiddleComponents/MiddleCLAK";
import { userProfile } from "../../data/userProfile";
type ActionsProps = {
  navigation : any
}
export const Actions : React.FC<ActionsProps> = ({navigation}) => {
  return (
    <ScrollView
        contentContainerStyle = {styles.container}
        showsVerticalScrollIndicator = {false} 

    >   
      <TopActions 
        navigation={navigation}    
      />
      <MiddleActions 
        money = {userProfile.money}
        navigation = {navigation}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
    container: {
      height: 900,
      backgroundColor: "white",
      paddingBottom: 90
    }
})