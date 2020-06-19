// pages/nav/nav.js
var detailList = require('../../utils/data.js')

Page({
  data: {
    TabCur: 1,
    topScrollView: ['院系', '教学楼', '宿舍', '餐饮', '场馆', '校门', '服务'],
    latitude: 39.9913500000,
    longitude: 116.3607200000,
  },

  onLoad: function () {
    wx.showShareMenu({
      withShareTicket: true
    });
    this.mapCtx = wx.createMapContext('map')
  },

  onShow: function() {
    let id = this.data.TabCur;
    this.mapTool(detailList.listData[id].list)
  },

  tabSelect(e) {
    let id = e.currentTarget.dataset.id
    this.mapTool(detailList.listData[id].list)
    this.setData({
      TabCur: id,
      scrollLeft: (id - 1) * 60,
      animation: null,
      scrollTop: 0
    })
  },

  tapmarker: function(e) {
    console.log(e)
    this.setData({
      animation: e.markerId
    })
  },

  goToDetail: function (event) {
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + id,
    })
  },

  goToNav: function (event) {
    wx.openLocation({
      latitude: event.currentTarget.dataset.latitude,
      longitude: event.currentTarget.dataset.longitude,
      scale: 18,
      name: event.currentTarget.dataset.name,
    })
  },

  mapTool: function(list) {
    let points = [];
    let markers = [];
    list.forEach(item => {
      points.push({
        latitude: item.latitude, 
        longitude: item.longitude
      })
      markers.push({
        id: item.id,
        latitude: item.latitude,
        longitude: item.longitude,
        callout: {
          content: item.title,
          color: '#0081ff',
          fontSize: 10,
          bgColor: '#ffffff',
          padding: 2,
          display: 'ALWAYS',
          anchorY: 6
        },
        iconPath: '/images/location.png',
        width: 24,
        height: 24,
      })
    })
    this.setData({
      list: list,
      points: points,
      markers: markers
    })
  }

})