import React, {
  Component,
}from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import {Colors, Sizes} from '../../DefaultStyles';


const styles= StyleSheet.create({
    container:{
        flex:1,
    },
    shareItem:{
        flex:1,
        flexDirection:'column',
        borderBottomColor:'#FFFFFF',
        borderBottomWidth:2,
        paddingTop:20,
    },
    shareImage:{
        flex:1,
        paddingBottom:10,
        alignSelf:'center',
        resizeMode: 'contain',
    },
    quotemark: {
        flex: 1,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    shareKeyword: {
        flex: 6,
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.defaultTextColor,
        alignSelf: 'center',
        textAlign: 'center',
        paddingVertical: 20,
    },
    shareKeywordContainer: {
        width: Dimensions.get('window').width * (85/100),
        height: 60,
        alignSelf: 'center',
        flexDirection: 'row',
    },
    profile:{
        height:50,
        width:50,
        resizeMode:'contain',
        alignSelf:'center'
    },
    button_showother:{
        flex: 1,
        height:50,
        width:200,
        resizeMode:'contain',
        alignSelf:'center',
        marginTop:25,
        marginBottom:20,
    }
});

const CONAINTER_SIDE_MARGIN = 20;

class SharePageListViewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {source: {uri: this.props.imageURL}};
  }
  propTypes: {
    imageURL: React.PropTypes.string.isRequired,
    keyword: React.PropTypes.string.isRequired,
    missionPK:React.PropTypes.string.isRequired,
    onShareImagePressed: React.PropTypes.func.isRequired,
  };

    componentWillMount() {
      Image.getSize(this.props.imageURL, (width, height) => {
        if (this.props.width && !this.props.height) {
          this.setState({width: this.props.width, height: height * (this.props.width / width)});
        } else if (!this.props.width && this.props.height) {
          this.setState({width: width * (this.props.height / height), height: this.props.height});
        } else {
          this.setState({width: width, height: height});
        }
      });
    }

    render(){

      console.log(this.props);

        return(
            <View style={styles.container}>
              <View style={styles.shareItem}>
                <View style={styles.shareKeywordContainer}>
                  <Image
                    style={styles.quotemark}
                    source={require('../../icons/user.png')}/>
                  <Text style={styles.shareKeyword}>
                    {"우주외계인"}
                  </Text>
                  <Image
                    style={styles.quotemark}
                    source={require('../../icons/user.png')}/>
                </View>
                <TouchableHighlight
                  underlayColor={'#ffffff'}
                  onPress={() => this.props.onShareImagePressed()}>
                  <Image
                    style={[styles.shareImage, {
                      width: Dimensions.get('window').width * (85/100),
                      height: Dimensions.get('window').width * (85/100) * (this.state.height/this.state.width)}]}
                    source={this.state.source}/>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('DetailSharePage', {...this.props.navigation.state.params})}
                  underlayColor={'#ffffff'}>
                     <Image
                         style={styles.button_showother}
                         source={require('../../icons/share_anotheritem.png')}/>
                </TouchableHighlight>
              </View>
            </View>
        );
    }
}

export default SharePageListViewItem;