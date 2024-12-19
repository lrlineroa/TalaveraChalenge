import { action, createStore, thunk } from "easy-peasy";
import { AppModel } from "./types";
import {MODULE_NAME} from "../modules/stocks/constants";
import { StocksStore } from "../modules/stocks/store";

export const store = createStore<AppModel>({
    [MODULE_NAME]:StocksStore
  });