import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { SearchResults } from "../entities";
import { map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  getCompany(companyNumber: string) {
    return this.http
      .get<SearchResults>(
        `${environment.baseUrl}/Search?Query=${companyNumber}`,
        {
          headers: { "x-api-key": environment.apiKey },
        },
      )
      .pipe(map((r) => r.items ? r.items[0] : undefined));
  }
}
