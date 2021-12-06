import fetch  from 'node-fetch'

export const http = { 

 POST: async (url, payload, settings = 'application/json') => {
    fetch(url, { json: { payload }, responseType: settings }) 
    .then(result => result.status ? result.status !== 404 : result.status)
    .catch(error => { return })
 },
 GET: async url => {
    fetch(url)
    .then(result => result.status ? result.status !== 404 : result.status)
    .catch(error => { return })
 },
 DELETE: async (url, payload, settings = 'application/json') => {
    fetch(url, { method: 'delete', body: JSON.stringify(payload), headers: {'Content-Type': settings } })
    .then(result => result.status ? result.status !== 404 : result.status)
    .catch(error => { return })
 },
 PATCH: async (url, payload, settings = 'application/json') => {
    fetch(url, { method: 'patch', body: JSON.stringify(payload), headers: {'Content-Type': settings } })
    .then(result => result.status ? result.status !== 404 : result.status)
    .catch(error => { return })
 },
 PUT: async (url, payload, settings = 'application/json') => {
   fetch(url, { method: 'put', body: JSON.stringify(payload), headers: {'Content-Type': settings } })
   .then(result => result.status ? result.status !== 404 : result.status)
   .catch(error => { return })
 }
}
