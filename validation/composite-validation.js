export const compositeValidation = validations  => ({
  validate: input => {
    for(const validation of validations){
      const error = validation.validate(input)
      if(error) return error
    }
    return null
  }
})