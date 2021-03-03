<template>
  <!-- 创建子商户 -->
  <div class="container">
    <el-card>
      <el-form :model="form" label-width="140px" :rules="rules">
        <el-row>
          <el-col :span="22">
            <el-form-item label="当前商户名称：">
              <span>XXXX</span>
            </el-form-item>
            <el-form-item label="子商户名称：" prop="name">
              <el-input
                v-model="form.name"
                placeholder="请输入子商户名称"
              ></el-input>
            </el-form-item>
            <el-form-item label="地址：" prop="address">
              <el-input
                v-model="form.address"
                placeholder="请输入子商户地址"
              ></el-input>
            </el-form-item>
            <el-form-item label="联系人：" prop="relation">
              <el-input
                v-model="form.relation"
                placeholder="请输入子商户联系人"
              ></el-input>
            </el-form-item>
            <el-form-item label="联系人手机号：" prop="mobile">
              <el-input
                v-model="form.mobile"
                placeholder="请输入子商户联系人手机号"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <div class="btns">
          <el-form-item>
            <el-button>取消</el-button>
            <el-button type="primary">确定</el-button>
            <el-button type="primary">批量导入子商户</el-button>
          </el-form-item>
        </div>
      </el-form>
    </el-card>
    <el-card>
      <p>商户关系预览</p>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        mobile: "",
        releation: "",
        merchantName: "",
        createTime: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入子商户名称", trigger: "blur" }
        ],
        address: [
          { required: true, message: "请输入子商户地址", trigger: "blur" }
        ],
        relation: [
          { required: true, message: "请输入子商户联系人", trigger: "blur" }
        ],
        mobile: [
          {
            required: true,
            message: "请输入子商户联系人手机号",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
