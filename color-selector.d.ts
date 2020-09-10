import { ColorSelectorElement } from './src/ColorSelectorElement';

declare global {
  interface HTMLElementTagNameMap {
    "color-selector": ColorSelectorElement;
  }
}
