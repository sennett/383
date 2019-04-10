import GenericCard from "./GenericCard";
import React from "react";
import './Instagram.css'

const Instagram = ({item}) => {
    const tagContent = "📷";
    item.image.medium = "https://placekitten.com/g/200/400";
    return (
        <GenericCard tagContent={tagContent}>
            <img alt={item.caption} className="instagram-card__image" src={item.image.medium}/>
            <p className="instagram-card__username">{item.user.username}</p>
            <p className="instagram-card__caption">{item.caption}</p>
        </GenericCard>
    );
};

export default Instagram