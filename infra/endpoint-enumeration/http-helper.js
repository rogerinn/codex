import fetch  from 'node-fetch'

export const http = { 

 POST: async (url, payload, settings = 'application/json') => {
    return fetch(url, { json: { payload }, responseType: settings }) 
      .then(result => { if(result.status != 404) return result.status })
      .catch(() => { return })
 },
 GET: async url => {
    return fetch(url)
      .then(result => { if(result.status != 404) return result.status })
      .catch(() => { return })
 },
 DELETE: async (url, payload, settings = 'application/json') => {
    return fetch(url, { method: 'delete', body: JSON.stringify(payload), headers: {'Content-Type': settings } })
      .then(result => { if(result.status != 404) return result.status })
      .catch(() => { return })
 },
 PATCH: async (url, payload, settings = 'application/json') => {
    return fetch(url, { method: 'patch', body: JSON.stringify(payload), headers: {'Content-Type': settings } })
      .then(result => { if(result.status != 404) return result.status })
      .catch(() => { return })
 },
 PUT: async (url, payload, settings = 'application/json') => {
    return fetch(url, { method: 'put', body: JSON.stringify(payload), headers: {'Content-Type': settings } })
      .then(result => { if(result.status != 404) return result.status })
      .catch(() => { return })
 }
}
