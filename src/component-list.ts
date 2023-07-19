import { IRouteableComponent, Router } from "@aurelia/router";
import { resolve } from "aurelia";

export class Components {
  public static list = [];

  public static add(...components: any[]) {
    components = components.filter(component => !this.list.includes(component));
    this.list.push(...components);
  }
  public static async remove(router: Router, viewModel: IRouteableComponent, component: string) {
    console.log('Router', router);
    for (let i = this.list.length - 1; i >= 0; i--) {
      if (this.list[i] === component) {
        await router.load(`../-@${component}`, { context: viewModel });
        this.list.splice(i, 1);
      }
    }
  }
}
