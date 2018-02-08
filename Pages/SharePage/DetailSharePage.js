/* @flow */

import React from 'react';
import {StyleSheet, View,} from 'react-native';
import SharePageHoriListView from "./SharePageHoriListView";
import {Colors, Sizes} from "../../DefaultStyles";
import PropTypes from 'prop-types'
import TitleBar from '../../TitleBar'
import UpperLinearGradient from '../UpperLinearGradient'
import APIConfig, {ResponseCode} from '../../APIConfig'

export default class DetailSharePage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      arts: []
    }
  }
  static propTypes = {
    firstArt: PropTypes.object,
    missionPK: PropTypes.number
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.listViewContainer}>
            <SharePageHoriListView
              onLikeBtnPress={(artPK, like) => console.log('artPK: ' + artPK + ' like: ' + like)}
              onImagePress={(uri) => console.log('uri ' + uri)}
              arts={this.state.arts}/>
          </View>
        </View>
    );
  }

  componentDidMount() {
    const TAG = '[GET_ARTS_OF_MISSION]'
    console.debug(`${TAG} Fetching start; missionPK = ${this.props.missionPK}`)
    fetch(`${APIConfig.getArtsOfMission}${this.props.missionPK}`, {
      method: 'GET'
    }).then(res => {
      if(res.status === ResponseCode.getOk) {
        res.json().then(json => {
            console.debug(`${TAG} Success`)
            console.debug(json)
            this.setState({
              arts: json
            })
        }).catch(err => {
            console.debug(`${TAG} Failure; json parsing`)
        })
      } else {
        console.debug(`${TAG} Failure; response code = ${res.status}`)
      }
    })
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.defaultPageBgColor,
  },
  listViewContainer: {
    flex: 1,
  },
});
