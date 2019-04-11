import { connect } from 'react-redux';
import SocialList from '../components/SocialList';
import {getVisibleSocialList} from "../reducers/rootReducer";

const mapStateToProps = (state) => ({
    socialList: getVisibleSocialList(state)
});

export default connect(mapStateToProps)(SocialList)