/**
 * Created by LG on 2017-07-15.
 */
import React, { Component, } from 'react';

import {
    AppRegistry,
    ListView,
    Text,
    StyleSheet,
    View,
    Image,
} from 'react-native';

import SharePageHoriListViewItem from './SharePageHoriListViewItem';

const API_KEY = '73b19491b83909c7e07016f4bb4644f9:2:60667290';
const QUERY_TYPE = 'hardcover-fiction';
const API_STEM = 'http://api.nytimes.com/svc/books/v3/lists';
const ENDPOINT = `${API_STEM}/${QUERY_TYPE}?response-format=json&api-key=${API_KEY}`;

class SharePageHoriListView extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
        });
        this.state = {
            dataSource: ds.cloneWithRows([]),
        }
    }

    componentDidMount() {
        this._refreshData();
    }

    _renderRow(rowData) {
        return <SharePageHoriListViewItem shareImageURL={rowData.book_image}
                         subject={rowData.title}
                         nickname={rowData.author}/>;
    }

    _refreshData() {
        fetch(ENDPOINT)
            .then((response) => response.json())
            .then((rjson) => {
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(rjson.results.books),
                })
            })
            .then(() => {
                // for testing
                console.log('datasource = ');
                console.log(this.state.dataSource.getRowCount());
            });

    }

    render() {
        return (
            <ListView
                horizontal={true}
                style={styles.list}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                enableEmptySections={true}
            />
        );
    }


}

const styles = StyleSheet.create({
    blockContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingTop: 24,
    },
    list: {
        flex: 1,
        flexDirection: 'row'
    },
    listContent: {
        flex: 1,
        flexDirection: 'column',

    },
    row: {
        flex: 1,
        fontSize: 14,
        padding: 42,
        borderWidth: 1,
        borderColor: '#DDDDDD',
    },
    sectionDivider: {
        padding: 8,
        backgroundColor: '#EEEEEE',
        alignItems: 'center',
    },
    headingText: {
        flex: 1,
        fontSize: 24,
        alignSelf: 'center',
    }
});

export default SharePageHoriListView;

