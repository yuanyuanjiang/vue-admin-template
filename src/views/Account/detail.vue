<template>
  <!-- 子商户详情 -->
  <div class="container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>基本信息</span>
      </div>
      <div>
        <el-row>
          <el-col :span="8">
            <p>商户名称：{{ detail.merchantName }}</p>
          </el-col>
          <el-col :span="8">
            <p>子商户名称：{{ detail.childName }}</p>
          </el-col>
          <el-col :span="8">
            <p>地址：{{ detail.address }}</p>
          </el-col>
          <el-col :span="8">
            <p>联系人：{{ detail.relation }}</p>
          </el-col>
          <el-col :span="8">
            <p>联系人手机号：{{ detail.mobile }}</p>
          </el-col>
        </el-row>
      </div>
    </el-card>
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
      }
    };
  },
  methods: {}
};
</script>
git stash
