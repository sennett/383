import React from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/visibilityFilters'
import { getFilter } from '../reducers/filterReducer'

const mapStateToProps = (state, ownProps) => ({
    active: getFilter(state) === ownProps.type
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.type))
});

const FilterLink = (props) => {
    const className = props.active ? 'filter__filter-link--active' : 'filter__filter-link--inactive';
    return (
        <a onClick={props.onClick} className={`filter__filter-link  ${className}`}>{props.children}</a>
    );
};


export default connect(mapStateToProps, mapDispatchToProps)(FilterLink)