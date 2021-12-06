import { fieldError } from '../../error/field-error/field-error.js'

export const urlValidation = () => ({
  validate: input => {
     if(!/https?:\/\//.test(input) && !/http?:\/\//.test(input)) return fieldError('URL invalida')
  }
})