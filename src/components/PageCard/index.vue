<template>
  <el-card class="Page-card">
    <div slot="header" :class="{ 'card-header': hasExport || hasCreate }">
      <div class="card-header-left">
        <svg-icon
          icon-class="page-search"
          class="title-icon"
          v-if="icon_type != 'list'"
        />
        <svg-icon icon-class="page-list" class="title-icon" v-else />
        <span class="title">{{ title }}</span>
      </div>
      <div>
        <el-button
          type="primary"
          icon="el-icon-upload2"
          v-if="hasExport"
          @click="handleExport()"
        >
          导出
        </el-button>
        <el-button type="primary" v-if="hasCreate" @click="handleCreate()">
          {{ btnText }}
          <!-- <router-link :to="{ path: link }"> {{ btnText }}</router-link> -->
        </el-button>
      </div>
    </div>
    <slot></slot>
  </el-card>
</template>

<script>
export default {
  name: "page-card",
  props: {
    title: {
      type: String,
      default: "查询条件"
    },
    hasExport: {
      type: Boolean,
      default: false
    },
    hasCreate: {
      type: Boolean,
      default: false
    },
    btnText: {
      type: String,
      default: "创建"
    },
    icon_type: {
      type: String,
      default: "page-search"
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
    handleExport() {
      this.$emit("export");
    },
    handleCreate() {
      this.$emit("create");
    }
  }
};
</script>

<style lang="scss" scoped>
.Page-card {
  margin-bottom: 10px;
  // .title {
  //   font-size: 18px;
  // }
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-header-left {
  display: flex;
  align-items: center;
  .title-icon {
    font-size: 36px;
    margin-right: 10px;
  }
  .title {
    display: inline-block;
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
