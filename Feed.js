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
ActivityIndicator,
    TouchableHighlight
} from 'react-native';

export class Feed extends Component{
    constructor(props){
        super(props);

        this.state= {
            articles: [],
            showProgress:true,
            count: 20,
            start: 0
        }
        this.dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });

    }


    _pressRow(rowID: number) {
   console.log(rowID);
}
 highlightRow (sectionID: number, rowID: number){
     console.log(" i clicked");
}




    renderRow = (rowData, sectionId, rowId) =>{

        if (rowId % 2) {
            return   <TouchableHighlight onPress={() => {
          this._pressRow(rowId);
          this.highlightRow(sectionId, rowId);
        }}><View style={{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: '#efefef',
        padding:20,

        }}>
                <Text style={{
            height:36,
            width:36,

            backgroundColor: '#48bbec',
            color:'#FFF',
            fontSize:18,
            paddingTop:6,
            paddingLeft:5,

        }}>
                    {rowData.title.substring(0,2)}

                </Text>
                <Text style={{
                        width:300,
                       maxHeight:33,
                        paddingLeft:10,

                    }}>

                    {rowData.title}

                </Text>
            </View></TouchableHighlight>
        } else {
            return   <TouchableHighlight onPress={() => {
          this._pressRow(rowId);
          this.highlightRow(sectionId, rowId);
        }}><View style={{
                flex:1,
                flexDirection:'row',
                alignItems:'center',
                //borderColor: '#D7D7D7',
                //borderBottomWidth:1,

                padding:20,

                }}>
                <Text style={{
            height:36,
            width:36,

            backgroundColor: '#48bbec',
            color:'#FFF',
            fontSize:18,
            paddingTop:6,
            paddingLeft:5,

        }}>
                    {rowData.title.substring(0,2)}

                </Text>
                <Text style={{
                        width:300,
                        height:33,
                        paddingLeft:10
                    }}>

                   {rowData.title}

                </Text>
            </View></TouchableHighlight>
        }


    }


    componentDidMount(){
        this.fetchFeed();
    }

    requestURL(
        url = "https://newscloud.io/posts?where={%22description%22:{%22contains%22:%22China%22}}&sort=when+DESC&",
        count = this.state.count,
        start = this.state.start
    ) {
        return (
            `${url}limit=${count}&skip=${start}`
        );
    }

    onEndReached() {



            fetch(this.requestURL(), {

            }).then((response)=>response.json())
                .then((responseData)=> {

                    let newStart = this.state.start + this.state.count;

                    this.setState({
                        articles: [...this.state.articles,...responseData],
                        showProgress: false,
                        start :newStart
                    });
                    console.log(this.state.dataSource);
                })

    }

    render(){

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
                      dataSource={this.dataSource.cloneWithRows(this.state.articles)}
                      renderRow={this.renderRow.bind(this)}
                      renderSeparator={this._renderSeparator}
                      onEndReached={this.onEndReached.bind(this)}
                      onEndReachedThreshold={500}

            >
            </ListView>

                       </View>

        );
    }

    _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
    return (
        <View
            key={`${sectionID}-${rowID}`}
            style={{
          height: adjacentRowHighlighted ? 4 : 1,
          backgroundColor: adjacentRowHighlighted ? '#ff0000' : '#CCCCCC',
        }}
        />
    );
}

    fetchFeed (){
        fetch(this.requestURL(), {

        }).then((response)=>response.json())
        .then((responseData)=> {

            console.log(responseData);
            let newStart = this.state.start + this.state.count;
            this.setState({
                articles:responseData,
                showProgress: false,
                start :newStart

            });
            console.log(this.state.dataSource);
        })

    }

}
module.exports = Feed;

