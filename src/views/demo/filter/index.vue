<template>
  <div class="filter">
    <el-card>
      <div v-for="item in list">
        <p>{{ item.name }}</p>
      </div> </el-card
    ><br />
    <el-card>
      <div>
        <!-- 不使用过滤器 -->
        <p>1、￥{{ price }}</p>
        <p>2、设备状态：{{ deviceStatusFun(status) }}</p>
        <br />
        <!-- 局部过滤器 -->
        <p>3、{{ price | addPriceIcon }}</p>

        <p>4、设备状态：{{ status | deviceStatus }}</p>
        <br />
        <!-- 全局过滤器 -->
        <p>5、{{ price | filter_price }}</p>
        <p>6、设备状态：{{ status | filter_device_status }}</p>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "filter",
  data() {
    return {
      list: [
        { name: "marry", status: "a" },
        { name: "jyy", status: "b" }
      ],
      price: 200,
      status: "unline"
    };
  },
  filters: {
    addPriceIcon(value) {
      return `￥${value}`;
    },
    deviceStatus(value) {
      const STATUS = {
        online: "在线",
        sell: "出售",
        unline: "离线",
        stop: "停售"
      };
      return STATUS[value];
    }
  },
  watch: {},
  computed: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  // 生命周期用(){}
  methods: {
    // function
    deviceStatusFun(value) {
      const STATUS = {
        online: "在线",
        sell: "出售",
        unline: "离线",
        stop: "停售"
      };
      return STATUS[value];
    }
  }
};
</script>
