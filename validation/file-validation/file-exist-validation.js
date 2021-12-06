import { existsSync } from 'fs'
import { fileExistError } from '../../error/file-error/file-exist-error.js'

export const fileExistValidation = path => ({ validate: () => { if(!existsSync(path)) return fileExistError() }})