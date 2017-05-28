import Component, { tracked } from "@glimmer/component";
import { onChange } from '../../../utils/router';

export default class GlimmerMaterial extends Component {
  @tracked protected currentRouteComponent: string;
  @tracked protected params: any;

  @tracked('currentRouteComponent')
  get isCurrentRouteHome() {
    return this.currentRouteComponent === 'route-home'
  }

  constructor(options) {
    super(options);

    onChange((componentName: string, params: any) => {
      this.currentRouteComponent = componentName;
      this.params = params;
    });
  }
}
