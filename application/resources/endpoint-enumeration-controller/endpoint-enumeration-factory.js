import { endpointEnumertionController } from '../../../presentation/controller/endpoint-enumeration.js'
import { adapterEntry } from '../../adapter/adapter.js'
import { mainProcessFactory } from './endpoint-enumeration-main-process.js'
import { composite } from './endpoint-enumeration-validation.js'

export const endpointEnumertionFactory = () => adapterEntry('Digite o dominio para busca', endpointEnumertionController(composite, mainProcessFactory())) 
