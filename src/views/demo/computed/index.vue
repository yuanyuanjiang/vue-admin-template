<template>
  <div>
    <el-card
      ><h4>Computed</h4>
      <hr />
      <input type="text" v-model="firstName" />
      <h3>全名：{{ fullName }}</h3>
      <h3>全名：{{ fullName2 }}</h3>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "computed",
  data() {
    return { firstName: "foo", lastName: "bar", fullName2: "" };
  },
  computed: {
    // fullName: function() {
    //   console.log("computed--");
    //   return this.firstName + " " + this.lastName;
    // },
    fullName: {
      get: function() {
        return this.firstName + " " + this.lastName;
      },
      set: function(newValue) {
        var names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  },
  watch: {
    // firstName: function(newVal, oldVal) {
    //   this.fullName2 = this.firstName + "" + this.lastName;
    // }
    firstName: {
      handler(newVal, oldVal) {
        console.log("watch--");
        this.fullName2 = newVal + "&" + this.lastName;
      },
      immediate: true
    }
  }
};
</script>
