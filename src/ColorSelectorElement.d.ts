import { CSSResult, TemplateResult, LitElement } from 'lit-element';

export declare const colorValue: unique symbol;
export declare const colorTriggerHandler: unique symbol;
export declare const inputHanlder: unique symbol;

export declare class ColorSelectorElement extends LitElement {
  static readonly styles: CSSResult;

  /**
   * A color to be picked.
   */
  value: string;

  readonly [colorValue]: string;

  constructor();

  connectedCallback(): void;

  disconnectedCallback(): void;

  /**
   * Triggers the native color picker.
   */
  [colorTriggerHandler](): void;

  [inputHanlder](e: Event): void;

  render(): TemplateResult;
}
