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
    const className = props.active ? 'active' : 'inactive';
    return (
        <a onClick={props.onClick} className={className}>{props.children}</a>
    );
};


export default connect(mapStateToProps, mapDispatchToProps)(FilterLink)