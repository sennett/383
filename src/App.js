import React, {Component} from 'react';
import './App.css';
import data from './data.js';
import Manual from './cards/Manual';
import Instagram from './cards/Instagram';
import Twitter from './cards/Twitter';
import Masonry from 'react-masonry-component';



const cardComponents = {
    Manual: Manual,
    Twitter: Twitter,
    Instagram: Instagram
};


class App extends Component {
    render() {
        return (
            <Masonry className="card-layout">
                {data.items.filter((item) => item.service_name === 'Manual').map((item, index) => {
                    item.item_data.image_url = "https://placekitten.com/g/200/300";
                    const TagName = cardComponents[item.service_name];
                    return (
                        <div className="card-layout__card"  key={index}>
                            <TagName item={item.item_data}/>
                        </div>
                    )
                })}
            </Masonry>
        );
    }
}

export default App;

