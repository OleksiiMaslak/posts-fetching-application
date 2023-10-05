import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./Authentification/Authentification.slice";



export const store = configureStore({
    reducer
})