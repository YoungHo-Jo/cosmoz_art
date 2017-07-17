/**
 * Created by LG on 2017-07-15.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    ScrollView,
    View,
    TouchableHighlight,
    Image,
    Slider
} from 'react-native';
import Masonry from 'react-native-masonry';

// list of images
const data = [
    {
        uri: 'https://s-media-cache-ak0.pinimg.com/736x/b1/21/df/b121df29b41b771d6610dba71834e512.jpg'
    },
    {
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQpD8mz-2Wwix8hHbGgR-mCFQVFTF7TF7hU05BxwLVO1PS5j-rZA'
    },
    {
        uri: 'https://s-media-cache-ak0.pinimg.com/736x/5a/15/0c/5a150cf9d5a825c8b5871eefbeda8d14.jpg'
    },
    {
        uri: 'https://s-media-cache-ak0.pinimg.com/736x/04/63/3f/04633fcc08f9d405064391bd80cb0828.jpg'
    },
    {
        uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQRWkuUMpLyu3QnFu5Xsi_7SpbabzRtSis-_QhKas6Oyj3neJoeug'
    },
    {
        uri: 'https://s-media-cache-ak0.pinimg.com/736x/a5/c9/43/a5c943e02b1c43b5cf7d5a4b1efdcabb.jpg'
    },
    {
        uri: 'https://i0.wp.com/www.youbodyhealth.com/wp-content/uploads/2016/08/Delicious-Foods-can-Harm-Your-Brain.jpg?'
    },
    {
        uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-03/29/15/campaign_images/buzzfeed-prod-fastlane-03/26-delicious-korean-foods-you-need-in-your-life-2-30138-1490814365-13_dblbig.jpg',
    },
    {
        uri: 'https://pbs.twimg.com/media/B59AOmICQAAiGGj.png',
    },
    {
        uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2013-12/enhanced/webdr05/17/17/enhanced-buzz-orig-2548-1387320822-8.jpg'
    },
    {
        uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-03/17/15/enhanced/webdr13/enhanced-6527-1426620797-18.jpg'
    },
    {
        uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-12/1/15/enhanced/webdr02/enhanced-18393-1417466529-5.jpg'
    },
    {
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXTmdaGSOFK8iBeYqoA6_XiQGGWvu6KGnqAxXYyvJA-JKin8ImQ'
    },
    {
        uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-04/3/15/enhanced/webdr06/enhanced-24427-1428089292-2.jpg'
    },
    {
        uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-12/28/12/asset/buzzfeed-prod-web-09/sub-buzz-24236-1482944714-1.jpg'
    },
    {
        uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-03/7/17/enhanced/webdr08/enhanced-buzz-8155-1457391039-5.jpg'
    },
    {
        uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-03/30/12/asset/buzzfeed-prod-fastlane-01/sub-buzz-24597-1490890739-1.jpg'
    },
    {
        uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-01/14/20/campaign_images/webdr15/which-delicious-mexican-food-item-are-you-based-o-2-20324-1452822970-1_dblbig.jpg'
    },
    {
        uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-11/30/10/enhanced/webdr15/enhanced-18265-1448896942-17.jpg'
    },
    {
        uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-12/30/16/enhanced/webdr04/enhanced-15965-1451509932-6.jpg'
    }
];

export default class MyPage extends Component {
    constructor() {
        super();
        this.state = {
            columns: 2,
            paddingLeft:20,
            paddingRight:20,
            paddingTop:0
        };
    }

    render() {
        return (
            <View style={[styles.item]}>
                <View style={[styles.backgroundgray]}>
                    <Text style={[styles.category]}>누적시간 300초</Text>
                </View>
                <Text style={[styles.category]}>뇌주름 스케일이 반지의 제왕급</Text>

                <View style={[styles.iconlist]}>
                    <Image style={[styles.imag]} source={require('../icons/settings.png')}/>
                    <Image style={[styles.imag]} source={require('../icons/settings.png')}/>
                    <Image style={[styles.imag]} source={require('../icons/settings.png')}/>
                </View>
                <ScrollView style={[styles.scrollView]} >
                    <View style={[styles.center, { marginTop: 0, marginBottom: 25, flexDirection: 'column'}]}>
                    </View>
                    <View style={{height: '100%', paddingLeft: this.state.paddingLeft,paddingRight:this.state.paddingRight,paddingTop:this.state.paddingTop}}>
                        <Masonry
                            bricks={data}
                            columns={this.state.columns}/>
                    </View>
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    center: {
        marginTop: 10,
        marginBottom: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    scrollView:{
        backgroundColor: '#ffffff',
        flex:3,
        height:200
    },
    item:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#FFFFFF'
    },
    category:{
        fontSize:18,
        alignSelf:'center',
        textDecorationLine:'underline'
    },
    flexd:{
        flex:1,
        flexDirection:'row'
    },
    imag:{
        height:30,
        width:30,
        marginLeft:10,
        flex:1,
        resizeMode:'contain'
    },
    iconlist:{
        flexDirection:'row',
        paddingTop:10,
        paddingBottom:10
    },
    backgroundgray:{
        backgroundColor:'#ededed'
    },
    lineView: {
        height: 5,
        alignSelf: 'stretch',
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 1,
        marginLeft:10,
        marginRight:10
    },


});