/* @flow */

import React, { Component, } from 'react';

import {
    FlatList,
    Text,
    StyleSheet,
    View,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

class DoneMissionPage extends Component {
    static propTypes = {
      data: PropTypes.array,
      onRowPress: PropTypes.func
    }

    _renderTypeIcon(type) {
      switch (type) {
        case 'drawing': return (
          <Icon
            name='md-color-palette'
            size={20}
            style={styles.typeIcon}/>
          )
        case 'capturing': return (
          <Icon
            name='md-photos'
            size={20}
            style={styles.typeIcon}/>
          );
        case 'writing': return (
          <Icon
            name='md-create'
            size={20}
            style={styles.typeIcon}/>
          );
      }
    }

    _renderRow(rowData) {
      return (
        <TouchableOpacity
            onPress={() => this.props.onRowPress(rowData.missionPK)}>
          <View style={styles.item}>
            {this._renderTypeIcon(rowData.type)}
            <View style={styles.leadTextWrapper}>
              <Text style={styles.leadText}>{rowData.leadText}</Text>
            </View>
            <Icon
              name='ios-arrow-forward'
              size={25}
              style={{color: '#777777'}}
              />
          </View>
        </TouchableOpacity>

      )
    }

    _renderSeparator() {
      return (
        <View style={{height:1, flexDirection: 'row'}}>
          <View style={{
              height: 1,
              width: 12,
              backgroundColor: '#ffffff'
            }}/>
          <View style={{
              height: 1,
              width: '100%',
              backgroundColor: '#bbbbbb'
            }}/>
        </View>

      );
    }

    render() {
        return (
            <View style={{backgroundColor: '#f1f1f1', flex: 1}}>
              <FlatList
                style={styles.list}
                data={this.props.data}
                renderItem={({item: rowData}) => this._renderRow(rowData)}
                ItemSeparatorComponent={this._renderSeparator}/>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    list: {
      flex: 1,
      flexDirection: 'column',
    },
    item: {
      flex: 1,
      flexDirection: 'row',
      height: 45,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 15,
      backgroundColor: '#ffffff'
    },
    typeIcon: {
      color: '#777777',
    },
    leadTextWrapper: {
      width: Dimensions.get('window').width - 75
    },
    leadText: {
      fontSize: 15,
      color: '#333333',
    }
});

export default DoneMissionPage;
