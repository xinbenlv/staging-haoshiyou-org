import {Component, Input} from "@angular/core";
import {NavController} from "ionic-angular";
import {Listing} from "../../models/listing";
import {ListingDetailPage} from "./listing-detail.page";

@Component({
  selector: 'listing-item',
  templateUrl: 'listing-item.comp.html',
})
export class ListingItem {
  @Input() listing:Listing;

  constructor(private nav:NavController) {
  }

  gotoDetail() {
    this.nav.push(ListingDetailPage, {listing: this.listing});
  }
}
