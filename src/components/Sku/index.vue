<template>
  <div class='sku'>
    <div class='sku__attri'>
      <label class='sku__attri__name'>颜色:</label>
      <el-checkbox-group v-model='checkListOne'>
        <el-checkbox label='红色'></el-checkbox>
        <el-checkbox label='蓝色'></el-checkbox>
        <el-checkbox label='红蓝花色'></el-checkbox>
        <el-checkbox label='红黄花色'></el-checkbox>
        <el-checkbox label='银色'></el-checkbox>
      </el-checkbox-group>
    </div>

    <div class='sku__attri'>
      <label class='sku__attri__name'>尺寸:</label>
      <el-checkbox-group v-model='checkListTwo'>
        <el-checkbox label='20英寸'></el-checkbox>
        <el-checkbox label='6-12'></el-checkbox>
        <el-checkbox label='30寸'></el-checkbox>
        <el-checkbox label='35寸'></el-checkbox>
        <el-checkbox label='40寸'></el-checkbox>
      </el-checkbox-group>
    </div>
    <SkuTable :spec='specs' :table-data='tableData' @setOriginData='setOriginData'></SkuTable>
  </div>
</template>

<script>
import SkuTable from "./table.vue";
export default {
  name: "Sku",
  data() {
    return {
      checkListOne: [],
      checkListTwo: [],
      tableDatatemp: [
        {
          barCode: null,
          createId: 31,
          createTime: "2019-03-16 10:48:51",
          goodsId: 967,
          id: 1665,
          isDefault: 1,
          isDel: 0,
          price: 1000,
          sku360Params: null,
          skuImg:
            "https://img-test.hbunion.com/upload/image/201903/1552546169532.png",
          skuImgs: `["https://img-test.hbunion.com/upload/image/201903/1552546169532.png"]`,
          skuName: "asdasdf",
          skuNameLetter: "ASDASDF",
          specs: `[{"specId":32,"specName":"颜色","specValue":"红蓝花色","specValueId":168,"type":"0"},{"specId":53,"specName":"箱包尺寸","specValue":"20英寸","specValueId":196,"type":"1"}]`,
          stock: 1,
          stockLock: 0,
          updateId: null,
          updateTime: null
        },
        {
          barCode: null,
          createId: 31,
          createTime: "2019-03-16 10:48:51",
          goodsId: 967,
          id: 1666,
          isDefault: 0,
          isDel: 0,
          price: 1000,
          sku360Params: null,
          skuImg:
            "https://img-test.hbunion.com/upload/image/201903/1552546169532.png",
          skuImgs: `["https://img-test.hbunion.com/upload/image/201903/1552546169532.png"]`,
          skuName: "asdasdf",
          skuNameLetter: "ASDASDF",
          specs: `[{"specId":32,"specName":"颜色","specValue":"红蓝花色","specValueId":168,"type":"0"},{"specId":53,"specName":"箱包尺寸","specValue":"6-12","specValueId":212,"type":"1"}]`,
          stock: 1,
          stockLock: 0,
          updateId: null,
          updateTime: null
        },
        {
          barCode: null,
          createId: 31,
          createTime: "2019-03-16 10:48:51",
          goodsId: 967,
          id: 1667,
          isDefault: 0,
          isDel: 0,
          price: 1000,
          sku360Params: null,
          skuImg:
            "https://img-test.hbunion.com/upload/image/201903/1552704523951.jpg",
          skuImgs: `["https://img-test.hbunion.com/upload/image/201903/1552704523951.jpg"]`,
          skuName: "asdasdf",
          skuNameLetter: "ASDASDF",
          specs: `[{"specId":32,"specName":"颜色","specValue":"红黄花色","specValueId":169,"type":"0"},{"specId":53,"specName":"箱包尺寸","specValue":"20英寸","specValueId":196,"type":"1"}]`,
          stock: 1,
          stockLock: 0,
          updateId: null,
          updateTime: null
        },
        {
          barCode: null,
          createId: 31,
          createTime: "2019-03-16 10:48:51",
          goodsId: 967,
          id: 1668,
          isDefault: 0,
          isDel: 0,
          price: 1000,
          sku360Params: null,
          skuImg:
            "https://img-test.hbunion.com/upload/image/201903/1552704523951.jpg",
          skuImgs: `["https://img-test.hbunion.com/upload/image/201903/1552704523951.jpg"]`,
          skuName: "asdasdf",
          skuNameLetter: "ASDASDF",
          specs: `[{"specId":32,"specName":"颜色","specValue":"红黄花色","specValueId":169,"type":"0"},{"specId":53,"specName":"箱包尺寸","specValue":"6-12","specValueId":212,"type":"1"}]`,
          stock: 1,
          stockLock: 0,
          updateId: null,
          updateTime: null
        },
        {
          barCode: null,
          createId: 31,
          createTime: "2019-03-16 10:48:51",
          goodsId: 967,
          id: 1669,
          isDefault: 0,
          isDel: 0,
          price: 1000,
          sku360Params: null,
          skuImg:
            "https://img-test.hbunion.com/upload/image/201903/1552704526796.jpg",
          skuImgs: `["https://img-test.hbunion.com/upload/image/201903/1552704526796.jpg"]`,
          skuName: "asdasdf",
          skuNameLetter: "ASDASDF",
          specs: `[{"specId":32,"specName":"颜色","specValue":"银色","specValueId":172,"type":"0"},{"specId":53,"specName":"箱包尺寸","specValue":"20英寸","specValueId":196,"type":"1"}]`,
          stock: 1,
          stockLock: 0,
          updateId: null,
          updateTime: null
        },
        {
          barCode: null,
          createId: 31,
          createTime: "2019-03-16 10:48:51",
          goodsId: 967,
          id: 1670,
          isDefault: 0,
          isDel: 0,
          price: 1000,
          sku360Params: null,
          skuImg:
            "https://img-test.hbunion.com/upload/image/201903/1552704526796.jpg",
          skuImgs: `["https://img-test.hbunion.com/upload/image/201903/1552704526796.jpg"]`,
          skuName: "asdasdf",
          skuNameLetter: "ASDASDF",
          specs: `[{"specId":32,"specName":"颜色","specValue":"银色","specValueId":172,"type":"0"},{"specId":53,"specName":"箱包尺寸","specValue":"6-12","specValueId":212,"type":"1"}]`,
          stock: 1,
          stockLock: 0,
          updateId: null,
          updateTime: null
        }
      ],
      tableData: [], //表格数据
      originData: [] //表格动态数据，tableData删除的数据也会保留
    };
  },
  components: {
    SkuTable
  },
  mounted() {
    if (this.tableDatatemp.length > 0) {
      let arr = this.tableDatatemp.map(item => {
        return JSON.parse(item.specs);
      });

      let colorSet = new Set(),
        sizeSet = new Set();
      arr.forEach(item => {
        colorSet.add(item[0].specValue);
        sizeSet.add(item[1].specValue);
      });
      this.checkListOne = [...colorSet];
      this.checkListTwo = [...sizeSet];
      this.originData = this.tableDatatemp;
    }
  },
  methods: {
    dealTableData(arr) {
      //处理表格数据，如果规格相同的，将新的表格数据，从历史数据里取出
      this.tableData = arr;
      this.tableData = this.tableData.map((item, index) => {
        //判断原始数据中是否存在，specs中属性值很多，只依据为specs的数组specValue是否相同
        let inx = this.originData.findIndex(it => {
          let originArr = "";
          if (typeof it.specs == "string") {
            originArr = JSON.parse(it.specs);
          } else {
            originArr = it.specs;
          }
          let itArr = originArr.map(items => items.specValue),
            itemArr = item.specs.map(items => items.specValue);
          return JSON.stringify(itArr) == JSON.stringify(itemArr);
        });
        if (inx !== -1) {
          item = this.originData[inx];
        }
        return item;
      });
    },
    setOriginData(val) {
      //设置历史数据，历史数据为空的时候，历史数据=val，历史数据不为空的时候，判断val的specs是否存在在历史数据中
      //不存在就push到历史数据中，存在就更新历史数据
      val = JSON.parse(JSON.stringify(val));
      if (this.originData.length == 0) {
        this.originData = val;
      } else {
        val.forEach(item => {
          //判断原始数据中是否存在，specs中属性值很多，只依据为specs的数组specValue是否相同
          let inx = this.originData.findIndex(it => {
            let itArr = it.specs.map(items => items.specValue),
              itemArr = item.specs.map(items => items.specValue);
            return JSON.stringify(itArr) == JSON.stringify(itemArr);
          });
          if (inx == -1) {
            this.originData.push(item);
          } else {
            this.originData.splice(inx, 1, item);
          }
        });
      }
    },
    bothAttr() {
      //勾选了两种属性，生成checkListOne*checkListTwo个数据
      let arr = [];
      let tbleIndex = 0;
      this.checkListOne.forEach(oneitem => {
        this.checkListTwo.forEach(twoitem => {
          arr.push({
            specs: [],
            price: "",
            stock: "",
            barcode: "",
            default: ""
          });
          arr[tbleIndex].specs.push(
            { specName: "颜色", specValue: oneitem, type: 0 },
            { specName: "尺寸", specValue: twoitem, type: 1 }
          );
          tbleIndex++;
        });
      });

      return arr;
    },
    oneAttr() {
      //只勾选了第一种属性，生成checkListOne个数据
      let arr = [];
      this.checkListOne.forEach((oneitem, index) => {
        arr.push({
          specs: [],
          price: "",
          stock: "",
          barcode: "",
          default: ""
        });
        arr[index].specs.push({
          specName: "颜色",
          specValue: oneitem,
          type: 0
        });
      });
      return arr;
    },
    twoArrt() {
      //只勾选了第二种属性，生成checkListTwo个数据
      let arr = [];
      this.checkListTwo.forEach((twoitem, index) => {
        arr.push({
          specs: [],
          price: "",
          stock: "",
          barcode: "",
          default: ""
        });
        arr[index].specs.push({
          specName: "尺寸",
          specValue: twoitem,
          type: 1
        });
      });
      return arr;
    }
  },
  computed: {
    specs() {
      //勾选属性变化时候，根据勾选的属性生成table数据，specs本身并没有用
      let returnArr = [];
      if (this.checkListOne.length > 0 && this.checkListTwo.length > 0) {
        returnArr = this.bothAttr();
      } else if (this.checkListOne.length > 0) {
        returnArr = this.oneAttr();
      } else {
        returnArr = this.twoArrt();
      }
      this.dealTableData(returnArr);
      return returnArr;
    }
  }
};
</script>

<style scoped>
.sku__attri {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sku__attri__name {
  font-size: 14px;
  margin-right: 20px;
}
</style>

