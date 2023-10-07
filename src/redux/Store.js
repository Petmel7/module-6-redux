
import { accountReducer } from '../components/AccountSlice';
import { localeReducer } from '../components/LocaleReducer';
import { configureStore } from '@reduxjs/toolkit';

const myMd1 = store => next => action => {
    console.log('myMd1', action)
    next(action)
};

const myMd2 = store => next => action => {
    console.log('myMd2', action)
    next(action)
};

// function myMd1(store) {
//     return function(next) {
//         return function (action) {
//             console.log('myMd1', action)
//             next(action)
//         }
//     }
// }

// function myMd2(store) {
//     return function(next) {
//         return function (action) {
//             console.log('myMd2', action)
//             next(action)
//         }
//     }
// }

export const store = configureStore({
    reducer: {
        account: accountReducer,
        locale: localeReducer,
    },
    middleware: getDefaultMiddleware => {
        const defaultMd = getDefaultMiddleware();
        return [...defaultMd, myMd1, myMd2]
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