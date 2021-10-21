import CityAnimation from "./CityAnimation"

export class CityAnimationElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback(){
    if(this.hasChildNodes()){
      return;
    }
    new CityAnimation(this);
  }
}

const template = document.createElement("template");
template.innerHTML = `
<div id="animationContainer">

</div>
`;

window.customElements.define("city-animation", CityAnimationElement);
