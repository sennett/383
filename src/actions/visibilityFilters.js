export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_AFF: 'SHOW_AFF',
    SHOW_TWEETS: 'SHOW_TWEETS',
    SHOW_INSTA_STORIES: 'SHOW_INSTA_STORIES'
};