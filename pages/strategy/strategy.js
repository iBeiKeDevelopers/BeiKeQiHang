Page({

  data: {
    screenHeight: 1205
  },
  onLoad: function () {
    wx.showShareMenu({
      withShareTicket: true
    })
    this.onShareTimeline()
    var height = 1205
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.screenHeight)
        height = (res.screenHeight * 2) - 130
      },
    })
    console.log(height)
    this.setData({
      screenHeight: height
    });
  },
  goTo: function (e) {
    var self = this
    var target = e.currentTarget.dataset.target
    self.setData({
      animation: target
    })
    wx.navigateTo({
      url: target + '/' + target,
    })
    setTimeout(function() {
      self.setData({
        animation: ''
      })
    }, 1000)
  },
  onShareAppMessage: function (res) {
    // if (res.from === 'button') {
    //   // 来自页面内转发按钮
    //   console.log(res.target)
    // }
    // return {
    //   title: '自定义转发标题',
    //   path: '/page/user?id=123'
    // }
  },
  onShareTimeline: function (res) {}
})