import { Pressable, View } from "react-native";
import { useAppStoreActions, useAppStoreState } from "../../../store/types";
import React, { useEffect } from "react";
import { Card, Text, Box } from "../../../ui/components";
import { useNavigation } from "@react-navigation/native";
import { Stock } from "../types";

const StocksScreen = () => {
    const navigation=useNavigation();
    const [stocks] = useAppStoreState((state) => [
        state.stocks.stocks
    ])
    const [fetchStocks] = useAppStoreActions((actions) => [
        actions.stocks.fetchStocks
    ])
    useEffect(() => {
        fetchStocks()
    }, []);
    const goToDetails=(stock:Stock)=>{
        navigation.navigate("StockDetails",{stock});
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Card>
                <Text variant="header">Stocks Info</Text>

                <Box flexDirection="row" justifyContent="space-between" marginBottom="s" marginTop="s">
                    <Text variant="bold">
                        Symbol
                    </Text>
                    <Text variant="bold">
                        price
                    </Text>
                    <Text variant="bold">
                        Change
                    </Text>
                </Box>
                {
                    stocks && stocks.map((stock, index) => (
                        <React.Fragment key={`stock_${index}`}>
                            <Pressable onPress={()=>goToDetails(stock)}>
                                <Box flexDirection="row" justifyContent="space-between" paddingVertical="m">
                                    <Text>
                                        {stock.symbol}
                                    </Text>
                                    <Text>
                                        {stock.price}
                                    </Text>
                                    <Text>
                                        {stock.daily_change}
                                    </Text>
                                </Box>
                            </Pressable>
                        </React.Fragment>
                    ))
                }
            </Card>
        </View>
    )
};

export default StocksScreen;