import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './components/menu';
import './components/content';

@customElement('main-module')
export class Main extends LitElement {

  static styles = css`p { color: blue }`;

  @property()
  name = 'Somebody';

  @property({ type: Number })
  page: number = 1;

  showStartPage = () => {
    console.log("ButtonOne clicked");
    this.page = 1;
  }

  showAboutMePage = () => {
    console.log("ButtonTwo clicked");
    this.page = 2;
  }

  showContactPage = () => {
    console.log("ButtonThree clicked");
    this.page = 3;
  }

  render() {
    return html`
    <top-menu .showStartPage=${this.showStartPage} .showAboutMePage=${this.showAboutMePage}
      .showContactPage=${this.showContactPage}></top-menu>
    <content-page .pageNumber=${this.page}></content-page>
    
      `;
  }
}