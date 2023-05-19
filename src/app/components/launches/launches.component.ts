import { Component, OnInit, DoCheck } from '@angular/core';

import { DEFAULT_PARAMS, Params, Orders } from '@models/params.model';
import { Launch } from '@models/launch.model';
import { LaunchService } from '@app/services/launch.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements DoCheck, OnInit {
  blankRows: number[];
  isLoading: boolean;
  launches: Launch[];
  math = Math;
  max: number | undefined;
  oldParamsOrder: Orders;
  oldParamsOffset: number;
  params: Params;

  constructor(private launchService: LaunchService) {
    this.blankRows = [];
    this.isLoading = false;
    this.max = undefined;
    this.params = DEFAULT_PARAMS;
  }

  ngOnInit() {
    this.getLaunches();
  }

  ngDoCheck() {
    /*
      I am wondering if there is a better way to do this using ngOnChanges.
      The examples I found were all closely tied to two-waydata-binding of
      input elements.
    */
    if (this.params.order !== this.oldParamsOrder) {
      this.getLaunches();
      this.oldParamsOrder = this.params.order;
    }
    if (this.params.offset !== this.oldParamsOffset) {
      this.getLaunches();
      this.oldParamsOffset = this.params.offset;
    }
  }

  getLaunches(): void {
    this.isLoading = true;
    this.launchService.getLaunches(this.params)
      .subscribe(launches => {
        this.launches = launches;
        this.blankRows = Array(this.params.limit - launches.length).fill(0).map((x, i) => i);
        this.isLoading = false;
        if (launches.length < this.params.limit) {
          this.max = this.params.offset + launches.length;
        }
      });
  }

  onSelect(launch: Launch): void {
    if (!!launch.links.presskit) {
      window.open(launch.links.presskit);
    }
  }

  onSort(): void {
    this.params.order = this.params.order === 'asc'
      ? 'desc'
      : 'asc';
  }

  handleOffset(offset: number): void {
    this.params.offset = offset;
  }
}
