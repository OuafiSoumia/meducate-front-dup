// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'
import example from './apps/example'

// ** Reducers

export const store = configureStore({
  reducer: {
    example
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
