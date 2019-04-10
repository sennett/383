import React from 'react';
import GenericCard from './GenericCard'
import './Manual.css'

const Manual = ({item}) => {
    const tagContent = <div className="manual-card__tag-content">AFF</div>;
    item.image_url = "https://placekitten.com/g/200/300";
    return (
        <GenericCard tagContent={tagContent} tagClass="manual-card__tag-content">
            <div>
                <a href={item.link} target="_blank">
                    <img alt={item.link_text} className="manual-card__image" src={item.image_url} />
                </a>
            </div>
            <p>{item.text}</p>
            <p><a href={item.link} target="_blank">{item.link_text}</a></p>
        </GenericCard>
    );
};

export default Manual