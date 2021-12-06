export const mainProcess = (wordlist, http) => { 
  let result = []
  const main = async input => {
    console.info('Buscando....')
    for(const word of wordlist){
      for(const method of [http.GET]){
        if(word) console.info(`Buscando com: ${word}`)
        const isValid = await method(`${input}/${word}`)
        if(isValid) result.push({ url: `${input}/${word}`, statusCode: isValid, method })
      }
    }
    if(result.length === 0) return 'Não encontrado.'
    return result
  } 
  return { main }
}

