_renderRow(rowData: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
    var rowHash = Math.abs(hashCode(rowData));
    
    return (
        <TouchableHighlight onPress={() => {
          this._pressRow(rowID);
          highlightRow(sectionID, rowID);
        }}>
            
                <View style={{
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
        </TouchableHighlight>
);
}