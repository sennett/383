export const loading = (state = false, action) => {
    if (action.type === 'REQUEST_POSTS') {
        return true;
    }

    if (action.type === 'RECEIVE_POSTS' || action.type === 'RECEIVE_POSTS_NETWORK_ERROR') {
        return false;
    }

    return state;
};


export const getIsLoading = state => state.loading;