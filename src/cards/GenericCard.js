import React from 'react'
import './GenericCard.css'

const GenericCard = ({tagContent, tagClass, children}) => {
    return (
        <div className="generic-card">
            <div className={`generic-card__tag  ${tagClass}`}>
                <div className="generic-card__tag-content">
                    {tagContent}
                </div>
            </div>
            {children}
        </div>
    );
};

export default GenericCard;