import { createStore, combineReducers} from "redux";
import counterReducer from "./reducer/counterReducer";
import todoReducer from "./reducer/todoReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer
})

const store = createStore(rootReducer);

export default store;