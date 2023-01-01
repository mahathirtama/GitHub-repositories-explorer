import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { searchReducer } from '../gitHubRepositories'
import { repositoryReducer } from '../gitHubRepositories/slices/repositorySlice'

export const reducer = combineReducers({
  search: searchReducer,
  repository: repositoryReducer
})

export type RootState = ReturnType<typeof reducer>

export const createStore = () =>
  configureStore({
    reducer,
  })

export const store = createStore()

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
