import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {RoleSwitcherType} from "../helpers/types.ts";

interface IUserSlice {
    roleSwitcher: RoleSwitcherType;
}

const savedRoleSwitcher = (localStorage.getItem("roleSwitcher") as RoleSwitcherType) || "user";

const initialState: IUserSlice = {
    roleSwitcher: savedRoleSwitcher
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers:{
        setRoleSwitcher: (state, action: PayloadAction<RoleSwitcherType>) => {
            state.roleSwitcher = action.payload;
            localStorage.setItem("roleSwitcher", action.payload);
        }
    }
});

export const {setRoleSwitcher} = userSlice.actions;
export default userSlice.reducer;