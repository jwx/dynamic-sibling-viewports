import { IRoute } from "@aurelia/router";

export class MyApp {
  static routes: IRoute[] = [
    {
      path: '',
      redirectTo: 'asdf'
    },
    {
      path: ':id',
      component: () => import('./workspace-page'),
    },
  ];
}
