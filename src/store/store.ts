import Vue from "vue";
import Vuex from "vuex";
import { ICounterState } from "@/store/modules/counter";
Vue.use(Vuex);

export interface State {
  counter: ICounterState;
}
export default new Vuex.Store<State>({});
