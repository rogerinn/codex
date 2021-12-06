import { fieldError } from "../../error/field-error/field-error.js"

export const typeValidation = validation => ({ validate: input => { if(!typeof input === validation) return fieldError(`Tipo do campo incorreto`) }})