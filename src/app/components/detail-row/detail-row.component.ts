import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-row',
  templateUrl: './detail-row.component.html',

  standalone: true,
})
export class DetailRowComponent implements OnInit {
  @Input() hasDivider = true;
  @Input() title = '';
  @Input() description = '';
  constructor() {}

  ngOnInit() {}
}
