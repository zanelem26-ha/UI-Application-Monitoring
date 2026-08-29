import { Component, OnInit } from '@angular/core';

import { ApplicationsService } from '../services/applications';
import { IncidentsService } from '../services/incidents';
import { IncidentCommentsService } from '../services/incident-comments';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

  applications: any[] = [];
  incidents: any[] = [];
  incidentComments: any[] = [];

  constructor(
    private applicationsService: ApplicationsService,
    private incidentsService: IncidentsService,
    private incidentCommentsService: IncidentCommentsService
  ) {}

  ngOnInit(): void {

    this.applicationsService.getApplications()
      .subscribe(data => {
        this.applications = data;
      });

    this.incidentsService.getIncidents()
      .subscribe(data => {
        this.incidents = data;
      });

    this.incidentCommentsService.getIncidentComments()
      .subscribe(data => {
        this.incidentComments = data;
      });

  }

  get openIncidents() {
    return this.incidents.filter(
      incident => incident.status === 'Open'
    );
  }

  get criticalIncidents() {
    return this.incidents.filter(
      incident => incident.severity === 'Critical'
    );
  }
}