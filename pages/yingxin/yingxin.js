const app = getApp();
Page({
    data: {
      scrollTo: '',
      items: [['现场报到', 'a1'],
        ['体检事宜', 'b1'],
        ['家长安置', 'a2'],
        ['必备物品', 'a3'],
        ['入学考试', 'a4'],
        ['有关军训', 'a5']],
      CustomBar: app.globalData.CustomBar
    },
    onLoad: function (options) {
      wx.showShareMenu({
        withShareTicket: true
      })
    },
    modalClick(e) {
      this.setData({
        modalName: null
      }, function () {
        this.setData({
          scrollTo: e.currentTarget.dataset.target
        })
      })

    },
    showModal() {
      this.setData({
        modalName: 'DrawerModal'
      })
    },
    hideModal() {
      this.setData({
        modalName: null
      })
    },
    onShareAppMessage: function (res) {},
    onShareTimeline() {}
});