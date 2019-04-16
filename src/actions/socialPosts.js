import { getSocialListCount } from '../reducers/socialListReducer'

const API_PAGE_SIZE = 20; // API limit
const JUICER_POSTS_ENDPOINT = "https://private-cc77e-aff.apiary-mock.com/posts";

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * max) + min;
};

const applyKitten = (socialPost) => {

    const width = randomNumber(200, 400);
    const height = randomNumber(200, 400);
    const kittenUrl = `https://placekitten.com/${width}/${height}`;

    if (socialPost.service_name === 'Manual') {
        socialPost.item_data.image_url = kittenUrl;
    }

    if (socialPost.service_name === 'Instagram') {
        socialPost.item_data.image.medium = kittenUrl;
    }

    return socialPost
};

export const fetchPosts = (dispatch, getState) => {
    dispatch(requestPosts);
    const offset = getSocialListCount(getState());
    return fetch(`${JUICER_POSTS_ENDPOINT}?limit=${API_PAGE_SIZE}&offset=${offset}`)
        .then(response => response.json())
        .then(responseJson => dispatch(receivePosts(responseJson.items.map(applyKitten))))
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