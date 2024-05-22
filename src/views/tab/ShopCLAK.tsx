import React from "react";
import { View } from "react-native";
import { TopMoney } from "../../components/MoneyComponents/TopMoneyCLAK";

type ShopProps = {
    navigation: any   
}
export const Shop : React.FC <ShopProps> = ({navigation}) => {

    return (
    <View
        style = {{flex: 1, backgroundColor: "white", }}
    >
        <TopMoney
            navigation={navigation}
        />
    </View>
    )
}