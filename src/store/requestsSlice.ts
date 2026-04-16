import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {RequestsListType} from "../helpers/types.ts";


interface IRequestsSlice {
    requestsList: RequestsListType[];
    filteredRequestsList: RequestsListType[];
}

const savedRequestsList: RequestsListType[] = JSON.parse(
    localStorage.getItem("requestsList") || "[]"
);

const initialState: IRequestsSlice = {
    requestsList: savedRequestsList,
    filteredRequestsList: savedRequestsList
}

const requestsSlice = createSlice({
    name: 'requestsSlice',
    initialState,
    reducers: {
        setRequestsList: (state, action: PayloadAction<RequestsListType[]>) => {
            state.requestsList = action.payload;
            localStorage.setItem("requestsList", JSON.stringify(action.payload));
        },
        addRequest: (state, action: PayloadAction<RequestsListType>) => {
            state.requestsList.push(action.payload);
            state.filteredRequestsList = state.requestsList;
            localStorage.setItem("requestsList", JSON.stringify(state.requestsList));
        },
        setRequest: (state, action: PayloadAction<RequestsListType>) => {
            state.requestsList = state.requestsList.map((request) =>
                request.id === action.payload.id
                    ? { ...request, status: action.payload.status }
                    : request
            );
            state.filteredRequestsList = state.filteredRequestsList.map((request) =>
                request.id === action.payload.id
                    ? { ...request, status: action.payload.status }
                    : request
            );
            localStorage.setItem("requestsList", JSON.stringify(state.requestsList));
        },
        setFilteredRequestsList: (state, action: PayloadAction<RequestsListType[]>) => {
            state.filteredRequestsList = action.payload;
        },
        resetFilteredRequestsList: (state) => {
            state.filteredRequestsList = state.requestsList;
        }
    }
});

export const {addRequest, setRequest, setFilteredRequestsList, resetFilteredRequestsList} = requestsSlice.actions;
export default requestsSlice.reducer;