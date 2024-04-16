import { Component, Input } from "@angular/core";
import {DatePipe, JsonPipe} from "@angular/common";
import { SearchResults } from "../entities";
import {RouterLink} from "@angular/router";

@Component({
  selector: "app-search-results",
  standalone: true,
  imports: [JsonPipe, DatePipe, RouterLink],
  templateUrl: "./search-results.component.html",
  styleUrl: "./search-results.component.scss",
})
export class SearchResultsComponent {
  @Input() public searchResults!: SearchResults;
}
