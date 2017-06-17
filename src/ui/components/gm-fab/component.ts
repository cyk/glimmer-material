import Component, { tracked } from "@glimmer/component";
import { MDCRipple, MDCRippleFoundation } from "@material/ripple";
export default class Button extends Component {

  args: {
    mini: Boolean;
    plain: Boolean;
    ripple: Boolean;
    icon: String;
  }

  mdcProps: Array<string> = [
    'mini',
    'plain'
  ];

  get mdcClassNames(): String {
    return this.mdcProps
      .map((prop) => this.args[prop] && `mdc-fab--${prop}`)
      .join(' ');
  }

  didInsertElement() {
    this.args.ripple && MDCRipple.attachTo(this.element)
  }
}
