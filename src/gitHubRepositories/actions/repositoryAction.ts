import { Dispatch } from "@reduxjs/toolkit";
import { errorGetRepositoryMessage, loadingGetRepositoryCondition, successGetRepositoryMessage } from "../slices/repositorySlice";
import { ERROR_GET_REPOSITORY, LOADING_GET_REPOSITORY, SUCCESS_GET_REPOSITORY } from "../interfaces/repository";
import BaseService from "../../service/api";
import seeder from "../seeder/seederRepo.json";

export const repositoryAction = (data: any) => async (dispatch: Dispatch) => {
  dispatch(loadingGetRepositoryCondition({ type: LOADING_GET_REPOSITORY, loadingGetRepository: true }));
  const service = new BaseService("");
  try {
    const res = await service.getRepository(data);
    dispatch(successGetRepositoryMessage({ type: SUCCESS_GET_REPOSITORY, payload: res, messageSuccessGetRepository: "Success Get Data Users" }));
  } catch {
    dispatch(errorGetRepositoryMessage({ type: ERROR_GET_REPOSITORY, messageErrorGetRepository: "Error Get Data Users" }));
     dispatch(successGetRepositoryMessage({ type: SUCCESS_GET_REPOSITORY, payload: seeder, messageSuccessGetRepository: "with seeder" }));
  } finally {
    dispatch(loadingGetRepositoryCondition({ type: LOADING_GET_REPOSITORY, loadingGetRepository: false }));
  }
};
