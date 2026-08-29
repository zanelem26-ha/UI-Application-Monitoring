import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsService } from '../services/applications';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-applications',
 imports: [CommonModule, RouterLink],
  templateUrl: './applications.html',
  styleUrl: './applications.css'
})
export class Applications implements OnInit {

  applications: any[] = [];

  constructor(
    private applicationsService: ApplicationsService
  ) {}

  ngOnInit(): void {
    this.applicationsService.getApplications()
      .subscribe(data => {
        this.applications = data;
      });
  }
}
