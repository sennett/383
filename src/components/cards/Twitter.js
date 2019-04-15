import React from 'react';
import GenericCard from "./GenericCard";
import './Twitter.css';
import { autoLink, htmlEscape } from 'twitter-text'

const Twitter = ({item}) => {
    const tagContent = "🐦";
    let tweet = autoLink(htmlEscape(item.tweet), {targetBlank: true});
    // tweet =
    return (
        <GenericCard tagContent={tagContent}>
            <div className="twitter-card__author">{item.user.username}</div>
            <div className="twitter-card__tweet" dangerouslySetInnerHTML={{ __html: tweet}} />
        </GenericCard>
    );
};

export default Twitter