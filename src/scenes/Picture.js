'use strict';

import React, { Component } from 'react';

import {
    Image,
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';

class Picture extends Component {
    static navigationOptions = {
        title: 'FlickrBrowserRN',
    };

    constructor(props) {
        super(props);
        this.state = {
            pic: {
                uri:
                "https://farm"
                + this.props.navigation.state.params.pic.farm
                + ".staticflickr.com/"
                + this.props.navigation.state.params.pic.server
                + "/"
                + this.props.navigation.state.params.pic.id
                + "_" + this.props.navigation.state.params.pic.secret
                + "_b.jpg"
            }
        };
    }

    render() {
        return (
            <Image
                source={this.state.pic}
                resizeMode='contain'
                style={{
                    width: null,
                    height: null,
                    flex: 1,
                }} />
        );
    }
}

module.exports = Picture;