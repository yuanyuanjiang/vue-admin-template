<template>
  <div>
    <el-card class="sex-box">
      <div class="sex-line">
        <div class="male" :style="{ width: male }"></div>
        <div class="female" :style="{ width: female }"></div>
      </div>
      <div class="sex-desc">
        <div class="male-box"></div>
        <div>男 {{ male }}</div>
        <div class="female-box"></div>
        <div>女 {{ female }}</div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  props: {
    male: {
      type: String,
      default: "50%",
    },
    female: {
      type: String,
      default: "50%",
    },
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>
<style>
.sex-box {
  width: 100%;
  margin-bottom: 20px;
}
.sex-line {
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.sex-desc {
  display: flex;
  width: 100%;
  margin-top: 15px;
  flex-direction: row;
  justify-content: flex-end;
  height: 40px;
  align-items: center;
}
.male-box {
  height: 30px;
  width: 30px;
  background-color: blue;
  margin-right: 15px;
}
.female-box {
  height: 30px;
  width: 30px;
  background-color: red;
  margin-left: 50px;
  margin-right: 15px;
}

.male {
  width: 36%;
  height: 50px;
  background-color: blue;
}
.female {
  width: 94%;
  height: 50px;
  background-color: red;
}
</style>
