import { Dispatch } from "@reduxjs/toolkit";
import { errorSearchMessage, loadingSearchCondition, successSearchMessage } from "../slices/searchSlice";
import { ERROR_SEARCH, LOADING_SEARCH, SUCCESS_SEARCH } from "../interfaces/search";
import BaseService from "../../service/api";
import seeder from "../seeder/seederUser.json"

export const searchAction = (data: any) => async (dispatch: Dispatch) => {
  dispatch(loadingSearchCondition({ type: LOADING_SEARCH, loadingSearch: true }));
  const service = new BaseService("");
  const search = data.search
  try {
    const res = await service.get(search);
    dispatch(successSearchMessage({ type: SUCCESS_SEARCH, payload: res, messageSuccessSearch: "Success Get Data Users" }));
  } catch {
    dispatch(errorSearchMessage({ type: ERROR_SEARCH, messageErrorSearch: "Error Get Data Users" }));
    dispatch(successSearchMessage({ type: SUCCESS_SEARCH, payload: seeder, messageSuccessSearch: "with seeder" }));
  } finally {
    dispatch(loadingSearchCondition({ type: LOADING_SEARCH, loadingSearch: false }));
  }
};
