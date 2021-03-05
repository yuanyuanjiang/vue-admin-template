<template>
  <div>
    <button @click="handleAdd()">点击加1</button>
    <p>msg:{{ msg }}</p>
    <hr />
    <br />
    <example2></example2>
  </div>
</template>
<script>
import example2 from "./index2";
export default {
  components: {
    example2: example2
  },
  data() {
    return {
      msg: "点击判断打印的内容"
    };
  },
  created() {
    console.log("created--start");
    this.$nextTick(() => {
      console.log("created-nextTick----");
    });
    console.log("created---end");
  },
  mounted() {
    console.log("mounted-----");
  },
  methods: {
    handleAdd() {
      this.msg = "执行顺序 同步 => promise => setTimeout";
      console.log("start");
      setTimeout(() => {
        console.log("timeout");
      }, 0);
      this.$nextTick(() => {
        console.log("nextTick");
        this.$nextTick(() => {
          console.log("nextTick2");
        });
        setTimeout(() => {
          console.log("timeout2");
        }, 0);
      });
      console.log("end");
    }
  }
};
</script>
