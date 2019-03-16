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