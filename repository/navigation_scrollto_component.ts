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
      ?.ref.current!.scrollIntoView({ behavior: "smooth" });
  };

  setRefs = (params: RefsParams) => {
    const isExists = this.refs?.find((val) => val.code === params.code);
    if (isExists) return;
    this.refs = [...(this.refs ?? []), params];
    console.log({ refs: this.refs });
  };
}

const navigationScrollToComponent = new NavigationScrollToComponent();

export default navigationScrollToComponent;
