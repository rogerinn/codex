export const mainProcess = (wordlist, http) => { 
  let result = []
  let percent = 0
  const main = async input => {
    console.info('Buscando....')
    for(const word of wordlist){
      console.log(`Total concluído: ${(percent = percent += 100/wordlist.length).toFixed(3)}%...`)
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

