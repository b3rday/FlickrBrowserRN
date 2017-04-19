'use strict';

import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight,
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';

const Thumbnail = require('../components/Thumbnail');

class Main extends Component {
    static navigationOptions = {
        title: 'FlickrBrowserRN',
    };

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([])
        };

        fetch('https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=0c731f4470260b5ff4ccc3d519d07697&format=json&nojsoncallback=1&per_page=500')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ dataSource: ds.cloneWithRows(responseJson.photos.photo) });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ListView
                enableEmptySections={true}
                dataSource={this.state.dataSource}
                renderRow={(rowData) =>
                    <TouchableHighlight onPress={() => navigate('Picture', { pic: rowData })} >
                        <View>
                            <Thumbnail pic={rowData} />
                        </View>
                    </TouchableHighlight>
                }
            />
        );
    }
}

module.exports = Main;