import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mission } from 'src/app/core/models/Mission';
import { MissionService } from 'src/app/core/services/mission.service';

@Component({
  selector: 'app-list-mission',
  templateUrl: './list-mission.component.html',
  styleUrls: ['./list-mission.component.css'],
})
export class ListMissionComponent implements OnInit {
  constructor(
    private missionService: MissionService,
    private route: ActivatedRoute
  ) { }
  missions: Mission[] = [];
  p: number = 1;
  ngOnInit(): void {
    this.route.parent?.params.subscribe((param) => {
      this.refreshData(+param['id']);
    });
  }

  delete(idMission: number) {
    this.missionService
      .deleteMissionById(idMission)
      .subscribe(() => this.ngOnInit());
  }

  refreshData(idc: number) {
    this.missionService.DisplayMissionByContrat(idc).subscribe((result) => {
      this.missions = result;
    });
  }
}
