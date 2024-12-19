import { Action, Thunk } from "easy-peasy";

export interface Stock{
    symbol:string;
    name: string;
    price:number;
    daily_change:number;

}
export interface StocksModel{
    stocks:Stock[]
    setStocks:Action<StocksModel,Stock[]>
    fetchStocks:Thunk<StocksModel>
}