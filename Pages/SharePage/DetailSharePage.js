import React from 'react';
import {StyleSheet, View,} from 'react-native';
import UpperLinearGradient from "../UpperLinearGradient";
import SharePageHoriListView from "./SharePageHoriListView";
import LowerLinearGradient from "../LowerLinearGradient";
import BottomBar from "../BottomBar"
import {Colors, Sizes} from "../../DefaultStyles";

export default class DetailSharePage extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <UpperLinearGradient/>
          <View style={styles.listViewContainer}>
            <SharePageHoriListView
                navigation={this.props.navigation}/>
          </View>
          <LowerLinearGradient
              marginBottom={Sizes.bottomBarHeight}/>
          <BottomBar/>
        </View>
    );
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
