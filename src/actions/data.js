import {FETCH_DATA_ERROR, FETCH_DATA_SUCCESS, FETCH_DATA_PENDING} from "./types";

export const dataPending = (data) => ({
    type: FETCH_DATA_PENDING,
    payload: data
});

export const dataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
});

export const dataError = (error) => ({
    type: FETCH_DATA_ERROR,
    error
});
