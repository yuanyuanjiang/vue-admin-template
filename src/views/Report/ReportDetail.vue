<template>
  <!-- 报告详情 -->
  <div  class="app-container">
    <el-card>
      <div slot="header">
        {{title}}
      </div>
      <div class="description-list">
        <description class="description" label="报告编号" suffix=":" :value="'BG12313'" />
        <description class="description" label="设备ID" suffix=":" :value="'JJJJJJ'" />
        <description class="description" label="设备来源" suffix=":" :value="'B端'" />
        <description class="description" label="设备SN号" suffix=":" :value="'12333'" />
        <description class="description" label="设备型号" suffix=":" :value="'12346'" />
        <description class="description" label="设备版本号" suffix=":" :value="'XXX'" />
        <description class="description" label="创建时间" suffix=":" :value="'2020-02-03 12:00:00'" />
      </div>
      <description class="description" label="商户名称" suffix=":" :value="'小红商家-商家1'" />
      <description class="description" label="用户账号" suffix=":" :value="'1338177777'" />
      <description class="description" label="地区" suffix=":" :value="'上海'" />
      <description class="description" label="健康指数" suffix=":" :value="'95'" />
      <description class="description" label="肌肤年龄" suffix=":" :value="'18'" />
      <description class="description" label="BMI" suffix=":" :value="'20'" />
      <description class="description" label="高压" suffix=":" :value="'122'" />
      <description class="description" label="低压" suffix=":" :value="'75'" />
      <description class="description" label="血脂" suffix=":" :value="'XXXXX'" />
      <description class="description" label="血糖" suffix=":" :value="'XXXX'" />
      <description class="description" label="胆固醇" suffix=":" :value="'XXX'" />
      <description class="description" label="高密度脂蛋白胆固醇" suffix=":" :value="'XXX'" />
      <description class="description" label="低密度脂蛋白胆固醇" suffix=":" :value="'XXXXXX'" />
      <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3642003233,629840707&fm=26&gp=0.jpg" style="max-width: 480px; max-height: 620px;" alt="">
    </el-card>
  </div>
</template>

<script>
import Description from '@/components/Description'

export default {
  name: 'ReportDetail',
  components: {
    Description
  },
  data() {
    return {
      title: '用户1111111的报告'
    }
  },
}
</script>

<style lang="scss" scoped>
.app-container {
  .description-list {
    display: flex;
    flex-wrap: wrap;
    .description {
      display: inline-block;
      width: 33.33333333%;
    }
  }
  .description {
    margin: 15px 0;
    padding: 0 16px;
  }
}
</style>
