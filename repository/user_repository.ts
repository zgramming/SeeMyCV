import axios from "axios";
import { makeAutoObservable } from "mobx";
import { env } from "process";
import { Users } from "../interface/main_interface";

class UserRepository {
  item?: Users;
  isLoading: boolean = false;
  error?: string;

  constructor() {
    makeAutoObservable(this);
  }

  init = async (username: string) => {
    try {
      this.setIsLoading(true);
      const response = await axios.get(`${env.BASEAPIURL}/user/${username}`);
      const {
        success,
        message,
        data,
      }: { success: boolean; message: string; data: Users } = response.data;
      this.setItem(data);
    } catch (error: any) {
      this.setError(error);
    } finally {
      this.setIsLoading(false);
    }
  };

  setItem = (user?: Users) => {
    this.item = user;
  };

  setIsLoading = (value: boolean) => {
    this.isLoading = value;
  };

  setError = (error?: string) => {
    this.error = error;
  };
}

const userRepository = new UserRepository();

export default userRepository;
