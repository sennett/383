export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_AFF: 'SHOW_AFF',
    TWEETS: 'TWEETS',
    INSTA_STORIES: 'INSTA_STORIES'
};