import { configureStore } from '@reduxjs/toolkit'
import { infoApi } from './appService'
import modalReducer from './modalSlice'

export const store = configureStore({
    reducer: {
        modals: modalReducer,
      [infoApi.reducerPath]: infoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(infoApi.middleware),
  })