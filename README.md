# ApplicationsMonitoringUi

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.35.

Angular frontend for the Application Monitoring System.

The application provides a user interface for monitoring applications, viewing incidents, reviewing incident comments, and analysing application health checks.

## Overview

The UI communicates with the Application Monitoring REST API to retrieve and manage monitoring information.

The application provides a dashboard-oriented interface for viewing the operational status of monitored applications.

## Technologies

- Angular 20
- TypeScript
- HTML
- CSS
- RxJS
- Angular Router
- HttpClient

## Application Structure

```text
Dashboard
    │
    ├── Applications
    │      │
    │      └── Application Details
    │              ├── Application Information
    │              ├── Incidents
    │              └── Health Checks
    │
    └── Incidents
           │
           └── Incident Details
                  └── Comments


## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
