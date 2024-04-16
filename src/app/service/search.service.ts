import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { SearchResults } from "../entities";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  constructor(private http: HttpClient) {}

  search(searchString: string) {
    return this.http.get<SearchResults>(
      `${environment.baseUrl}/Search?Query=${searchString}`,
      {
        headers: { "x-api-key": environment.apiKey },
      },
    );
  }
}
