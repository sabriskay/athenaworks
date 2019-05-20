import { applyMiddleware, createStore } from "redux";
import CombinedReducers from "./Reducers";
import { sagasMiddlewareInstance, run } from './Sagas'

const store = createStore(
    CombinedReducers,
    applyMiddleware(
        sagasMiddlewareInstance
    ),
);

run();

export default store;