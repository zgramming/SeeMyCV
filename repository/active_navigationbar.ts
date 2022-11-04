import { makeAutoObservable } from "mobx";

export class ActiveNavigationBarStore {
  activeMenuCode?:
    | null
    | "experience"
    | "education"
    | "skill"
    | "l&c"
    | "portfolio" = null;

  constructor() {
    makeAutoObservable(this);
  }

  setActiveMenu = (
    value: null | "experience" | "education" | "skill" | "l&c" | "portfolio"
  ) => {
    this.activeMenuCode = value;
  };
}

const activeNavigationBarStore = new ActiveNavigationBarStore();

export default activeNavigationBarStore;
