Page({

  data: {
    screenHeight: 1205
  },
  onLoad: function () {
    wx.showShareMenu({
      withShareTicket: true
    })
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
  }
})