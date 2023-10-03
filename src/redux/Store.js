import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { accountReducer } from '../components/AccountSlice';
import { LocaleReducer } from '../components/LocaleReducer';

const rootReducer = combineReducers({
    account: accountReducer,
    locale: LocaleReducer,
})

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);