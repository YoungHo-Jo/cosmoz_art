/**
 * Created by LG on 2017-07-15.
 */


import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View, TouchableHighlight,
  Dimensions, Image
} from 'react-native';
import Masonry from 'react-native-masonry';
import {Colors, Sizes} from "../../DefaultStyles";
import Icon from 'react-native-vector-icons/Entypo'
import UpperLinearGradient from "../UpperLinearGradient";
import LowerLinearGradient from "../LowerLinearGradient";
import ModalDropdown from "react-native-modal-dropdown/components/ModalDropdown";
import EStyleSheet from 'react-native-extended-stylesheet'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {fetchDropDownListState} from "../../actions/controlFlowActions";
import {connect} from "react-redux";

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

const FILTERING_BUTTON_CONTAINER_BAR_BG_COLOR = '#ededed'
const ICON_SIZE = 30
const filterMethod = {
  myArts: {
    byTime: '시간별',
    byBehavior: '행위별'
  },
  likeArts: {
    byMe: '내가 좋아한 작품',
    byOthers: '남이 좋아한 작품'
  },
  missions: '내가 한 미션'
}


class MyPage extends Component {
  constructor() {
    super();
    this.state = {
      columns: 2,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 0,

      isFirstBtnSelected: false,
      isSecondBtnSelected: false,
      isThirdBtnSelected: true,
      isModalDropDownShowing: false,
      touchableHighlightWidth: Dimensions.get('window').width / 3,
      filterMethod: filterMethod.myArts.byTime
    };
  }

  componentDidMount() {

  }

  findTouchableHighlightDimensions(layout) {
    const {x, y, width, height} = layout

    this.setState({
      touchableHighlightWidth: width
    })
  }

  _renderModalDropDownRow(rowData) {
    return (
        <View style={[eStyles.modalDropDown, this.state.filterMethod === rowData && {backgroundColor: FILTERING_BUTTON_CONTAINER_BAR_BG_COLOR},{width: this.state.touchableHighlightWidth}]}>
          <Text style={styles.dropDownText}>
            {rowData}
          </Text>
        </View>
    )
  }

  _renderModalDropDownSeparator() {
    return (
        <View>
        </View>
    )
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={[styles.accumulationTextContainer]}>
            <Text style={[styles.accumulationText]}>
              {this.props.userData.userInfo.accumulationTime}
            </Text>
          </View>
          <View style={styles.benefitTextContainer}>
            <Text style={styles.benefitText}>
              {this.props.userData.userInfo.userText}
            </Text>
          </View>

          <View style={[styles.filteringButtonContainer]}>
            <TouchableHighlight style={[styles.iconContainer, this.state.isFirstBtnSelected && styles.selectedButton]}
                                onPress={this._onFirBtnClick}
                                underlayColor={Colors.titleBarColor}>
              <SimpleLineIcons
                  name='note'
                  size={ICON_SIZE}
                  color={Colors.defaultTextColor}/>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.iconContainer, this.state.isSecondBtnSelected && styles.selectedButton]}
                                onPress={() => {
                                  this.refs.secondModalDropDown.show()
                                  this._onSecBtnClick()
                                }}
                                underlayColor={Colors.titleBarColor}
                                ref='parentTouchableHighlight'
              onLayout={(evt) => this.findTouchableHighlightDimensions(evt.nativeEvent.layout)}>
              <View style={eStyles.modalDropDownContainer}>
                <ModalDropdown options={[filterMethod.likeArts.byMe, filterMethod.likeArts.byOthers]}
                               dropdownStyle={styles.dropDown}
                               dropdownTextStyle={styles.dropDownText}
                               dropdownTextHighlightStyle={styles.dropDownTextHighlightStyle}
                               renderSeparator={() => this._renderModalDropDownSeparator()}
                               ref='secondModalDropDown'
                               style={eStyles.modalDropDownContainer}
                               disabled={true}
                               onSelect={(index,value) => this._onDropDownSelect(index, value)}
                               renderRow={(rowData) => this._renderModalDropDownRow(rowData)}>
                  <View style={eStyles.modalDropDownIcon}>
                    <Image
                        style={styles.logo}
                        source={require('../../icons/logo.png')}/>
                  </View>

                </ModalDropdown>
              </View>
            </TouchableHighlight>

            <TouchableHighlight style={[styles.iconContainer, this.state.isThirdBtnSelected && styles.selectedButton]}
                                onPress={() => {
                                  this.refs.thirdModalDropDown.show()
                                  this._onThrBtnClick()
                                }}
                                underlayColor={Colors.titleBarColor}
                                ref='parentTouchableHighlight'
                                onLayout={(evt) => this.findTouchableHighlightDimensions(evt.nativeEvent.layout)}>
              <View style={eStyles.modalDropDownContainer}>
                <ModalDropdown options={[filterMethod.myArts.byTime, filterMethod.myArts.byBehavior]}
                               dropdownStyle={styles.dropDown}
                               dropdownTextStyle={styles.dropDownText}
                               dropdownTextHighlightStyle={styles.dropDownTextHighlightStyle}
                               renderSeparator={() => this._renderModalDropDownSeparator()}
                               ref='thirdModalDropDown'
                               disabled={true}
                               onSelect={(index, value) => this._onDropDownSelect(index, value)}
                               renderRow={(rowData) => this._renderModalDropDownRow(rowData)}>
                  <View style={eStyles.modalDropDownIcon}>
                    <MaterialCommunityIcons
                        name='format-list-bulleted'
                        size={ICON_SIZE + 5}
                        color={Colors.defaultTextColor}/>
                  </View>

                </ModalDropdown>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.listViewContainer}>
            <UpperLinearGradient/>
            <ScrollView style={[styles.scrollView]}>
              <View style={[styles.center, {marginTop: 0, marginBottom: 25, flexDirection: 'column'}]}>
              </View>
              <View style={{
                height: '100%',
                paddingLeft: this.state.paddingLeft,
                paddingRight: this.state.paddingRight,
                paddingTop: this.state.paddingTop
              }}>
                <Masonry
                    bricks={data}
                    columns={this.state.columns}/>
              </View>
            </ScrollView>
            <LowerLinearGradient/>
          </View>
        </View>
    );
  }

  _onFirBtnClick = () => {
    this.setState({
      isFirstBtnSelected: true,
      isSecondBtnSelected: false,
      isThirdBtnSelected: false,
    })
  }

  _onSecBtnClick = () => {
    this.setState({
      isFirstBtnSelected: false,
      isSecondBtnSelected: true,
      isThirdBtnSelected: false,
    })
  }

  _onThrBtnClick = () => {
    this.setState({
      isFirstBtnSelected: false,
      isSecondBtnSelected: false,
      isThirdBtnSelected: true
    })
  }

  _onDropDownSelect(index, value) {
    switch(value) {
      case filterMethod.myArts.byTime:
        console.log('시간별로 해라')
          this.setState({
            filterMethod: filterMethod.myArts.byTime
          })
        return
      case filterMethod.myArts.byBehavior:
        console.log('행위별로 해라')
          this.setState({
            filterMethod: filterMethod.myArts.byBehavior
          })
        return
      case filterMethod.likeArts.byMe:
        console.log('내가 좋아한 거로 해라')
          this.setState({
            filterMethod: filterMethod.likeArts.byMe
          })
        return
      case filterMethod.likeArts.byOthers:
        console.log('내꺼 중에 남이 좋아한 거로 해라')
          this.setState({
            filterMethod: filterMethod.likeArts.byOthers
          })
        return
      default:
        this.setState({
          filterMethod: filterMethod.myArts.byTime
        })
        console.log('기본이다')
    }
  }

}

