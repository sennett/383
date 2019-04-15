import React from 'react'
import { connect } from 'react-redux'
import { getIsLoading } from '../reducers/loadingReducer'
import { fetchPosts } from '../actions/socialPosts'

import './LoadMore.css'

const mapStateToProps = (state) => ({
    isLoading: getIsLoading(state)
});

const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(fetchPosts)
});

const LoadMore = ({onClick, isLoading}) => (
    <button className="load-more" onClick={onClick}>
        {isLoading ? 'loading...' : 'load more'}
    </button>
);

export default connect(mapStateToProps, mapDispatchToProps)(LoadMore)
