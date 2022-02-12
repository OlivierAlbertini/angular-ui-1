// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { moduleMetadata } from '@storybook/angular';
import { Meta, Story } from '@storybook/angular/types-6-0';
import {
  BaoIconModule,
  BaoButtonModule,
  BaoCommonComponentsModule,
  BaoSummaryComponent,
  BaoSummaryDescription,
  BaoSummaryTitle,
  BaoSummaryList
} from 'core-components-angular-lib';

const description = `
Summary
`;

export default {
  title: 'Components/Summary',
  decorators: [
    moduleMetadata({
      declarations: [
        BaoSummaryComponent,
        BaoSummaryTitle,
        BaoSummaryDescription,
        BaoSummaryList
      ],
      imports: [BaoIconModule, BaoButtonModule, BaoCommonComponentsModule]
    })
  ],
  component: BaoSummaryComponent,
  parameters: {
    docs: {
      description: {
        component: description
      }
    }
  },
  argTypes: {}
} as Meta;

const Template: Story<
  BaoSummaryComponent & { title: string; content: string }
> = (args: BaoSummaryComponent) => ({
  component: BaoSummaryComponent,
  template: `
  <div class="col-12 md-6 md-4">
    <bao-summary id="ID1">
      <bao-label required="true">{{title}}</bao-label><bao-icon svgIcon="icon-info"></bao-icon>
      <bao-guiding-text>
        {{content}}
      </bao-guiding-text>
      <bao-summary-title>{{title}}</bao-summary-title>
      <button
        bao-button
        size="medium" 
        level="tertiary" 
        displayType="utility" 
        type="button"
        (click)="onButtonClick($event)"
      >
        <span>Modifier</span>
        <span><bao-icon title="Modifier" svgIcon="icon-edit"></bao-icon></span>
      </button>
      <bao-summary-description>
          <p>
              {{content}}
          </p>
      </bao-summary-description>
    </bao-summary>
  </div>
  `,
  props: args
});

export const Primary = Template.bind({});

Primary.args = {
  title: 'Libellé',
  content: 'Content'
};

export const SimpleSummary: Story = args => ({
  props: args,
  template: `
  <div class="col-12 md-6 md-4">
    <bao-summary id="ID1111">
      <bao-label required="true">Libellé</bao-label>
      <bao-icon svgIcon="icon-info"></bao-icon>
      <bao-guiding-text>
        Texte d’assisance Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Ridiculus tempus arcu neque arcu quisque egestas.
      </bao-guiding-text>
      <bao-summary-title>Libellé optionnel</bao-summary-title>
      <bao-summary-description>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Diam arcu proin imperdiet cras sed quam bibendum lacus facilisis.
          </p>
      </bao-summary-description>
      <bao-summary-list
        [items]="['apple', 'pear', 'banana', 'coconut']"
      >
      </bao-summary-list>
      <button
        bao-button
        size="medium" 
        level="tertiary" 
        displayType="utility" 
        type="button"
        (click)="onButtonClick($event)"
      >
        <span>Modifier</span>
        <span><bao-icon title="Modifier" svgIcon="icon-edit"></bao-icon></span>
      </button>
    </bao-summary>
  </div>
  `
});
SimpleSummary.storyName = 'Summary - Description - label with list';
SimpleSummary.args = {
  ...Primary.args
};

export const SummaryWithErrorText: Story = args => ({
  props: args,
  template: `
  <div class="col-12 md-6 md-4">
    <bao-summary id="ID1112">
      <bao-label required="true">Libellé</bao-label>
      <bao-summary-title>Libellé Optionnel</bao-summary-title>
      <bao-summary-description>
          <p>
            Lorem ipsum dolor sit amet
          </p>
      </bao-summary-description>
      <button
        bao-button
        size="medium" 
        level="tertiary" 
        displayType="utility" 
        type="button"
        (click)="onButtonClick($event)"
      >
        <span>Modifier</span>
        <span><bao-icon title="Modifier" svgIcon="icon-edit"></bao-icon></span>
      </button>
      <bao-error>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </bao-error>
    </bao-summary>
  </div>
  `
});
SummaryWithErrorText.storyName =
  'Summary - Description & label with error text';
SummaryWithErrorText.args = {
  ...Primary.args
};

export const SummaryWithHiddenLabel: Story = args => ({
  props: args,
  template: `
  <div class="col-12 md-6 md-4">
    <bao-summary id="ID1112">
      <bao-label required="true">Libellé</bao-label>
      <bao-summary-description>
          <p>
            Lorem ipsum dolor sit amet
          </p>
      </bao-summary-description>
      <button
        bao-button
        size="medium" 
        level="tertiary" 
        displayType="utility" 
        type="button"
        (click)="onButtonClick($event)"
      >
        <span>Modifier</span>
        <span><bao-icon title="Modifier" svgIcon="icon-edit"></bao-icon></span>
      </button>
    </bao-summary>
  </div>
  `
});
SummaryWithHiddenLabel.storyName = 'Summary - Description & hidden label';
SummaryWithHiddenLabel.args = {
  ...Primary.args
};

export const SummaryWithHiddenLabelAndButton: Story = args => ({
  props: args,
  template: `
  <div class="col-12 md-6 md-4">
    <bao-summary id="ID1113">
      <bao-label required="true">Libellé</bao-label>
      <bao-summary-description>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Diam arcu proin imperdiet cras sed quam bibendum lacus facilisis.
          </p>
      </bao-summary-description>
    </bao-summary>
  </div>
  `
});
SummaryWithHiddenLabelAndButton.storyName =
  'Summary - Description -  hidden label & button';
SummaryWithHiddenLabelAndButton.args = {
  ...Primary.args
};

export const SummaryWithHiddenLabelErrorText: Story = args => ({
  props: args,
  template: `
  <div class="col-12 md-6 md-4">
    <bao-summary id="ID1114">
      <bao-label required="true">Libellé</bao-label>
      <bao-summary-title>Libellé optionnel</bao-summary-title>
      <bao-summary-description>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Diam arcu proin imperdiet cras sed quam bibendum lacus facilisis.
          </p>
      </bao-summary-description>
      <button
        bao-button
        size="medium" 
        level="tertiary" 
        displayType="utility" 
        type="button"
        (click)="onButtonClick($event)"
      >
        <span>Modifier</span>
        <span><bao-icon title="Modifier" svgIcon="icon-edit"></bao-icon></span>
      </button>
      <bao-error>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</bao-error>
    </bao-summary>
  </div>
  `
});
SummaryWithHiddenLabelErrorText.storyName =
  'Summary - Description & hidden label with error text';
SummaryWithHiddenLabelErrorText.args = {
  ...Primary.args
};
