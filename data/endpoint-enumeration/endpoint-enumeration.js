export const mainProcess = (wordlist, http) => { 
  let result = []
  const main = async input => {
    console.info('Buscando....')
    for(const word of wordlist){
      console.log(`Buscando com: ${word}`)
      for(const method of [http.GET, http.POST, http.DELETE, http.PATCH, http.PUT]){
        const isValid = await method(`${input}/${word}`)
        if(isValid) result.push({ url: `${input}/${word}`, statusCode: isValid, method })
      }
    }
    if(result.length === 0) return 'Não encontrado.'
    return result
  } 
  return { main }
}

