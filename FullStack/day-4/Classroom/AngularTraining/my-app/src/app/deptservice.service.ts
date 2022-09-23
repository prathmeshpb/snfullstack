import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeptserviceService {
  deptdata():string[]{
    return['ECM','PCM','JPS']
  }
  constructor() { }
}
