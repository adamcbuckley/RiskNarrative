import { ActivatedRouteSnapshot, Routes } from "@angular/router";
import { SearchPageComponent } from "./search-page/search-page.component";
import { SearchResultsComponent } from "./search-results/search-results.component";
import { inject } from "@angular/core";
import { SearchService } from "./service/search.service";
import {CompanyDetailComponent} from "./company-detail/company-detail.component";
import {CompanyService} from "./service/company.service";

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
    path: "company-detail/:companyNumber",
    component: CompanyDetailComponent,
    resolve: {
      companyDetail: (route: ActivatedRouteSnapshot) =>
        inject(CompanyService).getCompany(route.paramMap.get("companyNumber")!),
    },
  },
  {
    path: "**",
    redirectTo: "search",
  },
];
