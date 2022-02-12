import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  BaoErrorTextComponent,
  BaoGuidingTextComponent,
  BaoLabelTextComponent
} from '.';

const DIRECTIVES = [
  BaoErrorTextComponent,
  BaoGuidingTextComponent,
  BaoLabelTextComponent
];

@NgModule({
  imports: [CommonModule],
  declarations: DIRECTIVES,
  exports: DIRECTIVES
})
export class BaoCommonComponentsModule {}
