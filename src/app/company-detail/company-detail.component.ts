import { Component, Input } from "@angular/core";
import { CompanyDetail } from "../entities";
import {DatePipe, JsonPipe, TitleCasePipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: "app-company-detail",
  standalone: true,
  imports: [JsonPipe, DatePipe, RouterLink, TitleCasePipe],
  templateUrl: "./company-detail.component.html",
  styleUrl: "./company-detail.component.scss",
})
export class CompanyDetailComponent {
  @Input() public companyDetail?: CompanyDetail;
}
