import { Component } from '@angular/core';
import { BaseJobManagementComponent } from '../base-job-management.component';
import { Tag } from '../../../core/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent extends BaseJobManagementComponent {

  tag: string;

  constructor() {
    super();
  }

  addTag() {
    if (this.tag && this.tag.trim() !== '') {
      this.job.tags.push({ name: this.tag.toLowerCase() } as Tag);
      this.tag = '';
    }
  }

  next() {
    this.router.navigate(['/employer', 'job', this.job.id, 'manage', 'publish']);
  }
}


