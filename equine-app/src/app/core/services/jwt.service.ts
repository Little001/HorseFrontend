import { Injectable } from '@angular/core';
import {UserLogin} from "../models";


@Injectable()
export class JwtService {

  getToken(): String {
    return window.localStorage['jwtToken'];
  }

  getRefreshToken(): String {
    return window.localStorage['jwtRefresh'];
  }

  saveData(data: UserLogin) {
    window.localStorage['jwtToken'] = data.token;
    window.localStorage['jwtRefresh'] = data.refreshToken;
    window.localStorage['jwtExpire'] = data.expire;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
    window.localStorage.removeItem('jwtRefresh');
    window.localStorage.removeItem('jwtExpire');
  }

}
