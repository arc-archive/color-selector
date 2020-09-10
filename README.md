[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/color-selector.svg)](https://www.npmjs.com/package/@advanced-rest-client/color-selector)

[![Build Status](https://travis-ci.com/advanced-rest-client/color-selector.svg)](https://travis-ci.com/advanced-rest-client/color-selector)

# Color selector

A component that is an input specialized with selecting a color. The package contains a `color-selector` that only renders an interactive control to select a color, and `color-input-selector` that contains additional label and enabling checkbox.

## Usage

### Installation
```
npm install --save @advanced-rest-client/color-selector
```

### In a LitElement

```js
import { LitElement, html } from 'lit-element';
import '@advanced-rest-client/color-selector/color-selector.js';
import '@advanced-rest-client/color-selector/color-input-selector.js';

class SampleElement extends LitElement {
  render() {
    return html`
    <color-selector
      .value="${value}"
      @change="${this._valueHandler}"
      slot="content"
    ></color-selector>
    <color-input-selector
      .value="${value}"
      @change="${this._valueHandler}"
      slot="content"
    >
      Select a color
    </color-input-selector>
    `;
  }

  _valueHandler(e) {
    this.value = e.target.value;
  }

  _inputValueHandler(e) {
    this.value = e.target.value;
    this.colorEnabled = e.target.enabled;
  }
}
customElements.define('sample-element', SampleElement);
```

## Development

```sh
git clone https://github.com/advanced-rest-client/color-selector
cd color-selector
npm install
```

### Running the demo locally

```sh
npm start
```

### Running the tests
```sh
npm test
```
