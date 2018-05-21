import { Component, OnInit } from '@angular/core';
import { SiteServiceService } from './shared/site-service.service';
import {Item} from './shared/item';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {
  items: Item[];
  constructor(private siteService: SiteServiceService) { }

  ngOnInit() {
    this.siteService.getItems().subscribe((items: Array<Item>) => {
       this.items = items;

       console.log('sdsdsd ' + this.items);

    });
  }
}
