import { Params } from '@models/params.model';

export class Utils {
  static getQueryString = (params: Params) => Object.keys(params)
    .map(key => key + '=' + params[key])
    .join('&')
}
