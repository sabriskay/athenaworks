/* */
import { takeLatest, put } from "redux-saga/effects";
import { LIST } from '../Actions/AListUsers';
import AError from '../Actions/AError';
import axios from 'axios';
import ASetUsersData from '../Actions/ASetUsersData';

function* SFetchUsers (AListUsers) {

    yield put(AError(null));

    try {
        const users = yield axios.get(
            `https://randomuser.me/api/?results=500`
        );
        yield put(ASetUsersData(users.data.results));

    } catch (error) {
        console.log(error);
    }
}

export default function* () {
    yield takeLatest(LIST, SFetchUsers);
}