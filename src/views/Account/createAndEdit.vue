<template>
  <!-- 子商户->编辑 -->
  <div>
    <el-dialog
      width="600px"
      :title="title"
      :visible.sync="dialogVisible"
      center
      destroy-on-close
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <el-form :model="form" label-width="140px" ref="editForm" :rules="rules">
        <el-row>
          <el-col :span="22">
            <el-form-item label="用户名：" prop="userName">
              <el-input v-model="form.userName"></el-input>
            </el-form-item>
            <el-form-item label="手机号：" prop="mobile">
              <el-input v-model="form.mobile"></el-input>
            </el-form-item>
            <el-form-item label="角色名：" prop="roleId">
              <el-select v-model="form.roleId" placeholder="请选择">
                <el-option label="管理员" value="admin"></el-option>
                <el-option label="运营人员" value="operator"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="绑定子商户：" prop="childMerchant">
              <el-input v-model="form.childMerchant"></el-input>
            </el-form-item>
            <el-form-item label="角色对应的权限："> </el-form-item>

            <el-form-item label="备注：" prop="remark">
              <el-input v-model="form.remark" type="textarea"></el-input>
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
      title: "创建账户",
      dialogVisible: false,
      form: {
        userName: "",
        roleId: "",
        childMerchant: "",
        mobile: ""
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        mobile: [{ required: true, message: "请输入手机号", trigger: "blur" }],
        roleId: [{ required: true, message: "请选择角色名", trigger: "blur" }]
      }
    };
  },
  methods: {
    showModal(type, data) {
      this.dialogVisible = true;
      this.title = type == "add" ? "创建账户" : "编辑账户";
      this.form = type == "add" ? {} : data;
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
