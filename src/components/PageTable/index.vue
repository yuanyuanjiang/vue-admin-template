<template>
  <div class="pageTable">
    <el-table
      :data="data"
      ref="table"
      style="width: 100%"
      header-row-class-name="header-row"
      @selection-change="handleSelectionChange"
      v-loading="loading"
    >
      <slot></slot>
    </el-table>
    <div class="pagenation">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout=" prev, pager, next, sizes,total"
        :total="total"
        background
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-table",
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      require: true,
      default: () => []
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40]
    },
    total: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      multipleSelection: [],
      current: this._props.currentPage || 1,
      limit: this._props.pageSize || 10
    };
  },

  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    handleSelectionChange(val) {
      // console.log("选择了--", val);
      // this.multipleSelection = val;
      this.$emit("selectionChange", val);
    },
    // 页码change
    handleCurrentChange(val) {
      this.current = val;
      var params = { current: val, limit: this._data.limit };
      this.$emit("handleChange", params);
    },
    // 页面size change
    handleSizeChange(val) {
      this.limit = val;
      var params = { current: this._data.current, limit: val };
      this.$emit("handleChange", params);
    },
    // 用于多选表格，清空用户的选择
    clearSelection() {
      this.$refs["table"].clearSelection();
    },
    // 用于多选表格，切换某一行的选中状态
    toggleRowSelection(row, selected) {
      this.$refs["table"].toggleRowSelection(row, selected);
    },
    // 用于多选表格，清空用户的选择
    toggleAllSelection() {
      this.$refs["table"].toggleAllSelection();
    },
    // 用于可展开表格与树形表格，切换某一行的展开状态
    toggleRowExpansion(row, expanded) {
      this.$refs["table"].toggleRowExpansion(row, expanded);
    },
    // 用于单选表格，设定某一行为选中行
    setCurrentRow(row) {
      this.$refs["table"].setCurrentRow(row);
    },
    // 用于清空排序条件，数据会恢复成未排序的状态
    clearSort() {
      this.$refs["table"].clearSort();
    },
    // 清除过滤条件
    clearFilter(columnKey) {
      this.$refs["table"].clearFilter(columnKey);
    },
    // 对 Table 进行重新布局
    doLayout() {
      this.$refs["table"].doLayout();
    },
    // 对 Table 进行重新布局
    sort(prop, order) {
      this.$refs["table"].sort();
    }
  }
};
</script>

<style lang="scss" scoped>
.pageTable {
  overflow: hidden;
}
.pagenation {
  float: right;
  margin-top: 10px;
  margin-bottom: 30px;
}
::v-deep.el-table .header-row {
  th {
    background: rgba(18, 141, 119, 0.1);
    color: rgba(0, 0, 0, 0.75);
  }
  th:nth-child(1),
  th:last-child {
    border-radius: 4px 4px 0px 0px;
  }
}
::v-deep.el-pagination.is-background {
  .el-pager {
    li:not(.disabled).active {
      background: #01b3cf;
    }
    li:not(.disabled) {
      background: #fff;
    }
  }

  .btn-next,
  .btn-prev {
    background: #fff;
  }
}
</style>
