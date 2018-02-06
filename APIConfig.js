/* @flow */



export const basicURL = 'http://52.78.33.177:10424'


export default APIConfig = {
  // arts
  postImage: basicURL + '/arts/image', // post
  getImage: basicURL + '/arts/image', // get
  postArt: basicURL + '/arts/private/newart', // post
  getArtsOfUser: basicURL + '/arts/private/get/', // get
  postLikeArt: basicURL + '/arts/private/like-art', // post
  deleteLikeArt: basicURL + '/arts/private/dislike-art', // delete
  getLikeArtsOfUser: basicURL + '/arts/private/like-art/', // get
  getArtsOfMission: basicURL + '/arts/mission/', // get

  // missions
  putLikeMissionOfUser: basicURL + '/missions/private/mission/like', // put
  putDislikeMissionOfUser: basicURL + '/missions/private/mission/dislike', // put
  postDoneMission: basicURL + '/missions/private/done', // post
  getDoneMissions: basicURL + '/missions/private/done/', // get
  putUserAccumTime: basicURL + '/missions/private/user/time', // post
  getMissionRandomly: basicURL + '/missions/random', // get
  getTodayMission: basicURL + '/missions/mission/today', // get
  requestNotification: basicURL + '/missions/private/notification/random-mission', // get
  getMissionTypes: basicURL + '/missions/types', // get
  getBenefitTypes: basicURL + '/missions/benefit/types', // get

  // users
  login: basicURL + '/users/user/login', // post
  signIn: basicURL + 'users/user/create', // post
  checkID: basicURL + '/users/user/check/', // get


}


export const ResponseCode = {
  getOk: 200, // The request was successful and the response body contains the representation requested
  getFound: 302, // A common redirect reseponse, you can GET the representation at the URI in the Location response header.
  getNotModified: 304, // There is no new data to return.
  postOk: 201, // The request was successful, we updated the resourece and the response body contains the representation.
  postAccepted: 202, // The request has been accepted for further processing, which will be completed sometime later.
  deleteAccepted: 202, // The request has been accepted for further processing, which will be completed sometime late.
  deleteOk: 204, // The request was successful; the resourece was deleted.
  badRequest: 400, // The request was invalid or cannot be otherwise served. An accompanying error message will explain further. For security reasons, requests without suthenication are considered invalid and will yield this response.
  unauthorized: 401, // The authenication credentials are missing, or if supplied are not valid or not sufficient to access the resource.
  forbidden: 403, // The request has been refuese. See the accompanying message for the specific reason (most likely for exceeding rate limit)
  notFound: 404, // The uri requested is invalid or the resource requested does not exists
  notAcceptable: 406, // The request specified an invalid format.
  internalServerError: 500, // Something is horribly wrong
}
