//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    console.log(this.data.motto);
    //页面跳转
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //测试
  ChangeMotto: function() {
    this.setData({
      motto: "www"
    });
  },
  tiaozhuan:function(){
    wx.navigateTo({
      url: '../test/test'
    })
  },
  //当页面加载好之后执行
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
