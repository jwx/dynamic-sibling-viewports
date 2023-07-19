import { Components } from "./component-list";

export class MyApp {
  public windows: unknown[] = [{}];

  public get components(): string[] {
    console.log('components', Components.list);
    return Components.list;
  }

  public add(component: string) {
    Components.add(component);
  }
}

