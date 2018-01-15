/* @flow */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  SectionList,
  View, TouchableHighlight,
  Dimensions, Image,
  Animated, Easing
} from 'react-native';
import GridView from 'react-native-super-grid';
import {Colors, Sizes} from "../../DefaultStyles";
import Icon from 'react-native-vector-icons/Entypo'
import UpperLinearGradient from "../UpperLinearGradient";
import LowerLinearGradient from "../LowerLinearGradient";
import MyPageGridViewImageItem from "./MyPageGridViewImageItem"
import MyPageGridViewTextItem from "./MyPageGridViewTextItem"
import ModalDropdown from "react-native-modal-dropdown/components/ModalDropdown";

import EStyleSheet from 'react-native-extended-stylesheet'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {fetchDropDownListState} from "../../actions/controlFlowActions";
import {connect} from "react-redux";
import {Header} from "react-navigation";
import PopupDialog, {ScaleAnimation} from "react-native-popup-dialog";
import PopupMsgBox from "../MainPage/PopupMsgBox";

// list of images
const data = [
  {uri: 'https://s-media-cache-ak0.pinimg.com/736x/b1/21/df/b121df29b41b771d6610dba71834e512.jpg'},
  {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQpD8mz-2Wwix8hHbGgR-mCFQVFTF7TF7hU05BxwLVO1PS5j-rZA'},
  {uri: 'https://s-media-cache-ak0.pinimg.com/736x/5a/15/0c/5a150cf9d5a825c8b5871eefbeda8d14.jpg'},
  {uri: 'https://s-media-cache-ak0.pinimg.com/736x/04/63/3f/04633fcc08f9d405064391bd80cb0828.jpg'},
  {text: "This is Text component"},
  {uri: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQRWkuUMpLyu3QnFu5Xsi_7SpbabzRtSis-_QhKas6Oyj3neJoeug'},
  {uri: 'https://s-media-cache-ak0.pinimg.com/736x/a5/c9/43/a5c943e02b1c43b5cf7d5a4b1efdcabb.jpg'},
  {uri: 'https://i0.wp.com/www.youbodyhealth.com/wp-content/uploads/2016/08/Delicious-Foods-can-Harm-Your-Brain.jpg?'},
  {uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-03/29/15/campaign_images/buzzfeed-prod-fastlane-03/26-delicious-korean-foods-you-need-in-your-life-2-30138-1490814365-13_dblbig.jpg',},
  {uri: 'https://pbs.twimg.com/media/B59AOmICQAAiGGj.png',},
  {text: "For mission text"},
  {uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2013-12/enhanced/webdr05/17/17/enhanced-buzz-orig-2548-1387320822-8.jpg'},
  {uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-03/17/15/enhanced/webdr13/enhanced-6527-1426620797-18.jpg'},
  {uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-12/1/15/enhanced/webdr02/enhanced-18393-1417466529-5.jpg'},
  {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXTmdaGSOFK8iBeYqoA6_XiQGGWvu6KGnqAxXYyvJA-JKin8ImQ'},
  {uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-04/3/15/enhanced/webdr06/enhanced-24427-1428089292-2.jpg'},
  {uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-12/28/12/asset/buzzfeed-prod-web-09/sub-buzz-24236-1482944714-1.jpg'},
  {text: "In various background color"},
  {uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-03/7/17/enhanced/webdr08/enhanced-buzz-8155-1457391039-5.jpg'},
  {uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2017-03/30/12/asset/buzzfeed-prod-fastlane-01/sub-buzz-24597-1490890739-1.jpg'},
  {uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-01/14/20/campaign_images/webdr15/which-delicious-mexican-food-item-are-you-based-o-2-20324-1452822970-1_dblbig.jpg'},
  {uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-11/30/10/enhanced/webdr15/enhanced-18265-1448896942-17.jpg'},
  {uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2015-12/30/16/enhanced/webdr04/enhanced-15965-1451509932-6.jpg'},
  {text: "행복해질 준비가 되었나요?"},
];


const FILTERING_BUTTON_CONTAINER_BAR_BG_COLOR = '#ededed';
const ICON_SIZE = 30;
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
};


class MyPage extends Component {
  constructor() {
    super();
    this.state = {
      isFirstBtnSelected: false,
      isSecondBtnSelected: false,
      isThirdBtnSelected: true,
      isModalDropDownShowing: false,
      touchableHighlightWidth: Dimensions.get('window').width / 3,
      filterMethod: filterMethod.myArts.byTime,
      isScrolledFar: false,
    };
  }

  findTouchableHighlightDimensions(layout) {
    const {x, y, width, height} = layout

    this.setState({
      touchableHighlightWidth: width
    })
  }

  findFilterButtonDimensions(layout) {
    const {x, y, width, height} = layout;

    this.setState({
      filterButtonY: y,
    })
  }

  _renderModalDropDownRow(rowData) {
    return (
        <View
            style={[eStyles.modalDropDown, this.state.filterMethod === rowData && {backgroundColor: FILTERING_BUTTON_CONTAINER_BAR_BG_COLOR}, {width: this.state.touchableHighlightWidth}]}>
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

          {this.props.userData.isLogin ?
              this.renderRealMyPage() : this.renderLoginGuidance()}

        </View>
    );
  }

  animationToTheTopButton(evt) {
    if (evt.nativeEvent.contentOffset.y > 100) {
      this.setState({isScrolledFar: true})
    } else {
      this.setState({isScrolledFar: false})
    }
  }

  renderToTheTopButton() {
    return (
      <View>
        <TouchableHighlight
          style={styles.toTheTopButton}
          underlayColor={'#bbbbbb'}
          onPress={() => this._sectionlist.scrollToLocation({sectionIndex: 0, itemIndex: 0, viewOffset:100})}>
          <Icon
            name="chevron-up"
            size={45}
            color="#555555"
            style={{backgroundColor: '#00000000', alignSelf: 'center'}}
            />
        </TouchableHighlight>
      </View>
    )
  }

  renderUserInfo() {
    return (
      <View>
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
      </View>
    );
  }

  renderFilterButtons() {
    return (
      <View onLayout={(evt) => this.findFilterButtonDimensions(evt.nativeEvent.layout)}>
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
                              this.props.fetchDropDownState(true)
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
                           onSelect={(index, value) => this._onDropDownSelect(index, value)}
                           renderRow={(rowData) => this._renderModalDropDownRow(rowData)}
                           onDropdownWillHide={() => this.props.fetchDropDownState(false)}>
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
                              this.props.fetchDropDownState(true)
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
                           renderRow={(rowData) => this._renderModalDropDownRow(rowData)}
                           onDropdownWillHide={() => this.props.fetchDropDownState(false)}>
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
      </View>
    );
  }

  renderList() {
    return (
      <View>
        <View style={styles.listViewContainer}>
          <View>
            <GridView
              style={{height: '100%'}}
              items={data}
              itemDimension={Dimensions.get('window').width * (40 / 100)}
              renderItem={this.renderItem.bind(this)}
              spacing={20}
              fixed={true}
            />
          </View>
        </View>
      </View>
    );
  }

  renderRealMyPage() {
    return (
        <View style={styles.realMyPage}>
          <SectionList
            ref={ref => this._sectionlist = ref}
            sections={[
              {data: [], title: this.renderUserInfo()},
              {data: [this.renderList()], title: this.renderFilterButtons()}
            ]}
            renderSectionHeader={({section})=> section.title}
            renderItem={({item})=> item}
            keyExtractor= {(item, index) => index}
            stickySectionHeadersEnabled={true}
            onScroll={(evt) => this.animationToTheTopButton(evt)}
          />
          <View style={{paddingBottom: Sizes.bottomBarHeight}}/>
          {this.state.isScrolledFar && this.renderToTheTopButton()}
        </View>
    )
  }

  renderLoginGuidance() {
    return (
        <View style={styles.loginGuidanceContainer}>
          <UpperLinearGradient/>

          {/* <Text style={styles.loginGuidanceText}>
          예술이네 가족이 되어주세요!
          </Text> */}


          <TouchableHighlight style={styles.loginButton}
                              onPress={() => {
                                this.props.navigation.navigate('LoginPage', {...this.props.navigation.state.params})
                              }}
                              underlayColor={Colors.titleBarColor}>
            <Text style={styles.loginText}>
              로그인
            </Text>
          </TouchableHighlight>
          <LowerLinearGradient/>
        </View>
    )
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
    switch (value) {
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

  renderItem(itemData) {
    if(itemData.uri) {
      return (
        <MyPageGridViewImageItem
          imageURL={itemData.uri}
          onClickImage={() => this.props.navigation.navigate('ImageViewerPage', {
            ...this.props.navigation.state.params,
            imageURL: itemData.uri
          })}
          //keyword = {itemData.keyword}
          //missionPK = {itemData.mission_pk}
        />
      );
    }
    else if (itemData.text) {
      return (
        <MyPageGridViewTextItem
          text={itemData.text}
          colorNum={1}
          //keyword = {itemData.keyword}
          //missionPK = {itemData.mission_pk}
        />
      );
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
  },
  realMyPage: {
    flex: 1,
    flexDirection: 'column'
  },
  loginGuidanceContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Sizes.bottomBarHeight
  },
  loginGuidanceText: {
    fontSize: 15,
    color: Colors.grayTextColor,
    fontWeight: Sizes.fontWeight,

    marginTop: 100,
  },
  loginText: {
    fontSize: 30,
    fontWeight: Sizes.middleFontWeight,
    color: Colors.defaultTextColor
  },
  loginButton: {
    width: 100,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#000000',
    borderWidth: 3,
  },
  toTheTopButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    right: 15,
    bottom: 45+15,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: "#ffffff",
    shadowColor: '#777777',
    shadowRadius:3,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 1.0,
    elevation: 3,
  },

});

function mapStateToProps(state) {
  return {
    userData: state.userData,
    controlData: state.controlFlowReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchDropDownState: (isShown) => dispatch(fetchDropDownListState(isShown))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyPage);
