import { html, LitElement, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('top-menu')
export class TopMenu extends LitElement {

  @property()
  showStartPage?: any;

  @property()
  showAboutMePage?: any;

  @property()
  showContactPage?: any;

  render() {
    return html`
    <nav>
      <div class="menu">
        <span>It's top menu</span>
        <button @click=${this.showStartPage}> start </button>
        <button @click=${this.showAboutMePage}> about me </button>
        <button @click=${this.showContactPage}> contact </button>
      </div>
    </nav>
    `;
  }


  static get styles() {
    return css`
    nav {
      width: 100vw;
      height: 5rem;
      background-color: lightblue;
    }
    .menu {
      display: flex;
      height: 100%;
      align-items: center;
      padding: 0 1rem
    }

    button {
      height: 2rem;
      margin-left: 0.4rem;
    }

    span {
      flex-grow: 1;
    }
    `
  }
}