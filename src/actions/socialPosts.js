import { getSocialListCount } from '../reducers/socialListReducer'

const API_PAGE_SIZE = 20; // API limit
const JUICER_POSTS_ENDPOINT = "http://private-cc77e-aff.apiary-mock.com/posts";


export const fetchPosts = (dispatch, getState) => {
    dispatch(requestPosts);
    const offset = getSocialListCount(getState());
    return fetch(`${JUICER_POSTS_ENDPOINT}?limit=${API_PAGE_SIZE}&offset=${offset}`)
        .then(response => response.json())
        .then(responseJson => dispatch(receivePosts(responseJson.items)))
        .catch(() => dispatch(networkError))
};

const requestPosts = {
    type: 'REQUEST_POSTS'
};

const receivePosts = (posts) => ({
    type: 'RECEIVE_POSTS',
    posts
});

const networkError = {
    type: 'RECEIVE_POSTS_NETWORK_ERROR'
};