import React, {Component} from 'react';
import {StyleSheet, View, } from 'react-native';

import SharePageListView from './SharePageListView';
import {Colors, Sizes} from "../../DefaultStyles";
import UpperLinearGradient from "../UpperLinearGradient";
import LowerLinearGradient from "../LowerLinearGradient";
import Sharepage_mission from "./Sharepage_mission";

class SharePage extends Component {

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.listViewContainer}>
          <UpperLinearGradient/>
          <SharePageListView
            navigation={this.props.navigation}/>

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
  listViewContainer: {
    flex: 1,
  }
});

export default SharePage;