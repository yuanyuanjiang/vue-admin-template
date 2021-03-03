<template>
  <!-- 子商户->编辑 -->
  <div>
    <el-dialog
      title="编辑子商户"
      :visible.sync="dialogVisible"
      center
      destroy-on-close
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <el-form :model="form" label-width="140px" ref="editForm" :rules="rules">
        <el-row>
          <el-col :span="22">
            <el-form-item label="当前商户名称：">
              <span>XXXX</span>
            </el-form-item>
            <el-form-item label="子商户名称：" prop="name">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="地址：" prop="address">
              <el-input v-model="form.address"></el-input>
            </el-form-item>
            <el-form-item label="联系人：" prop="relation">
              <el-input v-model="form.relation"></el-input>
            </el-form-item>
            <el-form-item label="联系人手机号：" prop="mobile">
              <el-input v-model="form.mobile"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleOk('editForm')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      form: {
        name: "",
        address: "",
        relation: "",
        mobile: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入子商户名称", trigger: "blur" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        address: [
          { required: true, message: "请输入地址", trigger: "blur" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        relation: [
          { required: true, message: "请输入联系人", trigger: "blur" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        mobile: [
          { required: true, message: "请输入联系人手机号", trigger: "blur" }
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    showModal(data) {
      this.dialogVisible = true;
      this.form = data;
    },
    handleOk(formName) {
      const that = this;
      that.$refs[formName].validate(valid => {
        if (valid) {
          // 调编辑接口
          that.dialogVisible = false;
          that.$emit("handleSearch");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
      console.log("this.form--", this._data.form);
    }
  }
};
</script>
