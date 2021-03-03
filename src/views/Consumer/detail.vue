<template>
  <!-- 用户详情 -->
  <div class="container">
    <el-card class="userInfo">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="image"
      />
      <el-row>
        <el-col :span="8">
          <span>用户ID：{{ detail.merchantName }}</span>
        </el-col>
        <el-col :span="8">
          <span>用户昵称：{{ detail.childName }}</span>
        </el-col>
        <el-col :span="8">
          <span>联系方式：{{ detail.address }}</span>
        </el-col>
        <el-col :span="8">
          <span>来源：{{ detail.relation }}</span>
        </el-col>
        <el-col :span="8">
          <span>创建时间：{{ detail.mobile }}</span>
        </el-col>
        <el-col :span="8">
          <span>上次启动时间：{{ detail.address }}</span>
        </el-col>
        <el-col :span="8">
          <span>商户名称：{{ detail.relation }}</span>
        </el-col>
        <el-col :span="8">
          <span>备注：{{ detail.mobile }}</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8"
          ><div class="deviceDetail">
            <div>设备ID：MJ78787</div>
            <div>设备型号：DB-1123123123232</div>
            <div>设备SN号：DB-RRRR123232</div>
            <div>最近登录：2021-020-05 14:40:22</div>
          </div></el-col
        >
      </el-row>
    </el-card>
    <br />
    <el-card class="member">
      <div slot="header" class="clearfix">
        <span>我的成员（2）</span>
      </div>
      <el-row :gutter="20">
        <el-col :span="8">
          <div class="item">
            <div class="header">
              <div class="avtar">我</div>
              <el-button
                type="text"
                class="button"
                @click="dialogVisible = true"
                >近期报告</el-button
              >
            </div>

            <div class="info">
              <div>成员名称：我</div>
              <div>成员称呼：自己</div>
              <div>民族：保密</div>
              <div>性别：男</div>
              <div>
                内容偏好：<el-tag v-for="item in preference" size="small">{{
                  item.value
                }}</el-tag>
              </div>
              <div>出生年月：2020年1月</div>
              <div>身高：2.1m</div>
              <div>体重：85kg</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-card>
    <el-dialog
      title=""
      :visible.sync="dialogVisible"
      width="30%"
      class="dialog"
    >
      <div class="item">
        <div class="header">
          <div class="avtar">我</div>
          <el-button type="text" class="button" @click="dialogVisible = true"
            >基础信息</el-button
          >
        </div>

        <div class="info">
          <div>检测时间：2021-01-09 11:11:11</div>
          <div>健康指数95</div>
          <div>肌肤年龄 18</div>
          <div>BMI：20</div>

          <div>高压：122 低压：75</div>
          <div>血脂：XXXXX.1m</div>
          <div>血糖：XXXX</div>
          <div>胆固醇：XXX</div>
          <div>高密度脂蛋白胆固醇:XXX</div>
          <div>低密度脂蛋白胆固醇： XXXXXX</div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detail: {
        merchantName: "京东",
        childName: "京东自营",
        address: "上海市长宁区威宁路",
        relation: "乔悄悄",
        mobile: "13199999999"
      },
      preference: [
        { name: "跑步", value: "run" },
        { name: "美食", value: "food" },
        { name: "读书", value: "reading" }
      ],
      dialogVisible: false
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.deviceDetail {
  background: #ddd;
  padding: 10px;
  margin-top: 20px;
  div {
    line-height: 26px;
  }
}
.image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.userInfo span {
  line-height: 30px;
}
.member .item,
.dialog .item {
  background: #f2f2f2;
  padding: 10px 20px 20px 10px;
  .header {
    overflow: hidden;
  }
  .avtar {
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 30px;
    font-weight: 500;
    color: #666;
    border: 2px solid #ccc;
    border-radius: 50%;
    background: #fff;
    float: left;
  }
  button {
    float: right;
    line-height: 30px;
  }
  .info div {
    line-height: 24px;
  }
  .dialog {
    background: #f2f2f2;
  }
}
</style>
