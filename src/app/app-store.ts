import { createStore } from "@reduxjs/toolkit"
import { appReducer } from "./app-reducer"

export const appStore = createStore(appReducer)