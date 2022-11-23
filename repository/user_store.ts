import { makeAutoObservable } from "mobx";
import { Users } from "../interface/main_interface";

export class UserStore {
  item?: Users;

  constructor() {
    makeAutoObservable(this);
  }

  setItem = (user?: Users) => {
    this.item = user;
  };
}

const userStore = new UserStore();

export default userStore;
