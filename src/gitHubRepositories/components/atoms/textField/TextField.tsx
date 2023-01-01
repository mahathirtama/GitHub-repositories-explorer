import React, { ChangeEvent } from "react";
import { FormControl, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { ITextField } from "../interfaces/TextField";

export const TextFieldComponent = (props: ITextField) => {
  const { label, name, errors, control, placeholder, type = "text", maxLength, isRequired = false, isDisabled = false, inputProps, sx, onChangeInput } = props;
  return (
    <FormControl>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        rules={{ required: isRequired }}
        render={({ field }) => (
          <TextField
            {...field}
            sx={sx}
            name={name}
            label={label}
            type={type}
            inputProps={{ maxLength, placeholder }}
            disabled={isDisabled}
            required={isRequired}
            error={!!errors[name]}
            fullWidth
            helperText={errors[name] && errors[name].message}
            InputProps={inputProps}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              field.onChange(e.target.value);
              onChangeInput?.(e.target.value);
            }}
          />
        )}
      />
    </FormControl>
  );
};
