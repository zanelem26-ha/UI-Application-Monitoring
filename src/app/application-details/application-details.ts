import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { ApplicationsService } from '../services/applications';
import { IncidentsService } from '../services/incidents';
import { HealthChecksService } from '../services/health-checks';

@Component({
  selector: 'app-application-details',
  imports: [CommonModule],
  templateUrl: './application-details.html',
  styleUrl: './application-details.css'
})


export class ApplicationDetails implements OnInit {

  application: any;
  incidents: any[] = [];
  healthChecks: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private applicationsService: ApplicationsService,
    private incidentsService: IncidentsService,
    private healthChecksService: HealthChecksService
  ) {}

  ngOnInit(): void {

  const id = Number(this.route.snapshot.paramMap.get('id'));

  this.applicationsService.getApplicationById(id)
    .subscribe(data => {
      this.application = data;
    });

  this.incidentsService.getIncidentsByApplication(id)
    .subscribe(data => {
      this.incidents = data;
    });

  this.healthChecksService.getHealthChecksByApplication(id)
  .subscribe(data => {
    console.log('Application ID:', id);
    console.log('Health Checks:', data);

    this.healthChecks = data;
  });
}
}