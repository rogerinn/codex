import { completedStatus, errorStatus } from '../helpers/response.js';

export const endpointEnumertionController = (validation, mainProcess) => ({ 
  handle: async request => {
    try {
      const error = validation.validate(request)
      if(error) return error
      return completedStatus(await mainProcess.main(request))
    } catch(error) {
      return errorStatus(error)
    }
  }
})
