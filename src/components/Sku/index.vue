<template>
  <div class='sku'>
    <div class='sku__attri'>
      <label class='sku__attri__name'>颜色:</label>
      <el-checkbox-group v-model='checkListOne'>
        <el-checkbox label='红色'></el-checkbox>
        <el-checkbox label='蓝色'></el-checkbox>
        <el-checkbox label='金色'></el-checkbox>
        <el-checkbox label='银色'></el-checkbox>
        <el-checkbox label='粉色'></el-checkbox>
      </el-checkbox-group>
    </div>

    <div class='sku__attri'>
      <label class='sku__attri__name'>尺寸:</label>
      <el-checkbox-group v-model='checkListTwo'>
        <el-checkbox label='20寸'></el-checkbox>
        <el-checkbox label='25寸'></el-checkbox>
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
      tableData: [], //表格数据
      originData: [] //表格动态数据，tableData删除的数据也会保留
    };
  },
  components: {
    SkuTable
  },
  methods: {
    dealTableData(arr) {
      this.tableData = arr;
      this.tableData = this.tableData.map((item, index) => {
        let inx = this.originData.findIndex(
          it => JSON.stringify(it.specs) == JSON.stringify(item.specs)
        );
        if (inx !== -1) {
          item = this.originData[inx];
        }
        return item;
      });
    },
    setOriginData(val) {
      val = JSON.parse(JSON.stringify(val));
      if (this.originData.length == 0) {
        this.originData = val;
      } else {
        val.forEach(item => {
          let inx = this.originData.findIndex(
            it => JSON.stringify(it.specs) == JSON.stringify(item.specs)
          );
          if (inx == -1) {
            this.originData.push(item);
          } else {
            this.originData.splice(inx, 1, item);
          }
        });
      }
    },
    bothAttr() {
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

