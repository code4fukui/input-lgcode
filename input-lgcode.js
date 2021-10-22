import { SelectCity } from "https://code4fukui.github.io/select-city/select-city.js";

class InputLGCode extends SelectCity {
  constructor(opts) {
    super(opts);
  }
  async init(opts) {
    await super.init(opts);
    this.appendChild(this.inlgcode);
  }
  get value() {
    return super.lgcode;
  }
  set value(code) {
    super.lgcode = code;
  }
}

customElements.define("input-lgcode", InputLGCode);

export { InputLGCode };
