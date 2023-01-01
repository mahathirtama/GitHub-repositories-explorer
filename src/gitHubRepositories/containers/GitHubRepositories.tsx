import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { ButtonComponent, TextFieldComponent } from "../components/atoms";
import { BoxComponent, CardComponent } from "../components/molecules";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { ISearch, ISearchUsers } from "../interfaces/search";
import searchValidation from "../../utils/validations/searchValidation";
import { useAppDispatch, useAppSelector } from "../../store";
import { searchAction } from "../actions/searchAction";
import { repositoryAction } from "../actions/repositoryAction";
import { IRepository } from "../interfaces/repository";

export const GitHubRepositories = () => {
  const dispatch = useAppDispatch();
  const [usersGitList, setUserGitList] = useState<ISearch[]>([]);
  const [arrowUp, setArrowUp] = useState(false)
  const [textSpan, setTextSpan] = useState('')
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ISearchUsers>({
    resolver: yupResolver(searchValidation),
  });
  const onSubmit: SubmitHandler<ISearchUsers> = async (data) => {
    dispatch(searchAction(data));
    setTextSpan(data.search)
  };

  const { usersList } = useAppSelector((state) => state.search);
  const { repositoryList } = useAppSelector((state) => state.repository);
  useEffect(() => {
    const newArryUser = [];
    newArryUser.push(usersList);
    setUserGitList(newArryUser);
  }, [usersList]);
  
  const hitRepository = (userName?: string) => {
    dispatch(repositoryAction(userName));
    setArrowUp(true)
  };
  const closeRepositories = () => {
    setArrowUp(false)
  }
  return (
    <>
      <Stack sx={{ m: "1em" }} direction="column" spacing={2}>
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
          <Stack direction="column" spacing={2}>
            <TextFieldComponent label="Enter username" name="search" placeholder="Enter username" control={control} errors={errors} sx={{ height: "60px", width: "100%" }} />
            <ButtonComponent />
            { textSpan !== '' &&<Typography variant="caption">Showing users for '{textSpan}'</Typography>}
          </Stack>
        </form>
        {usersGitList.map((user: ISearch, index) => (
          <Box key={index}>
            {user.id && (
              <>
                <BoxComponent user={user.login} getRepository={hitRepository} arrow={arrowUp} onClick={closeRepositories} />
                <Stack direction="column" spacing={2} sx={{ ml: '1em', mt: '1em' }}>
                  {repositoryList.length > 0 && arrowUp ? repositoryList.map((repo: IRepository, index) => (
                    <Box key={index}>
                      {repo.owner.id === user.id ? <CardComponent title={repo.name} star={repo.stargazers_count} description={repo.description} /> : <></>}
                    </Box>
                  )): null}
                </Stack>
              </>
            )}
          </Box>
        ))}
      </Stack>
    </>
  );
};
