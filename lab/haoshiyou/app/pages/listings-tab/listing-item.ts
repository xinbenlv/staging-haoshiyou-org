import {Component, Input} from "@angular/core";
import {NavController} from "ionic-angular";
import {Listing} from "../../listing";
import {ListingDetailPage} from "./listing-detail";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'listing-item',
  templateUrl: 'build/pages/listings-tab/listing-item.html',
  pipes: [DatePipe]
})
export class ListingItem {
  @Input() listing:Listing;

  constructor(private nav:NavController) {
  }

  gotoDetail() {
    this.nav.push(ListingDetailPage, {listing: this.listing});
  }
}
