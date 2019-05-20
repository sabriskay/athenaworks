import createSagaMiddleware from "redux-saga";
import SFetchUsers from './SFetchUsers';

export const sagasMiddlewareInstance = createSagaMiddleware();

export const run = function () {
	sagasMiddlewareInstance.run(SFetchUsers);
}