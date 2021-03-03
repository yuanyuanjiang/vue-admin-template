<template>
  <!-- 设备详情 -->
  <div class="record-container">
    <el-card>
      <div slot="header">
        设备详情
      </div>
      <div class="description-list">
        <description class="description" label="设备ID" suffix=":" :value="'JJJJ'" />
        <description class="description" label="设备名称" suffix=":" :value="'ggggg'" />
        <description class="description" label="设备SN号" suffix=":" :value="'12333'" />
        <description class="description" label="设备型号" suffix=":" :value="'12346'" />
        <description class="description" label="创建时间" suffix=":" :value="'2020-02-03 12:00:00'" />
        <description class="description" label="上次启动时间" suffix=":" :value="'2020-02-04 12:00:00 '" />
      </div>
      <description class="description" label="商户名称" suffix=":" :value="'小红商家-商家1'" />
      <description class="description" label="设备图片" suffix=":" :value="'无'" />
      <description class="description" label="设备安装地址" suffix=":" :value="'XXXXXXXXXXXX'" />
      <div class="description description-wrapper">
        <div class="label">设备记录状态</div>
        <div class="suffix">:</div>
        <div class="value">
          <span class="link-type" @click="viewLog">查看</span>
        </div>
      </div>
      <description class="description" label="备注" suffix=":" :value="'XXXXXXXXXXXX'" />
    </el-card>
    <ViewLog
      :dialog-visible.sync="viewLogVisible"
    />
  </div>
</template>

<script>
import Description from '@/components/Description'
import ViewLog from './components/ViewLog.vue'

export default {
  name: 'EquipmentDetail',
  components: {
    Description,
    ViewLog
  },
  data() {
    return {
      viewLogVisible: false
    }
  },
  methods: {
    viewLog() {
      this.viewLogVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
.record-container {
  .description-list {
    display: flex;
    flex-wrap: wrap;
    .description {
      display: inline-block;
      width: 33.33333333%;
    }
  }
  .description {
    margin: 15px 0;
    padding: 0 16px;
  }
  .description-wrapper {
    div {
      display: inline-block;
      vertical-align: top;
      word-break: break-all;
    }
    .suffix {
      margin: 0 8px 0 2px;
    }
  }
}
</style>
