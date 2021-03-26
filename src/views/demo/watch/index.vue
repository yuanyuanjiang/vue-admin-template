<template>
  <div class="watch">
    <p>FullName: {{ fullName }}</p>
    <p>FirstName: <input type="text" v-model="firstName" /></p>
    <br />
    <p>obj.fullName: {{ obj.fullName }}</p>
    <p>obj.firstName: <input type="text" v-model="obj.firstName" /></p>
  </div>
</template>
<script>
export default {
  name: "listen",
  data() {
    return {
      firstName: "Dawei",
      lastName: "Lou",
      fullName: "",
      obj: { firstName: "yuan", lastName: "jiang", fullName: "" }
    };
  },
  watch: {
    // 普通监听
    firstName(newName, oldName) {
      console.log("1111");
      this.fullName = newName + " " + this.lastName;
    },
    // handler方式监听
    firstName: {
      handler(newName, oldName) {
        console.log("2222");
        this.fullName = newName + " " + this.lastName;
      },
      immediate: true
    },
    // 深度监听
    obj: {
      handler(newName, oldName) {
        console.log("new--");
        // this.obj.fullName = newName + " " + this.obj.lastName;
        // console.log("obj.a changed", this.obj.fullName);
      },
      deep: true,
      immediate: true
    },
    "obj.firstName": {
      handler(newName, oldName) {
        console.log("obj.firstName changed");
        this.obj.fullName = newName + " " + this.obj.lastName;
      },
      immediate: true
      // deep: true
    }
  }
};
</script>
