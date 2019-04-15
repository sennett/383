import { connect } from 'react-redux';
import React, { Component } from 'react';
import SocialList from '../components/SocialList';
import {getVisibleSocialList} from "../reducers/rootReducer";
import { fetchPosts } from "../actions/socialPosts";

const mapStateToProps = (state) => ({
    socialList: getVisibleSocialList(state)
});

const mapDispatchToProps = (dispatch) => ({
    fetchPosts: dispatch(fetchPosts)
});

class VisibleSocialList extends Component {
    onComponentWillMount () {
        this.props.fetchPosts()
    }

    render () {
        return (
            <SocialList socialList={this.props.socialList} />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VisibleSocialList)