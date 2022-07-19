import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counterSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import { employeeApi } from '../api-client/index'




export const store = configureStore({
  reducer: {
    [employeeApi.reducerPath]: employeeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(employeeApi.middleware),
})

