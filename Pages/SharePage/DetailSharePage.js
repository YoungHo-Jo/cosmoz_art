import React from 'react';
import {StyleSheet, View,} from 'react-native';
import UpperLinearGradient from "../UpperLinearGradient";
import SharePageHoriListView from "./SharePageHoriListView";
import LowerLinearGradient from "../LowerLinearGradient";
import {Colors, Sizes} from "../../DefaultStyles";

export default class DetailSharePage extends React.Component {

  render() {
    return (
        <View style={styles.container}>

          <View style={styles.missionTextContainer}>
          </View>
          <View style={styles.listViewContainer}>
            <UpperLinearGradient/>
            <SharePageHoriListView
                navigation={this.props.navigation}/>

          </View>
          <View style={styles.likeButtonContainer}>
          </View>
          <LowerLinearGradient/>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.defaultPageBgColor,
    marginBottom: Sizes.bottomBarHeight
  },
  missionTextContainer: {
    flex: 1,
  },
  listViewContainer: {
    flex: 8,
  },
  likeButtonContainer: {
    flex: 1,
  },

});
