<template>
  <!-- 用户分析 -->
  <div class="analysis-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="健康指数" name="0">健康指数</el-tab-pane>
      <el-tab-pane label="肌肤年龄" name="1">肌肤年龄</el-tab-pane>
      <el-tab-pane label="BMI" name="2">BMI</el-tab-pane>
      <el-tab-pane label="高压" name="3">高压</el-tab-pane>
      <el-tab-pane label="低压" name="4">低压</el-tab-pane>
      <el-tab-pane label="甘油三酯" name="5">甘油三酯</el-tab-pane>
      <el-tab-pane label="血糖" name="6">血糖</el-tab-pane>
      <el-tab-pane label="胆固醇" name="7">胆固醇</el-tab-pane>
      <el-tab-pane label="高密度脂蛋白胆固醇" name="8"
        >高密度脂蛋白胆固醇</el-tab-pane
      >
      <el-tab-pane label="低密度脂蛋白胆固醇" name="9"
        >低密度脂蛋白胆固醇</el-tab-pane
      >
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Analysis",
  data() {
    return {
      activeName: "2"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style lang="scss" scoped>
.analysis {
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
