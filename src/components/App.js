import React, {Component} from 'react';
import './App.css';

import Filter from './Filter'
import VisibleSocialList from '../containers/VisibleSocialList'
import LoadMore from './LoadMore'

class App extends Component {
    render() {
        return (
            <div className="page-layout">
                <Filter />
                <VisibleSocialList />
                <LoadMore />
            </div>
        );
    }
}

export default App;
