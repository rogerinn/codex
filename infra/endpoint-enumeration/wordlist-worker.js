import { readFileSync } from 'fs'

export const wordlistWorker = () => readFileSync('./wordlist.txt', 'utf8').split(/\r?\n/)