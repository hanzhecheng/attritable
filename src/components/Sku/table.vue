<template>
  <table>
    <thead>
      <tr>
        <th v-for='item in attrhead'>{{item}}</th>
        <th v-for='item in basicHead'>{{item}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for='(item,index) in tbldata'>
        <td v-for='(subitem,inx) in item.specs'>{{subitem.specValue}}</td>
        <td v-for='subitem in basicBody'>
          <input v-if="subitem!='isDefault'" type='text' v-model='item[subitem]' @input='updateTableData'>
          <input v-else type="radio" value="1" v-model='item[subitem]' @change="setDefault(index)">
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "SkuTable",
  data() {
    return {
      basicHead: ["价钱", "库存", "条形码", "选择默认商品"],
      basicBody: ["price", "stock", "barcode", "isDefault"]
    };
  },
  props: {
    tableData: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  methods: {
    updateTableData() {
      this.$emit("setOriginData", this.tableData);
    },
    setDefault(index){
      this.$emit("setDefault",index)
    }
  },
  computed: {
    attrhead() {
      if (this.tableData.length > 0) {
        let arr = [];
        if (typeof this.tableData[0].specs == "string") {
          arr = JSON.parse(this.tableData[0].specs);
        } else {
          arr = this.tableData[0].specs;
        }
        return arr.map(item => item.specName);
      }
    },
    tbldata() {
      let arr = [];
      this.tableData.forEach(item => {
        if (typeof item.specs == "string") {
          item.specs = JSON.parse(item.specs);
          arr.push(item)
        }else{
          arr.push(item)
        }
      });
      return arr
    }
  }
};
</script>

<style scoped>
</style>

