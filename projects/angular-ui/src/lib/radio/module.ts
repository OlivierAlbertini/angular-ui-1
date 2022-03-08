/*
 * Copyright (c) 2022 Ville de Montreal. All rights reserved.
 * Licensed under the MIT license.
 * See LICENSE file in the project root for full license information.
 */
import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaoButtonModule } from '../button';
import { BaoCommonComponentsModule } from '../common-components/module';
import { BaoRadioButtonGroupComponent } from './radio-group.component';
import {
  BaoRadioButtonComponent,
  BaoRadioDescription,
  BaoRadioActionButton
} from './radio.component';

const RADIO_DIRECTIVES = [
  BaoRadioButtonComponent,
  BaoRadioDescription,
  BaoRadioButtonGroupComponent,
  BaoRadioActionButton
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BaoCommonComponentsModule,
    BaoButtonModule,
    ObserversModule
  ],
  declarations: RADIO_DIRECTIVES,
  exports: RADIO_DIRECTIVES
})
export class BaoRadioModule {}
