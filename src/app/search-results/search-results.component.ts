import { Component, Input } from "@angular/core";
import {DatePipe, JsonPipe} from "@angular/common";
import { SearchResults } from "../entities";

@Component({
  selector: "app-search-results",
  standalone: true,
  imports: [JsonPipe, DatePipe],
  templateUrl: "./search-results.component.html",
  styleUrl: "./search-results.component.scss",
})
export class SearchResultsComponent {
  @Input() public searchResults!: SearchResults;
}
