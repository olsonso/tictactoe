import cells from "./cells";
import player from './player';
import { combineReducers } from "redux";

const myApp= combineReducers({cells, player});

export default myApp;
