import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaoCommonComponentsModule } from '../common-components';
import {
  BaoSummaryComponent,
  BaoSummaryGuideText,
  BaoSummaryDescription,
  BaoSummaryTitle
} from './summary.component';
import { BaoSummaryList } from './summary-list.component';

const SUMMARY_DIRECTIVES = [
  BaoSummaryComponent,
  BaoSummaryGuideText,
  BaoSummaryTitle,
  BaoSummaryDescription,
  BaoSummaryList
];

@NgModule({
  imports: [CommonModule, BaoCommonComponentsModule],
  declarations: SUMMARY_DIRECTIVES,
  exports: SUMMARY_DIRECTIVES
})
export class BaoSummaryModule {}
