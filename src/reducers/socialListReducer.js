export const socialList = (state = [], action) => {

    if (action.type === 'RECEIVE_POSTS') {
        return [
            ...state,
            ...action.posts
        ]
    }

    return state;
};

export const getSocialList = (state) => state.socialList;

export const getSocialListCount = (state) => state.socialList.length;