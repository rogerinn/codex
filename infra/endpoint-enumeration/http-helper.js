import fetch  from 'node-fetch'

export const http = { 

 POST: async (url, payload, settings = 'application/json') => {
    const { status } = await fetch(url, { json: { payload }, responseType: settings })
    if(status === 404) return
    return status
 },
 GET: async url => {
    const { status } = await fetch(url)
    if(status === 404) return
    return status
 },
 DELETE: async (url, payload, settings = 'application/json') => {
    const { status } = await fetch(url, { method: 'delete', body: JSON.stringify(payload), headers: {'Content-Type': settings } })
    if(status === 404) return
    return status
 },
 PATCH: async (url, payload, settings = 'application/json') => {
    const { status } = await fetch(url, { method: 'patch', body: JSON.stringify(payload), headers: {'Content-Type': settings } })
    if(status === 404) return
    return status
 },
 PUT: async (url, payload, settings = 'application/json') => {
    const { status } = await fetch(url, { method: 'put', body: JSON.stringify(payload), headers: {'Content-Type': settings } })
    if(status === 404) return
    return status
 }
}
