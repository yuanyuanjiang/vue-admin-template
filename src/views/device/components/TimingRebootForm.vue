<template>
  <el-dialog
    title="定时重启设备"
    width="600px"
    :before-close="handleClose"
    :append-to-body="true"
    :visible.sync="dialogVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    center
  >
    <el-form
      v-loading="dialogLoading"
      label-position="left"
      label-width="100px"
    >
      <el-form-item label="重复执行:">
        <el-select v-model="form.val" placeholder="请选择" clearable style="width: 100%;" class="filter-item">
          <el-option label="执行一次" :value="1" />
          <el-option label="每天" :value="2" />
          <el-option label="周一至周五" :value="3" />
          <el-option label="自定义" :value="4" />
        </el-select>
      </el-form-item>
      <el-form-item v-if="form.val == 4" label="">
        <el-checkbox-group v-model="form.weekVal">
          <el-checkbox :label="1">周一</el-checkbox>
          <el-checkbox :label="2">周二</el-checkbox>
          <el-checkbox :label="3">周三</el-checkbox>
          <el-checkbox :label="4">周四</el-checkbox>
          <el-checkbox :label="5">周五</el-checkbox>
          <el-checkbox :label="6">周六</el-checkbox>
          <el-checkbox :label="7">周日</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="开始时间:">
        <el-time-select
          v-model="form.startTime"
          :picker-options="{
            selectableRange: '00:00:00 - 23:59:59'
          }"
          placeholder="选择时间"
        />
      </el-form-item>
      <el-form-item label="状态:">
        <el-switch
          v-model="form.isOpen"
          active-text="开"
          inactive-text="关"
        />
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
</template>

<script>
export default {
  name: 'TimingRebootForm',
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
    return {
      form: {
        val: 1,
        weekVal: [],
        startTime: '',
        isOpen: true
      }
    }
  },
  methods: {
    confirm() {
      this.$emit('confirm')
    },
    handleClose() {
      this.$emit('update:dialogVisible', false)
    }
  }
}
</script>

<style>
</style>
