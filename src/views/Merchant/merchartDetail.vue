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
            <p>审核状态：{{ detail.childName }}</p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <p>注册地区：{{ detail.address }}</p>
          </el-col>
          <el-col :span="8">
            <p>详细地址：{{ detail.addressDetail }}</p>
          </el-col>
          <el-col :span="8">
            <p>统一社会信用代码：{{ detail.mobile }}</p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <p>营业期限：{{ detail.relation }}</p>
          </el-col>
          <el-col :span="8">
            <p>
              营业执照：<img
                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F16%2F05%2F145736f055d40aa.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616315288&t=678ecf0ffd30a7d6239ba4f5b05ebb0f"
                alt=""
                class="imgIcon"
              />
            </p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <p>申请时间：{{ detail.time1 }}</p>
          </el-col>
          <el-col :span="8">
            <p>审核通过时间：{{ detail.time2 }}</p>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>联系人信息</span>
      </div>
      <div>
        <el-row>
          <el-col :span="8">
            <p>联系人：{{ detail.merchantName }}</p>
          </el-col>
          <el-col :span="8">
            <p>联系人邮箱：{{ detail.email}}</p>
          </el-col>
          <el-col :span="8">
            <p>联系人手机号：{{ detail.mobile }}</p>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <p>身份证：{{ detail.idCard }}</p>
          </el-col>
        </el-row>
      </div>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>商户关系预览：</span>
      </div>
      <div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="merchantName" label="子商户名称" width="180">
          </el-table-column>
          <el-table-column prop="name" label="联系人" width="180">
          </el-table-column>
          <el-table-column prop="mibile" label="联系人手机号">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          merchantName: "子商户名称",
          mibile: "18987898765",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          merchantName: "子商户名称",
          mibile: "18987898765",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          merchantName: "子商户名称",
          mibile: "18987898765",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          merchantName: "子商户名称",
          mibile: "18987898765",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      detail: {
        idCard: "3223167877666555555",
        merchantName: "京东",
        email:'12333@qq.com',
        childName: "京东自营",
        address: "上海市",
        addressDetail:'长宁区威宁路95号',
        relation: "乔悄悄",
        mobile: "13199999999",
        time1: "2019-12-18 12:30",
        time2: "2020-12-18 12:30",
      },
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.imgIcon {
  height: 60px;
  width: 80px;
  vertical-align: top;
}
.box-card {
  margin-bottom: 10px;
}
</style>

