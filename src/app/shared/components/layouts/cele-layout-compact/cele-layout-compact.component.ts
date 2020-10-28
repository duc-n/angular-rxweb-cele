import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-cele-layout-compact',
  templateUrl: './cele-layout-compact.component.html',
  styleUrls: ['./cele-layout-compact.component.css']
})
export class CeleLayoutCompactComponent implements OnInit {

  constructor(private logger: NGXLogger) { }

  ngOnInit(): void {
    this.logger.debug('CeleLayoutCompactComponent init');
  }

}
