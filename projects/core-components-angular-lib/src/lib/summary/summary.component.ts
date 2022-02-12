import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  Input,
  Output,
  ViewEncapsulation,
  EventEmitter,
  OnInit
} from '@angular/core';

let summaryUniqueId = 0;
@Component({
  selector: 'bao-summary, [bao-summary], [baoSummary]',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'bao-summary'
  }
})
export class BaoSummaryComponent implements OnInit {
  @Input('aria-label') public ariaLabel?: string;
  @Output() public buttonEvent: EventEmitter<string> =
    new EventEmitter<string>();
  private _uniqueId = `bao-summary-${++summaryUniqueId}`;
  @Input() public id: string = this._uniqueId;
  public ariaDescribedby?: string;
  public ariaLabelledby?: string;

  constructor(private elementRef: ElementRef) {}

  get nativeElement(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  public ngOnInit() {
    this.ariaLabelledby = `${this.id}-arialabelledby`;
    this.ariaDescribedby = `${this.id}-ariadescribedby`;
  }

  public onButtonClick(event: Event) {
    event.stopPropagation();
    this.buttonEvent.emit();
  }
}

@Directive({
  selector:
    'bao-summary-guide-text, [bao-summary-guide-text], [baoSummaryGuideText]',
  host: { class: 'bao-summary-guide-text' }
})
export class BaoSummaryGuideText {}

@Directive({
  selector: 'bao-summary-title, [bao-summary-title], [baoSummaryTitle]',
  host: { class: 'bao-summary-title' }
})
export class BaoSummaryTitle {}

@Directive({
  selector:
    'bao-summary-description, [bao-summary-description], [baoSummaryDescription]',
  host: { class: 'bao-summary-description' }
})
export class BaoSummaryDescription {}
