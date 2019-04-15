import {combineReducers} from "redux";
import {filter, getFilter} from "./filterReducer";
import {getSocialList, socialList} from "./socialListReducer";
import {VisibilityFilters} from "../actions/visibilityFilters";
import { loading } from "./loadingReducer";

export default combineReducers({
    filter,
    socialList,
    loading
});

export const getVisibleSocialList = (state) => {
    const selectedFilter = getFilter(state);

    if (selectedFilter === VisibilityFilters.SHOW_ALL) {
        return getSocialList(state)
    }

    let required_service_name;

    if (selectedFilter === VisibilityFilters.SHOW_AFF) {
        required_service_name = 'Manual'
    }

    if (selectedFilter === VisibilityFilters.SHOW_TWEETS) {
        required_service_name = 'Twitter'
    }

    if (selectedFilter === VisibilityFilters.SHOW_INSTA_STORIES) {
        required_service_name = 'Instagram'
    }

    return getSocialList(state).filter((post) => post.service_name === required_service_name)
};