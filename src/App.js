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
                {data.items.map((item, index) => {
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
