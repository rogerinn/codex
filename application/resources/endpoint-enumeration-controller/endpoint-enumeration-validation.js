import { compositeValidation } from '../../../validation/composite-validation.js'
import { typeValidation } from '../../../validation/field-validation/type-validation.js'
import { urlValidation } from '../../../validation/field-validation/url-validation.js'
import { fileExistValidation } from '../../../validation/file-validation/file-exist-validation.js'

const validations = []
validations.push(typeValidation('string'))
validations.push(urlValidation())
validations.push(fileExistValidation('./application/config/performace.json'))

export const composite = compositeValidation(validations)