import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('start-page')
export class Start extends LitElement {

    render() {
        return html`<h2>Start page</h2>`
    }
}