import React from 'react'
import './GenericCard.css'

const GenericCard = ({type, children}) => (
    <div className="generic-card">
        {children}
    </div>
);

export default GenericCard;