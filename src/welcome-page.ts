import { IRouter } from "@aurelia/router";
import { Components  } from "./component-list";

export class WelcomePage {
  public message = 'Welcome to Aurelia 2!';

  public constructor(private router: IRouter) {}
  public close(component: string) {
    Components.remove(this.router, this, component);
  }
}
