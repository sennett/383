import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions/visibilityFilters'
import './Filter.css'

const Filter = function () {
    return (
        <div className="filter">
            <FilterLink type={VisibilityFilters.SHOW_ALL}>All</FilterLink>
            <FilterLink type={VisibilityFilters.SHOW_AFF}>AFF</FilterLink>
            <FilterLink type={VisibilityFilters.SHOW_TWEETS}>Tweets</FilterLink>
            <FilterLink type={VisibilityFilters.SHOW_INSTA_STORIES}>Insta Stories</FilterLink>
        </div>
    );
};

export default Filter