import { Injectable } from '@angular/core';
import { JoursFTableData } from '../data/joursF';

@Injectable({
  providedIn: 'root'
})
export class JoursFService extends JoursFTableData{
  data = [  {
    Date: '2019-08-14T00:45:51',
    Description: 'Aid adha'},  ];

  getDataJF() {
    return this.data;
  }
 
  constructor() {
    super();
   }
}
