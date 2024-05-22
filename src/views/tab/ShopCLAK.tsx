import React from "react";
import { ScrollView, View } from "react-native";
import { TopMoney } from "../../components/MoneyComponents/TopMoneyCLAK";
import { Destaques } from "../../components/ShopComponents/DestaquesCLAK";
import { Tudo } from "../../components/ShopComponents/TudoCLAK";
import { TopShop } from "../../components/ShopComponents/TopShopCLAK";
type ShopProps = {
    navigation: any   
}
export const Shop : React.FC <ShopProps> = ({navigation}) => {

    return (
    <ScrollView
        contentContainerStyle = {{height: 900, backgroundColor: "white", gap: 20 }}
        showsVerticalScrollIndicator = {false}
    >
        <TopShop
            navigation={navigation}
        />
        <Destaques />
        <Tudo />
    </ScrollView>
    )
}