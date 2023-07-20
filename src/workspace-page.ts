import { IRoute } from "@aurelia/router";

export class WorkspacePage {
  static routes: IRoute[] = [
    {
      path: 'section-red',
      component: () => import('./section-red-page'),
    },
    {
      path: 'section-green',
      component: () => import('./section-green-page'),
    },
  ] ;


  public id: string;

  public loading(params: any) {
    this.id = params.id;
  }
}
