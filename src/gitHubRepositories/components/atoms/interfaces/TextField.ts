import { SxProps } from '@mui/material'

export type ITextField = {
  label: string
  name: string
  errors: any
  control: any
  placeholder: string
  type?: string
  maxLength?: number
  isRequired?: boolean
  isDisabled?: boolean
  inputProps?: object
  sx?: SxProps
  onChangeInput?: Function
}