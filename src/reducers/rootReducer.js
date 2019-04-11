import { combineReducers } from "redux";
import { VisibilityFilters } from "../actions/visibilityFilters";


function filter (state = VisibilityFilters.SHOW_ALL, action) {
    if (action.type === 'SET_VISIBILITY_FILTER') {
        return action.filter;
    }
    return state
}

const socialList = (state = []) => state;

const loading = (state = false) => state;

export default combineReducers({
    filter,
    socialList,
    loading
})