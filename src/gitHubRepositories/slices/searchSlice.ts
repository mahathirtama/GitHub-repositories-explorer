import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IErrorSearch, ILoadingSearch, ISearch, ISuccessSearch } from '../interfaces/search'

interface ISearchInitialState {
  usersList: ISearch
  messageSuccessSearch: string
  messageErrorSearch: string
  loadingSearch: boolean
}

const searchInitialState: ISearchInitialState = {
  usersList: {} as ISearch,
  messageSuccessSearch: '',
  messageErrorSearch: '',
  loadingSearch: false,
}

const search = createSlice({
  name: 'search',
  initialState: searchInitialState,
  reducers: {
    successSearchMessage: (state, { payload }: PayloadAction<ISuccessSearch>) => ({
      ...state,
      messageSuccessSearch: payload.messageSuccessSearch,
      usersList: payload.payload
    }),
    errorSearchMessage: (state, { payload }: PayloadAction<IErrorSearch>) => ({
      ...state,
      messageErrorSearch: payload.messageErrorSearch,
    }),
    loadingSearchCondition: (state, { payload }: PayloadAction<ILoadingSearch>) => ({
      ...state,
      loadingSearch: payload.loadingSearch,
    }),
    clearStateSearch: (state) => {
      return {
        ...state,
        messageSuccessSearch: '',
        messageErrorSearch: '',
      }
    },
  },
})

export const searchReducer = search.reducer
export const {
  successSearchMessage,
  loadingSearchCondition,
  errorSearchMessage,
  clearStateSearch,
} = search.actions