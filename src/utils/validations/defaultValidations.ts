import * as yup from 'yup'
import { regex } from '../../constants'

const validationTextField = (label: string, minimal = 2, maximal = 100) =>
  yup
    .string()
    .required(`Please input the correct ${label}`)
    .min(minimal, `${label} Minimum ${minimal} Characters!`)
    .max(maximal, `${label} Maximum ${maximal} Characters!`)

const validationStringSelect = (label: string) => yup.string().nullable().required(`${label} must be selected!`)

const validationNumberSelect = (label: string) =>
  yup
    .number()
    .test('len', `${label} cannot below 0`, (val) => val !== undefined && val >= 0)
    .typeError(`${label} must be filled!`)
    .required(`${label} must be filled!`)

const validationPercentNumber = (label: string) =>
  yup
    .number()
    .test('len', `${label} must be in percent`, (val) => val !== undefined && val >= 0 && val <= 100)
    .typeError(`${label} must be in percent`)
    .required(`${label} must be filled!`)

const validationBooleanSelect = (label: string) => yup.boolean().nullable().required(`${label} must be filled!`)

const validationTextFieldNoMin = (label: string) => yup.string().required(`${label} must be filled!`)

const validationNumberField = (label: string, min = 0) =>
  yup
    .number()
    .typeError(`${label} must be filled!`)
    .required(`${label} must be filled!`)
    .min(min, `${label} cant be less than ${min}`)

const validationNumberFieldWithMax = (label: string, min = 0, max = 1000) =>
  yup
    .number()
    .typeError(`${label} must be filled!`)
    .required(`${label} must be filled!`)
    .min(min, `${label} cant be less than ${min}`)
    .max(max, `${label} cant be more than ${max}`)

const validationDateField = (label: string) =>
  yup
    .date()
    .typeError(`${label} must be filled!`)
    .required(`${label} must be filled!`)
    .max(new Date(new Date().setDate(new Date().getDate() + 1)), `${label} Cannot be in the future!`)

const validationObjectSelect = (label: string) =>
  yup
    .object()
    .typeError(`${label} must be filled`)
    .shape({
      value: yup.string().required(`${label} must be selected!`),
    })

const validationEmailField = (label: string, min = 5, max = 100, msg?: string) =>
  yup
    .string()
    .required(`Please input a valid ${label}`)
    .min(min, `${label} Minimum ${min} Characters!`)
    .max(max, `${label} Maximum ${max} Characters!`)
    .matches(regex.regexEmail, msg || `${label} format is incorrect!`)

const validationTextFieldExactLength = (label: string, length: number) =>
  yup
    .string()
    .required(`${label} must be filled!`)
    .length(length, `${label} must be ${length} characters!`)
    .matches(regex.regexNoSpecialCharacter, 'No Special Character are Allowed')

const validationTextArea = (label: string, maximal = 100) =>
  yup.string().max(maximal, `${label} maximum ${maximal} characters!`)

const validationMix = (label: string) => yup.mixed()

export {
  validationTextField,
  validationNumberSelect,
  validationPercentNumber,
  validationStringSelect,
  validationBooleanSelect,
  validationTextFieldNoMin,
  validationNumberField,
  validationDateField,
  validationObjectSelect,
  validationTextArea,
  validationEmailField,
  validationTextFieldExactLength,
  validationNumberFieldWithMax,
  validationMix,
}
