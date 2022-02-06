import http from "./httpService";
import config from '../config';

export function getBlog() {
  
    return http.get(config.apiUrl + "/blog");
  }