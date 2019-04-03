var one = [{
    "specs": [{
        "specName": "颜色",
        "specValue": "红色"
    }, {
        "specName": "尺寸",
        "specValue": "25寸"
    }],
    "price": "1"
}, {
    "specs": [{
        "specName": "颜色",
        "specValue": "红色"
    }, {
        "specName": "尺寸",
        "specValue": "30寸"
    }],
    "price": "1"
}, {
    "specs": [{
        "specName": "颜色",
        "specValue": "蓝色"
    }, {
        "specName": "尺寸",
        "specValue": "25寸"
    }],
    "price": "1"
}, {
    "specs": [{
        "specName": "颜色",
        "specValue": "蓝色"
    }, {
        "specName": "尺寸",
        "specValue": "30寸"
    }],
    "price": "1"
}]

var two = [{
    "specs": [{
        "specName": "颜色",
        "specValue": "红色"
    }, {
        "specName": "尺寸",
        "specValue": "30寸"
    }]
}, {
    "specs": [{
        "specName": "颜色",
        "specValue": "蓝色"
    }, {
        "specName": "尺寸",
        "specValue": "30寸"
    }]
}]

two.forEach((item, index) => {
    let inx = one.findIndex(it => JSON.stringify(it.specs) == JSON.stringify(item.specs))
    if (inx !== -1) {
        item = one[inx]
    }
})
console.log(JSON.stringify(two))


function xxx() {
    var that = this
    var currentPage = 0; // 因为数组下标是从0开始的，所以这里用了0
    var tips = "加载第" + (currentPage + 1) + "页";
    console.log("load page " + (currentPage + 1));
    wx.showLoading({
        title: tips,
    }) // 刷新时，清空dataArray，防止新数据与原数据冲突
    that.setData({
        dataArray: []
    }) // 请封装自己的网络请求接口，这里作为示例就直接使用了wx.request.
    wx.request({
        url: 'https://raw.githubusercontent.com/lanfeng1993/LoadDataDemo/master/data/data.json',
        data: {},
        header: {
            'content-type': 'application/json'
        },
        success: function (res) {
            wx.hideLoading();
            var data = res.data; // 接口相应的json数据
            var articles = data.data; // 接口中的data对应了一个数组，这里取名为 articles
            var totalDataCount = articles.length; // console.log(articles);
            console.log("totalDataCount:" + totalDataCount);
            that.setData({
                ["dataArray[" + currentPage + "]"]: articles,
                currentPage: currentPage,
                totalDataCount: totalDataCount
            })
        }
    })

}
<scroll-view scroll-y="true" style = "height:100%;position: relative;" scroll-into-view="{{toView}}" scroll-with-animation = "true">
    <view id = "top"></view>
    <block wx:for="{{dataArray}}" wx:for-item="articles" wx:for-index="dataArrayIndex">
      <block wx:for="{{articles}}" wx:for-item="item" wx:key="{{item.id}}" wx:for-index="index">
        <template is = "articles" data='{{item:item,index:index,dataArrayIndex:dataArrayIndex}}'/> <!--将item和index都传到模版里去，不然模版中获取不到index-->
      </block>
    </block>
    <view id = "bottom"></view>
  </scroll-view>
