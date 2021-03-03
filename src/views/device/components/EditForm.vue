<template>
  <el-dialog
    title="编辑设备B端"
    width="600px"
    :before-close="handleClose"
    :append-to-body="true"
    :visible.sync="dialogVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    center
  >
    <el-form
      ref="dataForm"
      v-loading="dialogLoading"
      :rules="rules"
      :model="info"
      label-position="left"
      label-width="120px"
    >
      <el-form-item label="商户名称:">
        <div>商1232</div>
      </el-form-item>
      <el-form-item label="设备SN号:">
        <div>123344445</div>
      </el-form-item>
      <el-form-item label="设备型号:">
        <div>DB-SWAM101C-V10R10</div>
      </el-form-item>
      <el-form-item label="设备名称:" prop="snName">
        <el-input v-model.trim="info.snName" :maxlength="40" placeholder="请输入" style="width: 100%;" />
      </el-form-item>
      <el-form-item label="生产日期:">
        <div>2020-02-06</div>
      </el-form-item>
      <el-form-item label="设备安装地址:" prop="address">
        <el-input v-model.trim="info.address" placeholder="请输入" style="width: 100%;" />
      </el-form-item>
      <el-form-item label="设备图片:" prop="imgUrl">
        <el-upload
          v-loading="uploadLoading"
          action="#"
          class="pic-upload"
          list-type="picture-card"
          :multiple="false"
          accept="image/png, image/jpeg"
          :before-upload="handleBeforeUpload"
          :http-request="uploadImg"
          :show-file-list="false"
          element-loading-text="图片上传中..."
        >
          <i v-if="!info.imgUrl" slot="default" class="el-icon-plus" />
          <div v-else>
            <img
              class="sn-img"
              :src="info.imgUrl"
              alt=""
            >
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item label="备注:" prop="desc">
        <el-input v-model.trim="info.desc" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea" placeholder="最多不超过100个字" :maxlength="100" :show-word-limit="true" style="width: 100%;" />
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
  name: 'EditForm',
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
      uploadLoading: false
    }
  },
  computed: {
    rules() {
      const rules = {
        snName: [
          { required: true, message: '请输入设备名称', trigger: 'change' },
          { max: 40, message: '应用名称最多不超过40个字', trigger: 'change' }
        ],
        address: [
          { required: true, message: '请输入设备安装地址', trigger: 'change' }
        ]
      }
      return rules
    }
  },
  methods: {
    confirm() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.$emit('confirm')
        }
      })
    },
    handleClose() {
      this.$emit('update:dialogVisible', false)
    },
    clearValidate() {
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    uploadImg() {

    },
    handleBeforeUpload(file) {
      const { size, type } = file
      const checkType = type === 'image/png' || type === 'image/jpeg'
      if (!checkType) {
        this.$message.error('请上传正确格式的图片！')
        return false
      }
      if (size > 1024 * 1024 * 2) {
        this.$message.error('设备图片大小不能超过2MB！')
        return false
      }
    }
  }
}
</script>

<style>
</style>
