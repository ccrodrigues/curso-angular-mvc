import { Component, OnInit } from '@angular/core';

import { environment } from '../../environments/environment'
import { EnvService } from '../env.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  urlAPI : string;
  production : boolean;

  constructor(private envService : EnvService) {
    this.urlAPI = this.envService.urlAPI;
    this.production = this.envService.production;
  }

  ngOnInit() {
  }

}
