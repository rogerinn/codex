import { mainProcess } from '../../../data/endpoint-enumeration/endpoint-enumeration.js';
import { http } from '../../../infra/endpoint-enumeration/http-helper.js';
import { wordlistWorker } from '../../../infra/endpoint-enumeration/wordlist-worker.js';

export const mainProcessFactory = () => mainProcess(wordlistWorker(), http) 