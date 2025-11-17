import {applyMiddleware, createStore} from "redux";
import {accountReducer} from "../reducer/accountReducer.js";
import {loggerEnhancer} from "../enhancers/loggerEnhancer.js";

const initialState = {
    balance: 0,
    quote: 'Winter is coming...'
}

export const store = createStore(accountReducer, initialState, applyMiddleware(loggerEnhancer));