EStyleSheet.build()
const eStyles = EStyleSheet.create({
  modalDropDownContainer: {
    width: '100%',
    height: '100%',
  },
  modalDropDownIcon: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalDropDown: {
    height: Sizes.titleBarHeight,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.defaultPageBgColor
  },
  center: {
    marginTop: 10,
    marginBottom: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  scrollView: {
    backgroundColor: '#ffffff',
    flex: 3,
    height: 200
  },
  accumulationText: {
    fontSize: Sizes.fontSize,
    color: Colors.defaultTextColor,
    fontWeight: Sizes.fontWeight,
    alignSelf: 'center',
    // textDecorationLine: 'underline'
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filteringButtonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: FILTERING_BUTTON_CONTAINER_BAR_BG_COLOR,
    height: Sizes.titleBarHeight
  },
  accumulationTextContainer: {
    backgroundColor: FILTERING_BUTTON_CONTAINER_BAR_BG_COLOR,
    height: Sizes.titleBarHeight,
    alignItems: 'center',
    justifyContent: 'center'
  },
  lineView: {
    height: 5,
    alignSelf: 'stretch',
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 1,
    marginLeft: 10,
    marginRight: 10
  },
  benefitTextContainer: {
    height: Sizes.titleBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: Colors.defaultTextColor,
    // borderBottomWidth: 0.5,
  },
  benefitText: {
    fontSize: Sizes.fontSize,
    color: Colors.defaultTextColor,
    fontWeight: Sizes.fontWeight,
    alignSelf: 'center',
  },
  listViewContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  selectedButton: {
    backgroundColor: Colors.titleBarColor
  },
  modalDropDownContainer: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#849201'
  },
  dropDown: {
    height: Sizes.titleBarHeight * 2,
    borderColor: '#ffffff'
  },
  dropDownText: {
    fontSize: Sizes.fontSize - 5,
    color: Colors.defaultTextColor
  },
  logo: {
    width: ICON_SIZE,
    resizeMode: 'contain',
  },
  dropDownTextHighlightStyle: {
    overlayColor: FILTERING_BUTTON_CONTAINER_BAR_BG_COLOR
  }
});

function mapStateToProps(state) {
  return {
    userData: state.userData,
    controlData: state.controlFlowReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchDropDownState: (isShown) => fetchDropDownListState(isShown)
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(MyPage);