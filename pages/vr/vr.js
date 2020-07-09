// pages/vr/vr.js
Page({
  onLoad: function (options) {
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  onShareAppMessage: function () {},
  onShareTimeline() {}
})