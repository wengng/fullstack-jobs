import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { PublicJobsGQL } from '../../core/graphql/queries/public-jobs.gql';
import { JobSummary } from '../../core/models/job-summary';
import { AuthService } from '../../core/authentication/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'job-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  jobs: JobSummary[];
  busy = false;

  constructor(public authService: AuthService, private publicJobsGQL: PublicJobsGQL) { }

  ngOnInit() {
    this.busy = true;
    this.publicJobsGQL.fetch(null, { fetchPolicy: 'network-only' })
      .pipe(finalize(() => {
        this.busy = false;
      })).subscribe(result => {
        // tslint:disable-next-line:no-string-literal
        this.jobs = result.data['publicJobs'];
      });
  }
}
