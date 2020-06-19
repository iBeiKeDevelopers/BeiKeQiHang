const app = getApp();
Page({
  data: {
    scrollTo: '',
    items: [
      ['校园网', 'a1'],
      ['常用网站', 'a2'],
      ['邮寄', 'a3'],
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