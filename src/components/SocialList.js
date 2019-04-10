import Masonry from "react-masonry-component";
import React from "react";

import Manual from './cards/Manual';
import Instagram from './cards/Instagram';
import Twitter from './cards/Twitter';

const cardComponents = {
    Manual: Manual,
    Twitter: Twitter,
    Instagram: Instagram
};

const SocialList = ({items}) => {
    return (
    <Masonry className="card-layout">
        {items.map((item, index) => {
            const TagName = cardComponents[item.service_name];
            return (
                <div className="card-layout__card" key={index}>
                    <TagName item={item.item_data}/>
                </div>
            )
        })}
    </Masonry>
    )
};

export default SocialList