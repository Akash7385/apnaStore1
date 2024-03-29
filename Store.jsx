import { createStore } from "redux";
import rootred from "./redux/reducers/Main";

const Store = createStore(rootred);

export default Store;
