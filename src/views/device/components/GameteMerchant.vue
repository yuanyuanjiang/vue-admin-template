<template>
  <div>
    <el-dialog
      title="分配子商户"
      width="600px"
      :before-close="handleClose"
      :append-to-body="true"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      center
    >
      <el-form
        :model="info"
        label-width="120px"
      >
        <el-form-item label="设备名称：">
          xxxxx
        </el-form-item>
        <el-form-item label="设备型号：">
          DYDD-V10
        </el-form-item>
        <el-form-item label="子商户名称：">
           <el-select v-model="info.merchantName" placeholder="请选择子商户名称" style="width: 100%;">
            <el-option label="子商户1" value="1"></el-option>
            <el-option label="子商户2" value="2"></el-option>
            <el-option label="子商户3" value="3"></el-option>
            <el-option label="子商户4" value="4"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button :disabled="dialogLoading" @click="handleClose">
          取消
        </el-button>
        <el-button type="primary" :loading="dialogLoading" @click="confirm">
          确定
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    info: {
      type: Object,
      request: true,
      default() {
        return {
          id: undefined
        }
      }
    },
    dialogVisible: {
      type: Boolean,
      request: true
    },
    dialogLoading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    confirm() {
      this.$emit('confirm')
    },
    handleClose() {
      this.$emit('update:dialogVisible', false)
    }
  }
};
</script>
