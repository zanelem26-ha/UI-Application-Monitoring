import { Routes } from '@angular/router';

import { Dashboard } from './dashboard/dashboard';
import { Applications } from './applications/applications';
import { ApplicationDetails } from './application-details/application-details';
import { Incidents } from './incidents/incidents';
import { IncidentDetails } from './incident-details/incident-details';

export const routes: Routes = [

  {
    path: '',
    component: Dashboard
  },

  {
    path: 'applications',
    component: Applications
  },

  {
  path: 'applications/:id',
  component: ApplicationDetails
  },

  {
    path: 'incidents',
    component: Incidents
  },

  { path: 'incidents/:id', 
    component: IncidentDetails 
  }

];