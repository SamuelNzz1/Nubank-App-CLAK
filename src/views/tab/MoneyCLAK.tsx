import React from "react";
import { TopMoney } from "../../components/MoneyComponents/TopMoneyCLAK";
import { ScrollView, StyleSheet, View } from "react-native";
import { Acomp } from "../../components/MoneyComponents/AcompMCLAK";
import { Seguros } from "../../components/MoneyComponents/SegurosCLAK";
type MoneyProps ={
  navigation: any, 
}
export const Money : React.FC<MoneyProps> = ({navigation}) => {
  return (
  <ScrollView
    contentContainerStyle = {styles.container}
    showsVerticalScrollIndicator = {false}
  >
    <TopMoney 
      navigation={navigation}
    />
    <View style = {{height: "85%", paddingHorizontal: 20}}>
      <Acomp />
      <Seguros />

    </View>
  </ScrollView>
)

}

const styles = StyleSheet.create({
    container: {
      height: 800,
      backgroundColor: "white",
      gap: 20
    }
})