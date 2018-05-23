import { Component, OnInit } from '@angular/core';
import { SiteServiceService } from './shared/site-service.service';
import { AppConfig } from '../config/app.config';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {
  private items = [];
  private total = 0;

  constructor(private siteService: SiteServiceService) { }

  ngOnInit() {
    this.loadPageItems();
  }

  loadPageItems () {
    this.total = this.total + AppConfig.topItemsLimit;
    this.siteService.getItems(this.total, 0)
      .subscribe(data => this.items = data.items);
  }
}
