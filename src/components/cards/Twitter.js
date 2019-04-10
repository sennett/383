import React from 'react';
import GenericCard from "./GenericCard";
import './Twitter.css';

const Twitter = ({item}) => {
    const tagContent = "🐦";
    return (
        <GenericCard tagContent={tagContent}>
            <div className="twitter-card__author">{item.user.username}</div>
            <div className="twitter-card__tweet">{item.tweet}</div>
        </GenericCard>
    );
};

export default Twitter