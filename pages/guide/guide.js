Page({

  data: {
    screenHeight: 1205
  },
  onLoad: function () {
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
    wx.navigateTo({
      url: e.currentTarget.dataset.target + '/' + e.currentTarget.dataset.target,
    })
  }
})