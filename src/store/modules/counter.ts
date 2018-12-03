import { Mutation, MutationAction, Action, VuexModule, getModule, Module } from "vuex-module-decorators";
import store from "@/store/store";

export interface ICounterState {
  incrementCounter: number;
  decrementCounter: number;
}
@Module({ dynamic: true, store, name: "counter", namespaced: true })
class Counter extends VuexModule implements ICounterState {
  // state
  incrementCounter: number = 0;
  decrementCounter: number = 1000;
  // mutation
  @Mutation // counter
  public SET_INCREMENT_COUNTER(num: number) {
    this.incrementCounter = num;
  }
  @Mutation
  public SET_DECREMENT_COUNTER(num: number) {
    this.decrementCounter = num;
  }

  @Action({})
  public increment100() {
    this.SET_INCREMENT_COUNTER(this.incrementCounter + 100);
  }
  @Action({})
  public decrement100() {
    this.SET_DECREMENT_COUNTER(this.decrementCounter - 100);
  }
  @MutationAction({mutate: ["incrementCounter", "decrementCounter"]})
  async resetCounter() {
    return {
      incrementCounter: 0,
      decrementCounter: 1000
    };
  }
}

export const counterModule = getModule(Counter);
