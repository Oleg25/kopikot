import { Component, OnInit } from '@angular/core';
import { SiteServiceService } from './shared/site-service.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {
  items = [];
  constructor(private siteService: SiteServiceService) { }

  ngOnInit() {
    this.siteService.getItems(10, 0)
      .subscribe(data => this.items = data.items);
  }

  getMoreItems() {
    alert("fdf");
  }
}
