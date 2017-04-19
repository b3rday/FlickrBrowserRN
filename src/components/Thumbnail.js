import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
} from 'react-native';

class Thumbnail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pic: {
                uri:
                "https://farm"
                + this.props.pic.farm
                + ".staticflickr.com/"
                + this.props.pic.server
                + "/"
                + this.props.pic.id
                + "_" + this.props.pic.secret
                + "_q.jpg"
            }
        };
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <Image source={this.state.pic} style={{ width: 150, height: 150 }} />
                <Text>{this.props.pic.title}</Text>
            </View>
        );
    }
}

module.exports = Thumbnail;