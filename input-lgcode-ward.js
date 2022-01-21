import { SelectWard } from "https://code4fukui.github.io/select-city/select-ward.js";

class InputLGCodeWard extends SelectWard {
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

customElements.define("input-lgcode-ward", InputLGCodeWard);

export { InputLGCodeWard };
