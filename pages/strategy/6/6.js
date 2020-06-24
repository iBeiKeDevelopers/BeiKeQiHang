const app = getApp();
Page({
  data: {
    scrollTo: '',
    items: [
      ['公交车站', 'a1'],
      ['乘车卡', 'a2'],
      ['地铁', 'a3'],
      ['出租车', 'a4'],
      ['机票、火车票', 'a5']
    ],
    CustomBar: app.globalData.CustomBar

  },
  imgpreview(e) {
    console.log(e.currentTarget)
    wx.previewImage({
      urls: [e.currentTarget.dataset.src],
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
});