import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IErrorGetRepository, ILoadingGetRepository, IRepository, ISuccessGetRepository } from '../interfaces/repository'

interface IRepositoryInitialState {
  repositoryList: Array<IRepository>
  messageSuccessGetRepository: string
  messageErrorGetRepository: string
  loadingGetRepository: boolean
}

const repositoryInitialState: IRepositoryInitialState = {
  repositoryList: [],
  messageSuccessGetRepository: '',
  messageErrorGetRepository: '',
  loadingGetRepository: false,
}

const repository = createSlice({
  name: 'repository',
  initialState: repositoryInitialState,
  reducers: {
    successGetRepositoryMessage: (state, { payload }: PayloadAction<ISuccessGetRepository>) => ({
      ...state,
      messageSuccessGetRepository: payload.messageSuccessGetRepository,
      repositoryList: payload.payload
    }),
    errorGetRepositoryMessage: (state, { payload }: PayloadAction<IErrorGetRepository>) => ({
      ...state,
      messageErrorGetRepository: payload.messageErrorGetRepository,
    }),
    loadingGetRepositoryCondition: (state, { payload }: PayloadAction<ILoadingGetRepository>) => ({
      ...state,
      loadingGetRepository: payload.loadingGetRepository,
    }),
    clearStateGetRepository: (state) => {
      return {
        ...state,
        messageSuccessGetRepository: '',
        messageErrorGetRepository: '',
      }
    },
  },
})

export const repositoryReducer = repository.reducer
export const {
  successGetRepositoryMessage,
  loadingGetRepositoryCondition,
  errorGetRepositoryMessage,
  clearStateGetRepository,
} = repository.actions
