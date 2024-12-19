import { Text, View } from "react-native";
import { useAppStoreActions, useAppStoreState } from "../../../store/types";
import { useEffect } from "react";

const StocksScreen = () => {
    const [stocks]=useAppStoreState((state)=>[
        state.stocks.stocks
    ])
    const [fetchStocks]=useAppStoreActions((actions)=>[
        actions.stocks.fetchStocks
    ])
    useEffect(()=>{
        fetchStocks()
    },[]);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Stocks Screen</Text>
            {
                stocks && stocks.map((stock,index)=>(
                    <Text key={`stock_${index}`} >
                        {stock.name}
                    </Text>
                ))
            }
        </View>
    )
};

export default StocksScreen;