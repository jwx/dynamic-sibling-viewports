import { IRouter } from "@aurelia/router";
import { Components  } from "./component-list";

export class AboutPage {
  public constructor(private router: IRouter) {}
  public close(component: string) {
    Components.remove(this.router, this, component);
  }
}
