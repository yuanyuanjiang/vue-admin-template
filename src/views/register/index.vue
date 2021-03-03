<template>
  <div class="register-container">
    <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      :inline="true"
      label-position="left"
      label-width="140px"
    >
      <div class="title-container">
        <h3 class="title">深兰AI健康管理平台商户注册</h3>
        <el-card>
          <div slot="header" class="clearfix">
            <span>基本信息</span>
          </div>
          <div>
            <el-row>
              <el-col :span="12">
                <el-form-item label="商户名称：" prop="name">
                  <el-input style="width: 100%" placeholder="请输入商户名称" v-model="loginForm.name"></el-input> </el-form-item
              ></el-col>
              <el-col :span="12">
                <el-form-item label="注册地区：" prop="region">
                  <!-- <el-input  placeholder="请选择地区" v-model="loginForm.region"></el-input>  -->
                  <el-cascader
                      size="large"
                      :options="options"
                      v-model="loginForm.region"
                      style="width: 90%;"
                      @change="handleChange">
                    </el-cascader>
                  </el-form-item></el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="详细地址：" prop="address">
                  <el-input  placeholder="请完善地址" v-model="loginForm.address"></el-input> </el-form-item
              ></el-col>
              <el-col :span="12">
                <el-form-item label="统一社会信用代码：" prop="code">
                  <el-input  placeholder="请填写代码" v-model="loginForm.code"></el-input> </el-form-item
              ></el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="营业期限：" prop="time">
                  <!-- <el-input  placeholder="请填写营业期限" v-model="loginForm.time"></el-input>  -->
                  <el-date-picker type="date" placeholder="请选择营业期限" v-model="loginForm.time" style="width: 90%;"></el-date-picker>
                  </el-form-item></el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <div class="title-picture">
                  营业执照：请上传彩色原件或加盖公司公章的复印件
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <div class="up-picture">+上传</div>
                <div class="picture-rules">
                  图片大小不超过2M，支持格式为jpg/jpeg/png/bmp
                </div>
              </el-col>
            </el-row>
          </div>
        </el-card>
        <el-card class="contactInfo">
          <div slot="header" class="clearfix">
            <span>联系人</span>
          </div>
          <div>
            <el-row>
              <el-col :span="12">
                <el-form-item label="姓名：" prop="contactName">
                  <el-input placeholder="请输入姓名" v-model="loginForm.contactName"></el-input> </el-form-item
              ></el-col>
              <el-col :span="12">
                <el-form-item label="邮箱：" prop="email">
                  <el-input placeholder="请输入邮箱" v-model="loginForm.email"></el-input> </el-form-item
              ></el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="身份证号：" prop="idCard">
                  <el-input placeholder="请输入身份证"  v-model="loginForm.email"></el-input> </el-form-item
              ></el-col>
              <el-col :span="12">
                <el-form-item label="手机号：" prop="mobile">
                  <el-input placeholder="请输入手机号"  v-model="loginForm.mobile"></el-input>
                </el-form-item>
                <el-button type="primary">发送验证码</el-button>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="验证码：" prop="verificationCode">
                  <el-input placeholder="请输入验证码" v-model="loginForm.verificationCode"></el-input> </el-form-item
              ></el-col>
            </el-row>
          </div>
        </el-card>
        <el-row class="agreements">
          <el-col :span="12">
            <el-checkbox v-model="checked"
              >已阅读并同意《商户注册协议》</el-checkbox
            ></el-col>
              <el-col :span="12">
              <a class='login-btn'>已有账号，立即登录</a> </el-col
          ></el-col>
        </el-row>
        <el-row class="agreements">
          <el-button type="info" size='middle'>取消</el-button>
          <el-button type="primary" @click="submitForm('loginForm')">确定</el-button>
        </el-row>
        <div class='tips-text'>温馨提示：在我们收到资料的3个工作日内，我们会审核您的资料。如果有审核相关的问题，请您联系热线电话：400-117-7928。</div>
      </div>
    </el-form>
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate";
import { regionData, CodeToText } from "element-china-area-data";
export default {
  name: "Login",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入商户名称"));
      } else {
        callback();
      }
    };
    const validateRegion = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请选择注册地区"));
      } else {
        callback();
      }
    };

    const validateContactName = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入联系人"));
      } else {
        callback();
      }
    };

    const validateMobile = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入手机号"));
      } else {
        callback();
      }
    };

    const validateVerificationCode = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入验证码"));
      } else {
        callback();
      }
    };

    const validateEmail = (rule, value, callback) => {
      if (value) {
        if (value !== "") {
          var reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
          if (!reg.test(value)) {
            callback(new Error("请输入有效的邮箱"));
          }
        } else {
          callback();
        }
      }
    };

    return {
      options: regionData,
      checked: true,
      loginForm: {
        name: "",
        region: "",
        address: "",
        code: "",
        time: "",
        contactName: "",
        email: "",
        idCard: "",
        mobile: "",
        verificationCode: "",
      },
      loginRules: {
        name: [
          { required: true, trigger: "blur", validator: validateUsername },
        ],
        region: [
          { required: true, trigger: "blur", validator: validateRegion },
        ],
        address: [
          { required: true, trigger: "blur", validator: validateRegion },
        ],
        contactName: [
          { required: true, trigger: "blur", validator: validateContactName },
        ],
        mobile: [
          { required: true, trigger: "blur", validator: validateMobile },
        ],
        email: [{ required: false, trigger: "blur", validator: validateEmail }],
        verificationCode: [
          {
            required: true,
            trigger: "blur",
            validator: validateVerificationCode,
          },
        ],
      },
      loading: false,
      passwordType: "password",
      redirect: undefined,
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  methods: {
    //地区切换
    handleChange(value) {
      let data =
        CodeToText[value[0]] +
        ", " +
        CodeToText[value[1]] +
        ", " +
        CodeToText[value[2]];
      console.log("地区信息：", data);
    },

    //提交表单
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.register-container {
  min-height: 100%;
  width: 100%;
  overflow: hidden;

  .login-form{
    position: relative;
    max-width: 95%;
    margin: 0 auto;
    overflow: hidden;
  }
  .login-btn {
    font-size: 13px;
    color: #1e9efb;
  }

  .contactInfo {
    margin-top: 15px;
  }
  .agreements {
    margin-top: 30px;
    text-align: center;
  }

  .title-picture {
    font-size: 14px;
  }

  .tips-text {
    font-size: 14px;
    color: #909399;
    margin-top: 20px;
    padding-bottom: 30px;
  }

  .up-picture {
    height: 100px;
    width: 100px;
    text-align: center;
    border: 1px solid #f5f5f5;
    line-height: 100px;
    margin: 10px;
    margin-left: 80px;
    color: #aaa;
    font-size: 13px;
  }

  .picture-rules {
    font-size: 14px;
    color: #aaa;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;
    .title {
      font-size: 20px;
      color: $light_gray;
      text-align: center;
      color: #000;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
