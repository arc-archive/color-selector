import { TemplateResult, CSSResult, LitElement } from 'lit-element';
import '@anypoint-web-components/anypoint-checkbox/anypoint-checkbox';
import '../color-selector';

export declare const checkedHandler: unique symbol;
export declare const colorHandler: unique symbol;
export declare const toggleHandler: unique symbol;
export declare const notify: unique symbol;
export declare const checkboxTemplate: unique symbol;
export declare const selectorTemplate: unique symbol;
export declare const labelTemplate: unique symbol;

export class ColorInputSelectorElement extends LitElement {
  static readonly styles: CSSResult;

  /**
   * A color to be picked.
   */
  value: string;
  /**
   * Whther the color is enabled or not
   */
  enabled: string;
  /**
   * Enabes compatibility with the Anypoint styles
   */
  compatibility: string;

  constructor();

  [notify](): void;

  [checkedHandler](e: CustomEvent): void;

  /**
   * A handler for the color change. Updates color property value.
   */
  [colorHandler](e: CustomEvent): void;

  /**
   * A handler for the label click. Toggles enabled property.
   */
  [toggleHandler](): void;

  render(): TemplateResult;

  /**
   * @returns Template for the checkbox element
   */
  [checkboxTemplate](): TemplateResult;

  /**
   * @returns Template for the color selector element
   */
  [selectorTemplate](): TemplateResult;

  /**
   * @returns Template for the label element
   */
  [labelTemplate](): TemplateResult;
}
