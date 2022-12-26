import { Inject, Injectable } from '@angular/core';
import { RouteConfig } from './routeConfig';
import { RouteConfigToken } from './routeConfig.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(@Inject(RouteConfigToken) private configToekn: RouteConfig) {
    console.log('configToken', this.configToekn);
  }
}
