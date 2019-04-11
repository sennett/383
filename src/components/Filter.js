import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions/visibilityFilters'

const Filter = function () {
    return (
        <div>
            <FilterLink type={VisibilityFilters.SHOW_ALL}>All</FilterLink>
            <FilterLink type={VisibilityFilters.SHOW_AFF}>AFF</FilterLink>
            <FilterLink type={VisibilityFilters.TWEETS}>Tweets</FilterLink>
            <FilterLink type={VisibilityFilters.INSTA_STORIES}>Insta Stories</FilterLink>
        </div>
    );
};

export default Filter