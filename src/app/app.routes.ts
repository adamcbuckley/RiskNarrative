import { ActivatedRouteSnapshot, Routes } from "@angular/router";
import { SearchPageComponent } from "./search-page/search-page.component";
import { SearchResultsComponent } from "./search-results/search-results.component";
import { inject } from "@angular/core";
import { SearchService } from "./service/search.service";

export const routes: Routes = [
  {
    path: "search",
    component: SearchPageComponent,
  },
  {
    path: "search-results/:searchString",
    component: SearchResultsComponent,
    resolve: {
      searchResults: (route: ActivatedRouteSnapshot) =>
        inject(SearchService).search(route.paramMap.get("searchString")!),
    },
  },
  {
    path: "**",
    redirectTo: "search",
  },
];
