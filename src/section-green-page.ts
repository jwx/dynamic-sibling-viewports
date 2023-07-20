import { IRoute } from "@aurelia/router";

export class SectionGreenPage {
  static routes: IRoute[] = [
    {
      path: 'page-cat',
      component: () => import('./page-cat-page'),
    },
    {
      path: 'page-dog',
      component: () => import('./page-dog-page'),
    },
  ] ;
}
