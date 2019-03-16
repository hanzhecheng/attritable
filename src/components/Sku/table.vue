<template>
  <table>
    <thead>
      <tr>
        <th v-for='item in attrhead'>{{item}}</th>
        <th v-for='item in basicHead'>{{item}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for='(item,index) in tableData'>
        <!-- <td
          v-for='(subitem,inx) in item.specs'
          v-if='(index%item.specs.length)==0&&inx==0||subitem.type==1'
          :rowspan='subitem.type==0?item.specs.length:1'
        >{{subitem.specValue}}</td> -->
        <td  v-for='(subitem,inx) in item.specs'>{{subitem.specValue}}</td>
        <td v-for='subitem in basicBody'>
          <input type='text' v-model='item[subitem]' @input='updateTableData'>
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
      basicBody: ["price", "stock", "barcode", "default"]
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
    }
  },
  computed: {
    attrhead() {
      if (this.tableData.length > 0) {
        return this.tableData[0].specs.map(item => item.specName);
      }
    }
  }
};
</script>

<style scoped>
</style>

