import React, { Component } from 'react';
import {
    View,
    Text,
    ActivityIndicator,
    ScrollView,
  RefreshControl,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchChars } from '../reducers/charActions';
import CharCards from '../components/CharCards'

class HomeScreen extends Component {

    componentDidMount() {

        this.props.fetchChars()
        
    }

    render() {
        const { chars, loading } = this.props.chars
        // console.log(this.props)
        if (loading) {
            return(
                <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator size={'large'} /> 
                </View>
            )
        } else {
            return(
                <CharCards />
            );
        }

    }

}

function mapStateToProps(state) {
    return {
        chars: state.chars
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({ fetchChars }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)