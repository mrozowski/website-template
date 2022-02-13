import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './start'
import './contact'
import './about-me'
@customElement('content-page')
export class Page extends LitElement {
  static styles = css`
    :host {
        text-align: center;
    }
  `;

  @property({ type: Number }) pageNumber: number = 1;


  render() {
    if (this.pageNumber == 1) {
      return html`<start-page></start-page>`;
    } else if (this.pageNumber == 2) {
      return html`<about-page></about-page>`;
    }
    else if (this.pageNumber == 3) {
      return html`<contact-page></contact-page>`;
    }
    return;
  }
}