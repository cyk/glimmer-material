import Component from "@glimmer/component";
import { MDCRipple, MDCRippleFoundation } from "@material/ripple";
export default class Button extends Component {
  didInsertElement() {
    this.args.noRipple || MDCRipple.attachTo(this.element)
  }
}
