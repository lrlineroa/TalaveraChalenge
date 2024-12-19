import { Action, createTypedHooks, Thunk } from "easy-peasy";
import { StocksModel } from "../modules/stocks/types";

export interface AppModel{
    "stocks": StocksModel
}

const typedHooks = createTypedHooks<AppModel>();

export const useAppStoreActions = typedHooks.useStoreActions;
export const useAppStoreDispatch = typedHooks.useStoreDispatch;
export const useAppStoreState = typedHooks.useStoreState;