import { Injectable } from '@angular/core';
import { PeriodsService } from './periods.service';
import { OrdersChart, OrdersChartData } from '../data/orders-chart';

@Injectable()
export class OrdersChartService {


  private data = { };

  constructor(private period: PeriodsService) {
  
  
  }


   



}
