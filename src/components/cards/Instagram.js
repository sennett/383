import GenericCard from "./GenericCard";
import React from "react";
import './Instagram.css';

import { autoLinkHashtags } from 'twitter-text'

const Instagram = ({item}) => {
    const tagContent = "📷";
    const caption = autoLinkHashtags(item.caption, {
        hashtagUrlBase: 'https://www.instagram.com/explore/tags/',
        targetBlank: true
    });
    return (
        <GenericCard tagContent={tagContent}>
            <img alt={item.caption} className="instagram-card__image" src={item.image.medium}/>
            <p className="instagram-card__username">{item.user.username}</p>
            <p className="instagram-card__caption" dangerouslySetInnerHTML={{ __html: caption}} />
        </GenericCard>
    );
};

export default Instagram