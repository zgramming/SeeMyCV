import { makeAutoObservable } from "mobx";
import { MutableRefObject } from "react";

type RefsParams = {
  code:
    | null
    | "profile"
    | "experience"
    | "education"
    | "skill"
    | "l&c"
    | "portfolio";
  ref: MutableRefObject<null | HTMLElement>;
};

export class NavigationScrollToComponent {
  refs: RefsParams[] | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  scrollTo = (codeMenu: string) => {
    this.refs
      ?.find((val) => val.code === codeMenu)
      ?.ref.current!.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  setRefs = (params: RefsParams[]) => {
    this.refs = [];
    for (const param of params) {
      this.refs = [...this.refs, param];
    }
  };
}

const navigationScrollToComponent = new NavigationScrollToComponent();

export default navigationScrollToComponent;
