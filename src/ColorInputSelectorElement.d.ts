import { TemplateResult, CSSResult, LitElement } from 'lit-element';
import '@anypoint-web-components/anypoint-checkbox/anypoint-checkbox';
import '../color-selector';

export declare const checkedHandler: unique symbol;
export declare const colorHandler: unique symbol;
export declare const toggleHandler: unique symbol;
export declare const keydownHandler: unique symbol;
export declare const notify: unique symbol;
export declare const checkboxTemplate: unique symbol;
export declare const selectorTemplate: unique symbol;
export declare const labelTemplate: unique symbol;

/**
 * @deprecated Use the `@anypoint-web-components/awc` module instead.
 */
export class ColorInputSelectorElement extends LitElement {
  static readonly styles: CSSResult;

  /**
   * A color to be picked.
   * @attribute
   */
  value: string;
  /**
   * Whether the color is enabled or not
   * @attribute
   */
  enabled: boolean;

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

  [keydownHandler](e: KeyboardEvent): void;

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
