import { createClient } from 'redis'

export const redis = {
    client: null,
    connect: async (host, port) => {
      redis.client = createClient(6379, 'localhost')
      redis.client.on('connect', msg => console.log('Connected in redis...'))
      await redis.client.connect()
    },
    disconnect: async () => {
      await redis.client.disconnect()
      redis.client = null
    },
    set: async (key, value) => {
      if(!await redis.isConnect()){
        await redis.connect(6379, 'localhost')
        await redis.client.set(key, JSON.stringify(value))
      }
      await redis.client.set(key, JSON.stringify(value))
    },
    get: async key => {
      if(!await redis.isConnect()){
        await redis.connect(6379, 'localhost')
        return await redis.client.get(key)
      }
      return await redis.client.get(key)
    },
    isConnect: async () => await redis.client.ping() === 'PONG' ? true : false
}