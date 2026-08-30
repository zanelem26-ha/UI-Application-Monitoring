import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidentsService } from '../services/incidents';
import { IncidentCommentsService } from '../services/incident-comments';

@Component({
  selector: 'app-incidents',
  imports: [CommonModule],
  templateUrl: './incidents.html',
  styleUrl: './incidents.css'
})
export class Incidents implements OnInit {

  incidents: any[] = [];
  expandedIncidentId: number | null = null;
  comments: { [incidentId: number]: any[] } = {};

  constructor(
    private incidentsService: IncidentsService,
    private incidentCommentsService: IncidentCommentsService
  ) {}

  ngOnInit(): void {

    this.incidentsService.getIncidents()
      .subscribe(data => {
        this.incidents = data;
      });

  }

  toggleIncident(incidentId: number): void {

  if (this.expandedIncidentId === incidentId) {
    this.expandedIncidentId = null;
    return;
  }

  this.expandedIncidentId = incidentId;

  this.incidentCommentsService
    .getCommentsByIncident(incidentId)
    .subscribe(data => {
      this.comments[incidentId] = data;
    });

 }

}