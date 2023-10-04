
import { accountReducer } from '../components/AccountSlice';
import { localeReducer } from '../components/LocaleReducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        account: accountReducer,
        locale: localeReducer,
    }
});




// import { combineReducers, createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { accountReducer } from '../components/AccountSlice';
// import { localeReducer } from '../components/LocaleReducer';

// const rootReducer = combineReducers({
//     account: accountReducer,
//     locale: localeReducer,
// })

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);