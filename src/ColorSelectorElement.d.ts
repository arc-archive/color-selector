import { CSSResult, TemplateResult, LitElement } from 'lit-element';

export declare const colorValue: unique symbol;
export declare const colorTriggerHandler: unique symbol;
export declare const inputHandler: unique symbol;

/**
 * @deprecated Use the `@anypoint-web-components/awc` module instead.
 */
export declare class ColorSelectorElement extends LitElement {
  static get styles(): CSSResult;

  /**
   * A color to be picked.
   * @attribute
   */
  value: string;

  get [colorValue](): string;

  constructor();

  connectedCallback(): void;

  disconnectedCallback(): void;

  /**
   * Triggers the native color picker.
   */
  [colorTriggerHandler](): void;

  [inputHandler](e: Event): void;

  render(): TemplateResult;
}
