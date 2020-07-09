// pages/more/more.js
Page({

  data: {
    list: [{
      name: '北科课表',
      src: '../../images/logo.png',
      info: '专为北科量身定制，最好用、最好看、最好玩的课程表小程序',
      url: 'schedule',
      appid: 'wx6521e461088f381f'
    }, {
      name: '哪天约',
      src: 'images/nty.jpg',
      info: '在这里，快速简单的发现群里的共同空闲时间，解决哪天约的千古难题，让群约更简单!',
      url: 'nty',
      appid: 'wx0116305024aa79ec'
    }, {
      name: '择优 FinelyTeam',
      src: 'images/finelyteam.jpg',
      info: '帮你更好的举办活动、建立团队，丰富你的校园生活，发现更多更有意思的活动并加入到其中~',
      url: '',
      appid: 'wxe453a8892a468da8'
    }, {
      name: '北科摇饭',
      src: 'images/ieat.jpeg',
      info: '提案大赛中脱颖而出。贝壳们可以根据自身的位置、喜好、价位等，在小程序中摇出你的注定一餐！',
      url: 'ieat',
      appid: 'wx10b439eed21c577d'
    }]
  },

  onLoad: function(options) {
    wx.showShareMenu({
      withShareTicket: true
    })
  },

  Go(e) {
    wx.navigateToMiniProgram({
      appId: e.currentTarget.dataset.appid,
      fail: console.error
    })
  },
  onShareAppMessage: function () {},
  onShareTimeline() {}
})