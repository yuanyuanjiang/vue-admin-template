<template>
  <div class="page-Box">
    <div class="app-containers">
      <el-card class="box-card">
        <div>设备总数</div>
        <div class="number">9990</div></el-card
      >
      <el-card class="box-card">
        <div>在线</div>
        <div class="number">1000</div></el-card
      >
      <el-card class="box-card">
        <div>离线</div>
        <div class="number">700</div></el-card
      >
    </div>
    <div class="mapDesc">
      <div id="myChartChina"></div>
      <div class="mapData">
        <div>各地区设备数量排名</div>
        <div class="ranking" v-for="item in rankingData">
          <div class="rankingNumber">{{ item.ranking }}</div>
          <div class="place">{{ item.place }}</div>
          <div class="numbers">{{ item.number }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rankingData: [
        { ranking: 1, place: "上海", number: "20000" },
        { ranking: 2, place: "北京", number: "10000" },
        { ranking: 3, place: "南京", number: "5000" },
        { ranking: 4, place: "青岛", number: "4000" },
        { ranking: 5, place: "上海", number: "20000" },
        { ranking: 6, place: "北京", number: "10000" },
        { ranking: 7, place: "南京", number: "5000" },
        { ranking: 8, place: "青岛", number: "4000" },
        { ranking: 9, place: "南京", number: "5000" },
        { ranking: 10, place: "青岛", number: "4000" },
      ],
    };
  },
  components: {},
  created() {},
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChartContainer = document.getElementById("myChartChina");
      var resizeMyChartContainer = function () {
        myChartContainer.style.width = document.body.offsetWidth / 2 + "px"; //页面一半的大小
      };
      resizeMyChartContainer();
      var myChartChina = this.$echarts.init(myChartContainer);

      function randomData() {
        return Math.round(Math.random() * 500);
      }
      // 绘制图表
      var optionMap = {
        tooltip: {},
        legend: {
          orient: "vertical",
          left: "left",
          data: [""],
        },
        // visualMap: {
        //   min: 0,
        //   max: 1500,
        //   left: "10%",
        //   top: "bottom",
        //   text: ["高", "低"],
        //   calculable: true,
        //   color: ["#0b50b9", "#c3e2f4"],
        // },
        selectedMode: "single",
        series: [
          {
            name: "",
            type: "map",
            mapType: "china",
            itemStyle: {
              normal: {
                borderColor: "rgba(0, 0, 0, 0.2)",
              },
              emphasis: {
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            showLegendSymbol: true,
            label: {
              normal: {
                show: true,
              },
              emphasis: {
                show: true,
              },
            },
            data: [
              { name: "北京", value: randomData() },
              { name: "天津", value: randomData() },
              { name: "上海", value: randomData() },
              { name: "重庆", value: randomData() },
              { name: "河北", value: randomData() },
              { name: "河南", value: randomData() },
              { name: "云南", value: randomData() },
              { name: "辽宁", value: randomData() },
              { name: "黑龙江", value: randomData() },
              { name: "湖南", value: randomData() },
              { name: "安徽", value: randomData() },
              { name: "山东", value: randomData() },
              { name: "新疆", value: randomData() },
              { name: "江苏", value: randomData() },
              { name: "浙江", value: randomData() },
              { name: "江西", value: randomData() },
              { name: "湖北", value: randomData() },
              { name: "广西", value: randomData() },
              { name: "甘肃", value: randomData() },
              { name: "山西", value: randomData() },
              { name: "内蒙古", value: randomData() },
              { name: "陕西", value: randomData() },
              { name: "吉林", value: randomData() },
              { name: "福建", value: randomData() },
              { name: "贵州", value: randomData() },
              { name: "广东", value: randomData() },
              { name: "青海", value: randomData() },
              { name: "西藏", value: randomData() },
              { name: "四川", value: randomData() },
              { name: "宁夏", value: randomData() },
              { name: "海南", value: randomData() },
              { name: "台湾", value: randomData() },
              { name: "香港", value: randomData() },
              { name: "澳门", value: randomData() },
            ],
          },
        ],
      };

      myChartChina.setOption(optionMap);
      window.onresize = function () {
        resizeMyChartContainer();
        myChartChina.resize();
      };
    },
  },
  mounted() {
    this.drawLine();
  },
};
</script>

<style lang="scss" scoped>
.page-Box {
  .app-containers {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 30%;
    margin-bottom: 20px;
    height: 140px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-size: 20px;
    font-weight: 500;
  }
  .mapDesc {
    display: flex;
    flex-direction: row;
  }
  #myChartChina {
    height: 500px;
    background-color: #fff;
    flex: 1;
  }
  .mapData {
    height: 500px;
    width: 30%;
    margin: 0 2%;
    background-color: #fff;
    border: 1px solid #aaa;
    padding: 10px;
  }
  .ranking {
    display: flex;
    width: 80%;
    flex-direction: row;
    height: 25px;
    line-height: 25px;
    margin-top: 20px;
  }
  .rankingNumber {
    height: 25px;
    width: 25px;
    line-height: 25px;
    text-align: center;
    border-radius: 25px;
    background-color: #000;
    color: #fff;
  }
  .place {
    padding-left: 10px;
    flex: 1;
  }
}
</style>
