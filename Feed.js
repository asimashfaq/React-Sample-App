/**
 * Created by asimashfaq on 10/20/16.
 */
'use strict';

import React, { Component } from 'react';
import {
    // AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView
} from 'react-native';

export class Feed extends Component{
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 != r2
        })
        this.state= {
         dataSource: ds.cloneWithRows(['A','B','C'])
        }
    }

    renderRow(rowData){
        return <Text style={{
        color:'#333'
        }}>{rowData} </Text>

    }

    render()  {
        return (
            <View style={{
            flex:1,
            justifyContent: 'flex-start'

            }}>
            <ListView dataSource={this.state.dataSource}
                      renderRow={this.renderRow.bind(this)} >

            </ListView>

            </View>

        );
    }

}
module.exports = Feed;

