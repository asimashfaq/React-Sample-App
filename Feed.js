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
    ListView,
ActivityIndicator
} from 'react-native';

export class Feed extends Component{
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 != r2
        })
        this.state= {
         dataSource: ds.cloneWithRows(['A','B','C']),
            showProgress:true
        }
    }

    renderRow(rowData){
        return <View style={{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        borderColor: '#D7D7D7',
        borderBottomWidth:1,

        padding:20,

        }}>
            <Text style={{
            height:36,
            width:36,
            borderRadius:18,
            backgroundColor: '#48bbec',
            color:'#FFF',
            fontSize:18,
            paddingTop:6,
            paddingLeft:5,

        }}>{rowData.title.substring(0,2)}

            </Text>
            <Text style={{
                        width:300,
                        height:36,
                        paddingLeft:10
                    }}>

                    <Text > {rowData.title}</Text>

            </Text>
             </View>

    }
    componentDidMount(){
        this.fetchFeed();
    }

    render()  {

        if(this.state.showProgress){
            return (
                <View style={{
                flex:1,
                justifyContent:'center'
                }} >
                    <ActivityIndicator
                    size="large"
                    animating={true}
                    >

                    </ActivityIndicator>

                </View>
           )
        }

        return (
            <View style={{
            flex:1,
            justifyContent: 'flex-start'

            }}>
            <ListView style={{marginTop:20}}
                      dataSource={this.state.dataSource}
                      renderRow={this.renderRow.bind(this)} >

            </ListView>

                       </View>

        );
    }
    fetchFeed (){
        var url = 'https://newscloud.io/posts?where={%22description%22:{%22contains%22:%22China%22}}&sort=when+DESC&limit=5&skip=0'
        fetch(url, {

        }).then((response)=>response.json())
        .then((responseData)=> {

            console.log(responseData);

            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responseData),
                showProgress: false
            });
            console.log(this.state.dataSource);
        })

    }

}
module.exports = Feed;

