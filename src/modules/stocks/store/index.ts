import { action, thunk } from "easy-peasy";
import { Stock, StocksModel } from "../types";
import StocksData from "../../../data/stocks.json";
export const StocksStore:StocksModel={
    stocks: [],
    setStocks:action((state,payload)=>{
        state.stocks=payload;
    }),
    fetchStocks:thunk(async (actions)=>{
        try {
            //Here goes the logic for a real stock fetching
            actions.setStocks(StocksData.stocks)
        } catch (error) {
            console.error("error at fetching stocks")
        }
    })
}