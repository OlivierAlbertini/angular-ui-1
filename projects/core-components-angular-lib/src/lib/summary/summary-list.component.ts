import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'bao-summary-list, [bao-summary-list], [baoSummaryList]',
  template: ` <ul>
    <li *ngFor="let item of items">
      <p>{{ item }}</p>
    </li>
  </ul>`,
  styleUrls: ['./summary-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'bao-summary-list' }
})
export class BaoSummaryList {
  @Input() public items: string[];
}
