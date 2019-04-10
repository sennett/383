import { connect } from 'react-redux';
import SocialList from '../components/SocialList';

const mapStateToProps = state => ({
    socialList: state.socialList
});

export default connect(mapStateToProps)(SocialList)