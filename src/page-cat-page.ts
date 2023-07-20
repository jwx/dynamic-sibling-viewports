import { IRoute, IRouter } from "@aurelia/router";

export class PageCatPage {
  static routes: IRoute[] = [
    {
      path: 'partial-head/:id',
      component: () => import('./partial-head-page'),
    },
    {
      path: 'partial-body/:id',
      component: () => import('./partial-body-page'),
    },
    {
      path: 'partial-tail/:id',
      component: () => import('./partial-tail-page'),
    },
  ];

  public constructor(private router: IRouter) { }

  public loading() {
    this.router.load('partial-head/cat', { context: this });
  }
}
