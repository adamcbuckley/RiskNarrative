import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-search-page",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./search-page.component.html",
  styleUrl: "./search-page.component.scss",
})
export class SearchPageComponent {
  searchString: any;

  constructor(private router: Router) {}

  search() {
    this.router.navigate([
      "search-results",
      encodeURIComponent(this.searchString),
    ]);
  }
}
