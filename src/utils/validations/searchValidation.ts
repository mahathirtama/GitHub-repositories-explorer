import * as yup from 'yup'
import { validationTextField } from './defaultValidations'

export default yup.object().shape({
  search: validationTextField('search'),
})
