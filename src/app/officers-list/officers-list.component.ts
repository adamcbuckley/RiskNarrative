import { Component, Input } from "@angular/core";
import {DatePipe, JsonPipe, TitleCasePipe} from "@angular/common";
import {CompanyDetail, OfficerList} from "../entities";
import {RouterLink} from "@angular/router";

@Component({
  selector: "app-officers-list",
  standalone: true,
  imports: [DatePipe, JsonPipe, TitleCasePipe, RouterLink],
  templateUrl: "./officers-list.component.html",
  styleUrl: "./officers-list.component.scss",
})
export class OfficersListComponent {
  @Input() public officersList?: OfficerList;
  @Input() public companyDetail?: CompanyDetail;
}
