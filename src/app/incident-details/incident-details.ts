import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { IncidentsService } from '../services/incidents';
import { IncidentCommentsService } from '../services/incident-comments';

@Component({
  selector: 'app-incident-details',
  imports: [CommonModule],
  templateUrl: './incident-details.html',
  styleUrl: './incident-details.css'
})
export class IncidentDetails implements OnInit {

  incident: any;
  comments: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private incidentsService: IncidentsService,
    private incidentCommentsService: IncidentCommentsService
  ) {}

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.incidentsService.getIncidentById(id)
      .subscribe(data => {
        this.incident = data;
      });

      this.incidentCommentsService.getCommentsByIncident(id)
      .subscribe(data => {
        this.comments = data;
      });

  }
}