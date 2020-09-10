import { html, LitElement } from 'lit-element';
import '@anypoint-web-components/anypoint-checkbox/anypoint-checkbox.js';
import elementStyles from './ColorInputSelectorElement.styles.js';
import '../color-selector.js';

/** @typedef {import('lit-element').TemplateResult} TemplateResult */
/** @typedef {import('@anypoint-web-components/anypoint-checkbox').AnypointCheckbox} AnypointCheckbox */
/** @typedef {import('./ColorSelectorElement').ColorSelectorElement} ColorSelectorElement */

export const checkedHandler = Symbol('checkedHandler');
export const colorHandler = Symbol('colorHandler');
export const toggleHandler = Symbol('toggleHandler');
export const notify = Symbol('notify');
export const checkboxTemplate = Symbol('checkboxTemplate');
export const selectorTemplate = Symbol('selectorTemplate');
export const labelTemplate = Symbol('labelTemplate');

export class ColorInputSelectorElement extends LitElement {
  static get styles() {
    return elementStyles;
  }

  static get properties() {
    return {
      /**
       * Selected color
       */
      value: { type: String, reflect: true },
      /**
       * Whether the color is enabled or not
       */
      enabled: { type: Boolean, reflect: true },
      /**
       * Enables compatibility with the Anypoint styles
       */
      compatibility: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    /**
     * @type {string}
     */
    this.value = undefined;
    /**
     * @type {boolean}
     */
    this.enabled = undefined;
    /**
     * @type {boolean}
     */
    this.compatibility = undefined;
  }

  [notify]() {
    this.dispatchEvent(new CustomEvent('change'));
  }

  /**
   * @param {CustomEvent} e
   */
  [checkedHandler](e) {
    const input = /** @type AnypointCheckbox */ (e.target);
    if (this.enabled === input.checked) {
      return;
    }
    this.enabled = input.checked;
    this[notify]();
  }

  /**
   * A handler for the color change. Updates color property value.
   */
  [colorHandler](e) {
    const picker = /** @type ColorSelectorElement */ (e.target);
    this.value = picker.value;
    if (!this.enabled) {
      this.enabled = true;
    }
    this.requestUpdate();
    this[notify]();
  }

  /**
   * A handler for the label click. Toggles enabled property.
   */
  [toggleHandler]() {
    this.enabled = !this.enabled;
    this.requestUpdate();
    this[notify]();
  }

  render() {
    return html`
    ${this[checkboxTemplate]()}
    ${this[selectorTemplate]()}
    ${this[labelTemplate]()}
    `;
  }

  /**
   * @returns {TemplateResult} Template for the checkbox element
   */
  [checkboxTemplate]() {
    const { compatibility, enabled } = this;
    return html`
    <anypoint-checkbox
      aria-label="Enable or disable this color"
      ?checked="${enabled}"
      ?compatibility="${compatibility}"
      aria-describedby="bgcolorlabel"
      @change="${this[checkedHandler]}"
    ></anypoint-checkbox>
    `;
  }

  /**
   * @returns {TemplateResult} Template for the color selector element
   */
  [selectorTemplate]() {
    const { value } = this;
    return html`
    <color-selector
      class="color-box"
      .value="${value}"
      @change="${this[colorHandler]}"
    ></color-selector>
    `;
  }

  /**
   * @returns {TemplateResult} Template for the label element
   */
  [labelTemplate]() {
    return html`
    <span
      class="checkbox-label"
      id="bgcolorlabel"
      @click="${this[toggleHandler]}"
    ><slot></slot></span>
    `;
  }
}
