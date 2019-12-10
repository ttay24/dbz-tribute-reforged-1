import { Saga, SagaState, BaseSaga } from "./BaseSaga";
import { Players } from "Libs/TreeLib/Structs/Players";
import { SagaHelper } from "../SagaHelper";

export class NamekSaga extends BaseSaga implements Saga {
  name: string = 'Namek Saga';

  // custom stuff
  bosses: Map<string, unit>;
  sagaRewardTrigger: trigger;

  constructor() {
    super();

    this.bosses = new Map();
    this.sagaRewardTrigger = CreateTrigger();
  }

  canStart(): boolean {
    return true;
  }

  canComplete(): boolean {
    if (this.bosses.size > 0) {
      return SagaHelper.areAllBossesDead(this.bosses);
    }
    return false;
  }

  start(): void {
    super.start();

    // create unit
    const maxFriezaHenchmen = 10;
    for (let i = 0; i < maxFriezaHenchmen; ++i) {
      let offsetX = Math.random() * 1000;
      let offsetY = Math.random() * 1000;
      const saibaman = CreateUnit(Players.NEUTRAL_HOSTILE, FourCC('n028'), 8765 + offsetX, 1400 + offsetY, 0);
      // SagaHelper.setAllStats(saibaman, 50, 50, 50);
      // this.bosses.set("Saibaman" + i, saibaman);
    }

    // create unit
    const boss1 = CreateUnit(Players.NEUTRAL_HOSTILE, FourCC('U015'), 8765, 1400, 0);
    SagaHelper.setAllStats(boss1, 1000, 250, 400);
    this.bosses.set("Dodoria", boss1);

    const boss2 = CreateUnit(Players.NEUTRAL_HOSTILE, FourCC('U01B'), 8765, 1400, 0);
    SagaHelper.setAllStats(boss2, 1200, 300, 700);
    this.bosses.set("Zarbon", boss2);

    // doesnt work yet but placeholder
    SagaHelper.addStatRewardOnCompletAction(this, this.sagaRewardTrigger, 100);
  }

  complete(): void {
    super.complete();
  }

  update(t: number): void {
    // if zarbon dead
    // summon zarbon 2 in its place
  }
}