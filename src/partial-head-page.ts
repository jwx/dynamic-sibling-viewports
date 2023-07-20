import { moveViewport } from "./move-viewport";

export class PartialHeadPage {
  public id: string;

  public loading(params: any, instruction, navigation) {
    this.id = params.id;
    console.log(instruction, navigation);
    moveViewport(instruction, navigation);
  }
}
