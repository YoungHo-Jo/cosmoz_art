


export const basicURL = 'http://52.78.33.177:10424'


export default APIConfig = {
  // arts
  postImage: basicURL + '/arts/private/image', // post
  getImage: basicURL + '/arts/image', // get
  postArt: basicURL + '/arts/newart', // post
  getArtsOfUser: basicURL + '/arts/private/get/', // get
  postLikeArt: basicURL + '/arts/private/like-art', // post
  deleteLikeArt: basicURL + '/arts/private/dislike-art', // delete
  getLikeArtsOfUser: basicURL + '/arts/private/like-art/', // get
  getArtsOfMission: basicURL + '/arts/mission/', // get

  // missions
  putLikeMissionOfUser: basicURL + '/missions/private/mission/like', // put
  putDislikeMissionOfUser: basicURL + '/missions/private/mission/dislike', // put
  postDoneMission: basicURL + '/missions/private/done', // post
  gotDoneMissions: basicURL + '/missions/private/done/', // get
  putUserAccumTime: basicURL + '/missions/private/user/time', // post
  getMissionRandomly: basicURL + '/missions/random', // get
  getTodayMission: basicURL + '/missions/mission/today', // get
  requestNotification: basicURL + '/missions/notification/random-mission', // get

  // users
  login: basicURL + '/users/user/login', // post
  signIn: basicURL + 'users/user/create', // post
  checkID: basicURL + '/users/user/check/', // get


}