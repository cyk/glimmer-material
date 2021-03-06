import Component, { tracked } from "@glimmer/component";
import { MDCRipple, MDCRippleFoundation } from "@material/ripple";
export default class Button extends Component {

  args: {
    accent: Boolean;
    raised: Boolean;
    ripple: Boolean;
  }

  mdcProps: Array<string> = [
    'accent',
    'raised'
  ];

  get mdcClassNames(): String {
    return this.mdcProps
      .map((prop) => this.args[prop] && `mdc-button--${prop}`)
      .join(' ');
  }

  didInsertElement() {
    this.args.ripple && MDCRipple.attachTo(this.element)
  }
}
