import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions/visibilityFilters'
import './Filter.css'

class Filter extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            filterOpen: false
        };
    }

    toggleFilterList () {
        this.setState({
            filterOpen: !this.state.filterOpen
        })
    }

    closeFilterList () {
        this.setState({
            filterOpen: false
        })
    }

    render () {
        const filterText = this.state.filterOpen ? 'Filter ↑' : 'Filter ↓';
        const filterListClass = this.state.filterOpen ? 'filter--mobile__filter-links--open' : 'filter--mobile__filter-links--closed';
        return (
            <div className="filter">
                <div className="filter__mobile-toggle" onClick={this.toggleFilterList.bind(this)}>{filterText}</div>
                <div className={`filter__filters  ${filterListClass}`}>
                    <FilterLink type={VisibilityFilters.SHOW_ALL} onClick={this.closeFilterList.bind(this)}>All</FilterLink>
                    <FilterLink type={VisibilityFilters.SHOW_AFF} onClick={this.closeFilterList.bind(this)}>AFF</FilterLink>
                    <FilterLink type={VisibilityFilters.SHOW_TWEETS} onClick={this.closeFilterList.bind(this)}>Twitter</FilterLink>
                    <FilterLink type={VisibilityFilters.SHOW_INSTA_STORIES} onClick={this.closeFilterList.bind(this)}>Instagram</FilterLink>
                </div>
            </div>
        );
    }
}

export default Filter