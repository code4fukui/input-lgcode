import { SelectCity } from "https://code4fukui.github.io/select-city/select-city.js";

class InputLGCode extends SelectCity {
  async init() {
    await super.init();
    this.appendChild(this.inlgcode);
  }
  get value() {
    console.log(super.lgcode);
    return super.lgcode;
  }
  set value(code) {
    super.lgcode = code;
  }
}

customElements.define("input-lgcode", InputLGCode);

export { InputLGCode };
